<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { PageFlip } from 'page-flip'
import * as pdfjsLib from 'pdfjs-dist'
import type { PDFDocumentProxy } from 'pdfjs-dist'
import PdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?worker'
import 'pdfjs-dist/web/pdf_viewer.css'

pdfjsLib.GlobalWorkerOptions.workerPort = new PdfWorker()

const props = withDefaults(
  defineProps<{
    src: string | Uint8Array
    pageWidth?: number // Basisbreite einer Seite in px (bestimmt Renderqualität + Seitenverhältnis-Basis)
    dragToFlip?: boolean // true = Seiten per Maus ziehen; kollidiert mit Textmarkieren
  }>(),
  { pageWidth: 550, dragToFlip: false }
)

const host = ref<HTMLDivElement>()
const current = ref(0)
const total = ref(0)
const loading = ref(false)

// Bewusst keine reaktiven Refs: pdf.js/PageFlip-Objekte nicht in Vue-Proxies wickeln
let flip: PageFlip | null = null
let pdf: PDFDocumentProxy | null = null
let pageEls: HTMLElement[] = []
let rendered = new Set<number>()
let pdfPageWidth = 1
let ro: ResizeObserver | null = null
let task: ReturnType<typeof pdfjsLib.getDocument> | null = null

function cleanup() {
  ro?.disconnect()
  ro = null
  try { flip?.destroy() } catch { /* noop */ }
  flip = null
  task?.destroy()
  task = null
  pdf = null
  pageEls = []
  rendered = new Set()
  host.value?.replaceChildren()
}

async function load() {
  cleanup()
  if (!host.value) return
  loading.value = true

  task = pdfjsLib.getDocument(
    typeof props.src === 'string' ? { url: props.src } : { data: props.src.slice() }
  )
  const doc = await task.promise
  pdf = doc
  total.value = doc.numPages

  const first = (await doc.getPage(1)).getViewport({ scale: 1 })
  pdfPageWidth = first.width
  const pageHeight = Math.round((props.pageWidth * first.height) / first.width)
  host.value.style.setProperty('--fb-ratio', String(pageHeight / props.pageWidth))

  pageEls = Array.from({ length: doc.numPages }, (_, i) => {
    const el = document.createElement('div')
    el.className = 'fb-page'
    if (i === 0 || i === doc.numPages - 1) el.dataset.density = 'hard'
    return el
  })

  const book = document.createElement('div')
  book.append(...pageEls)
  host.value.replaceChildren(book)

  flip = new PageFlip(book, {
    width: props.pageWidth,
    height: pageHeight,
    size: 'stretch' as never,
    minWidth: 250,
    maxWidth: 900,
    minHeight: 300,
    maxHeight: 1400,
    showCover: true,
    maxShadowOpacity: 0.4,
    mobileScrollSupport: false,
    useMouseEvents: props.dragToFlip,
  })
  flip.loadFromHTML(pageEls)

  flip.on('flip', (e) => {
    current.value = e.data as number
    renderAround(current.value)
    updateScale()
  })
  flip.on('changeOrientation', () => requestAnimationFrame(updateScale))

  ro = new ResizeObserver(() => requestAnimationFrame(updateScale))
  ro.observe(host.value)

  loading.value = false
  renderAround(0)
}

function renderAround(i: number) {
  for (let n = Math.max(0, i - 2); n <= Math.min(total.value - 1, i + 3); n++) renderPage(n)
}

async function renderPage(i: number) {
  const doc = pdf
  if (!doc || rendered.has(i)) return
  rendered.add(i)
  try {
    const page = await doc.getPage(i + 1)
    if (doc !== pdf) return

    const base = page.getViewport({ scale: 1 })
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const vp = page.getViewport({ scale: (props.pageWidth / base.width) * dpr })

    const canvas = document.createElement('canvas')
    canvas.width = vp.width
    canvas.height = vp.height
    canvas.style.cssText = 'width:100%;height:100%;display:block'

    const textDiv = document.createElement('div')
    textDiv.className = 'textLayer'
    pageEls[i].append(canvas, textDiv)

    await page.render({ canvas, viewport: vp }).promise
    // Text-Layer in PDF-Einheiten (scale 1); die tatsächliche Größe steuert --scale-factor
    await new pdfjsLib.TextLayer({
      textContentSource: page.streamTextContent(),
      container: textDiv,
      viewport: base,
    }).render()
    updateScale()
  } catch (err) {
    rendered.delete(i)
    console.error('Seite konnte nicht gerendert werden', i + 1, err)
  }
}

// Text-Layer an die aktuelle (vom Flipbook skalierte) Seitenbreite anpassen
function updateScale() {
  if (!flip) return
  const w = flip.getRender().getRect().pageWidth
  if (!w) return
  const s = String(w / pdfPageWidth)
  for (const el of pageEls) {
    el.style.setProperty('--scale-factor', s)
    el.style.setProperty('--total-scale-factor', s)
  }
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'ArrowRight') flip?.flipNext()
  else if (e.key === 'ArrowLeft') flip?.flipPrev()
}

onMounted(load)
watch(() => props.src, load)
onBeforeUnmount(cleanup)

defineExpose({
  next: () => flip?.flipNext(),
  prev: () => flip?.flipPrev(),
  goTo: (page: number) => flip?.turnToPage(page - 1),
})
</script>

<template>
  <div class="fb-root" tabindex="0" @keydown="onKey">
    <div v-if="loading" class="fb-loading">Lade PDF …</div>
    <div ref="host" class="fb-host" />
    <div class="fb-controls">
      <button class="btn btn-primary" type="button" @click="flip?.flipPrev()">‹</button>
      <span>{{ Math.min(current + 1, total) }} / {{ total }}</span>
      <button class="btn btn-primary" type="button" @click="flip?.flipNext()">›</button>
    </div>
  </div>
</template>

<style>
.fb-root { outline: none; }
.fb-host {
  /* Doppelseite = 2 Seitenbreiten; Höhe soll max. 80vh sein */
  width: min(100%, calc(80vh * 2 / var(--fb-ratio, 1.414)));
  margin: 0 auto;
}
.fb-page { background: #fff; overflow: hidden; }
.fb-controls { display: flex; gap: 1rem; justify-content: center; align-items: center; padding: .5rem; }
.fb-loading { text-align: center; padding: 1rem; }

/* StPageFlip sperrt Textauswahl standardmäßig */
.fb-host .stf__parent,
.fb-host .stf__block,
.fb-page { user-select: text !important; -webkit-user-select: text !important; }
</style>