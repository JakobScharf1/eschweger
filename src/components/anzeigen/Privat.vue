<template>
    <h4>Nur <b>nicht gewerbliche Inserate</b> aus dem Verbreitungsgebiet.</h4>
    
    <section class="mb-5">
            Beispiele für Inserate von Privatpersonen, gemeinnützige Organisationen und Kirchen:<br/>
            Trauer & Gedenken, Grüße, Geburt, Hochzeit, Jubiläum, Konfirmation, Jugendweihe, Kommunion, Einschulung, bestandene Prüfungen, Schul-, Ausbildungs-, Studiumsabschluss uvm.<br/>
            <b>Kleinanzeigen</b> in Textform bis 500 Zeichen ohne gewerblichen Charakter sind <b>kostenfrei</b>!<br/>
            <a href="/kleinanzeigen">Hier</a> können Sie Kleinanzeigen aufgeben.
    </section>

    <section>
        <h2 class="mb-0">Format auswählen</h2>
        <small>Preise inkl. 19% MwSt.</small>
        <div class="row g-3 mt-1 mb-5">
            <AdFormatCard
                class="col-sm-12 col-md-6 col-lg-3"
                v-for="f in formats"
                :key="f.id"
                :value="f.id"
                :title="f.title"
                :width="f.width"
                :height="f.height"
                :subtitle="f.subtitle"
                :price="f.price"
                :selected="selectedId === f.id"
                @select="setSelectedId"
            />
        </div>
    </section>

    <section>
        <form ref="formRef" class="contact-form needs-validation" @submit.prevent="submitForm" novalidate>
            <div class="messages">
                <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
                <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
            </div>

            <div class="row mt-4 mb-6">
                <div class="col-12">
                    <strong v-if="selectedId === 'newsletter'">Ausgewähltes Format: Newsletter</strong>
                    <strong v-else-if="selectedFormat">Ausgewähltes Format: {{ selectedFormat.title }} <span v-if="selectedFormat.subtitle !== ''">| {{ selectedFormat.subtitle }}</span></strong>
                    <strong class="text-red" v-else>Bitte Format auswählen!</strong>
                </div>
            </div>

            <div class="row gx-4">
                <div class="col-md-6">
                    <div class="form-floating mb-4">
                        <input
                            type="text"
                            name="ausgabe"
                            class="form-control"
                            :class="{ 'is-invalid': errors.ausgabe && (showErrors || touched.ausgabe) }"
                            placeholder="Gewünschte Ausgabe"
                            required
                            v-model="form.ausgabe"
                            @blur="setTouched('ausgabe')"
                        />
                        <label>Gewünschte Ausgabe *</label>
                        <div v-if="errors.ausgabe && (showErrors || touched.ausgabe)" class="invalid-feedback">{{ errors.ausgabe }}</div>
                    </div>
                </div>
                <div class="col-md-6"></div>
                <hr class="mb-2">
                <div class="col-md-12 col-lg-6">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="kundennummer"
                        class="form-control"
                        placeholder="Kundennummer"
                        v-model="form.kundennummer"
                        />
                        <label>Kundennummer (falls vorhanden)</label>
                    </div>
                </div>
                <div class="col-lg-6"></div>
                <div class="col-md-12 col-lg-6">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="vorname"
                        class="form-control"
                        :class="{ 'is-invalid': errors.vorname && (showErrors || touched.vorname) }"
                        placeholder="Vorname"
                        required
                        v-model="form.vorname"
                        @blur="setTouched('vorname')"
                        />
                        <label>Vorname *</label>
                        <div v-if="errors.vorname && (showErrors || touched.vorname)" class="invalid-feedback">{{ errors.vorname }}</div>
                    </div>
                </div>

                <div class="col-md-12 col-lg-6">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="nachname"
                        class="form-control"
                        :class="{ 'is-invalid': errors.nachname && (showErrors || touched.nachname) }"
                        placeholder="Nachname"
                        required
                        v-model="form.nachname"
                        @blur="setTouched('nachname')"
                        />
                        <label>Nachname *</label>
                        <div v-if="errors.nachname && (showErrors || touched.nachname)" class="invalid-feedback">{{ errors.nachname }}</div>
                    </div>
                </div>

                <div class="col-12 col-md-10">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="strasse"
                        class="form-control"
                        :class="{ 'is-invalid': errors.strasse && (showErrors || touched.strasse) }"
                        placeholder="Straße"
                        required
                        v-model="form.strasse"
                        @blur="setTouched('strasse')"
                        />
                        <label>Straße *</label>
                        <div v-if="errors.strasse && (showErrors || touched.strasse)" class="invalid-feedback">{{ errors.strasse }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-2">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="hausnr"
                        class="form-control"
                        :class="{ 'is-invalid': errors.hausnr && (showErrors || touched.hausnr) }"
                        placeholder="Hausnr."
                        required
                        v-model="form.hausnr"
                        @blur="setTouched('hausnr')"
                        />
                        <label>Hausnr. *</label>
                        <div v-if="errors.hausnr && (showErrors || touched.hausnr)" class="invalid-feedback">{{ errors.hausnr }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="plz"
                        class="form-control"
                        :class="{ 'is-invalid': errors.plz && (showErrors || touched.plz) }"
                        placeholder="PLZ"
                        required
                        v-model="form.plz"
                        @blur="setTouched('plz')"
                        />
                        <label>PLZ *</label>
                        <div v-if="errors.plz && (showErrors || touched.plz)" class="invalid-feedback">{{ errors.plz }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-8">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="ort"
                        class="form-control"
                        :class="{ 'is-invalid': errors.ort && (showErrors || touched.ort) }"
                        placeholder="Ort"
                        required
                        v-model="form.ort"
                        @blur="setTouched('ort')"
                        />
                        <label>Ort *</label>
                        <div v-if="errors.ort && (showErrors || touched.ort)" class="invalid-feedback">{{ errors.ort }}</div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-floating mb-4">
                        <input
                        type="email"
                        name="email"
                        class="form-control"
                        :class="{ 'is-invalid': errors.email && (showErrors || touched.email) }"
                        placeholder="Email"
                        required
                        v-model="form.email"
                        @blur="setTouched('email')"
                        />
                        <label>Email *</label>
                        <div v-if="errors.email && (showErrors || touched.email)" class="invalid-feedback">{{ errors.email }}</div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-floating mb-4">
                        <input
                        type="tel"
                        name="telefon"
                        class="form-control"
                        :class="{ 'is-invalid': errors.telefon && (showErrors || touched.telefon) }"
                        placeholder="Telefon"
                        required
                        v-model="form.telefon"
                        @blur="setTouched('telefon')"
                        />
                        <label>Telefon *</label>
                        <div v-if="errors.telefon && (showErrors || touched.telefon)" class="invalid-feedback">{{ errors.telefon }}</div>
                    </div>
                </div>
                <hr class="mb-2">
                <div class="col-md-6">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="uebernahme"
                        class="form-control"
                        :class="{ 'is-invalid': errors.uebernahme && (showErrors || touched.uebernahme) }"
                        placeholder="Übernahme aus"
                        required
                        v-model="form.uebernahme"
                        @blur="setTouched('uebernahme')"
                        />
                        <label>Übernahme aus</label>
                        <div v-if="errors.uebernahme && (showErrors || touched.uebernahme)" class="invalid-feedback">{{ errors.uebernahme }}</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating mb-4">
                        <input
                        type="email"
                        name="korrekturabzug"
                        class="form-control"
                        :class="{ 'is-invalid': errors.korrekturabzug && (showErrors || touched.korrekturabzug) }"
                        placeholder="Korrekturabzug an"
                        required
                        v-model="form.korrekturabzug"
                        @blur="setTouched('korrekturabzug')"
                        />
                        <label>Korrekturabzug an (Email) *</label>
                        <div v-if="errors.korrekturabzug && (showErrors || touched.korrekturabzug)" class="invalid-feedback">{{ errors.korrekturabzug }}</div>
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="platzierung"
                        class="form-control"
                        :class="{ 'is-invalid': errors.platzierung && (showErrors || touched.platzierung) }"
                        placeholder="Platzierungswunsch"
                        required
                        v-model="form.platzierung"
                        @blur="setTouched('platzierung')"
                        />
                        <label>Platzierungswunsch</label>
                        <div v-if="errors.platzierung && (showErrors || touched.platzierung)" class="invalid-feedback">{{ errors.platzierung }}</div>
                    </div>
                </div>

                <div class="col-md-6">
                    <FileUpload
                        v-model="uploadedFile"
                        name="vorlage"
                        label="Vorlage (kann nachgereicht werden, max. 10MB)"
                        :accepted-file-types="['image/*', 'application/pdf']"
                        :allow-multiple="false"
                        max-file-size="10MB"
                    />
                </div>

                <div class="col-md-6">
                    <div class="form-floating mb-4">
                        <textarea
                        name="notizen"
                        class="form-control"
                        placeholder="Notizen"
                        v-model="form.notizen"
                        style="height: 134px;"
                        ></textarea>
                        <label>Notizen</label>
                    </div>
                </div>

                <!-- HONEYPOT -->
                <input
                    v-model="honeypot"
                    type="text"
                    name="website"
                    tabindex="-1"
                    autocomplete="off"
                    aria-hidden="true"
                    style="position:absolute; left:-9999px"
                />

                <em class="mb-3">Falls keine Vorlage vorliegt, kann diese nachgereicht werden. Entsprechend bitte in den Notizen anmerken.</em>

                <input type="hidden" name="gewinnspiel" value="00_2026" />

                <div class="col-12 justify-content-center mb-3">
                    <button type="submit" class="btn btn-primary rounded-pill btn-send" :disabled="submitting">
                        {{ submitting ? 'Sende...' : 'Absenden' }}
                    </button>
                    <small class="ms-3">{{ livePreis === 0 ? 'Bitte wählen Sie ein Format aus' : `${livePreis},-- € inkl. MwSt.` }}</small>
                </div>
            </div>
        </form>
    </section>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import AdFormatCard from '@/components/anzeigen/AdFormatCard.vue'
import FileUpload from '@/components/FileUpload.vue'
import { sendBestellung, uploadVorlage, getLivePreis } from '@/services/AnzeigeService.js'

const honeypot = ref("")
const startTime = Date.now()

const selectedId = ref("")

function setSelectedId(id) {
  selectedId.value = id
}

const formats = [
  { id: '1_1', title: '1/1 Seite', width: 210, height: 279, subtitle: "(+3mm Beschnitt)", price: 350 },
  { id: '1_2_q', title: '1/2 Seite', width: 190, height: 136, subtitle: "4-spaltig, quer", price: 190 },
  { id: '1_2_h', title: '1/2 Seite', width: 92.5, height: 264, subtitle: "2-spaltig, hoch", price: 190 },
  { id: '1_3_q', title: '1/3 Seite', width: 190.3, height: 89, subtitle: "4-spaltig, quer", price: 130 },
  { id: '1_4_q4', title: '1/4 Seite', width: 190, height: 65.5, subtitle: "4-spaltig, quer", price: 100 },
  { id: '1_4_h2', title: '1/4 Seite', width: 92.5, height: 129.5, subtitle: "2-spaltig, hoch", price: 100 },
  { id: '1_4_q3', title: '1/4 Seite', width: 141.2, height: 92.5, subtitle: "3-spaltig, quer", price: 100 },
  { id: '1_4_h1', title: '1/4 Seite', width: 43.7, height: 264, subtitle: "1-spaltig, hoch", price: 100 },
  { id: '1_6', title: '1/6 Seite', width: 92.5, height: 89, subtitle: "2-spaltig", price: 70 },
  { id: '1_8_q4', title: '1/8 Seite', width: 190, height: 30.3, subtitle: "4-spaltig, quer", price: 50 },
  { id: '1_8_q2', title: '1/8 Seite', width: 92.5, height: 65.5, subtitle: "2-spaltig, quer", price: 50 },
  { id: '1_16', title: '1/16 Seite', width: 43.7, height: 65.5, subtitle: "1-spaltig", price: 20 },
]

const selectedFormat = computed(() => {
    let format = formats.find(f => f.id === selectedId.value)
    return format ? format : null
})

const successMessage = ref('')
const errorMessage = ref('')
const formRef = ref(null)
const submitting = ref(false)

const uploadedFile = ref(null) // TODO

const form = reactive({
    ausgabe: '',
    vorname: '',
    nachname: '',
    kundennummer: '',
    strasse: '',
    hausnr: '',
    plz: '',
    ort: '',
    telefon: '',
    email: '',
    uebernahme: '',
    korrekturabzug: '',
    platzierung: '',
    notizen: '',
    vorlage: '',
    format: '',
})

const errors = reactive({
    ausgabe: '',
    vorname: '',
    nachname: '',
    strasse: '',
    hausnr: '',
    plz: '',
    ort: '',
    telefon: '',
    email: '',
    uebernahme: '',
    korrekturabzug: '',
    platzierung: '',
    notizen: '',
    vorlage: '',
    format: '',
})

const touched = reactive({
    ausgabe: false,
    vorname: false,
    nachname: false,
    strasse: false,
    hausnr: false,
    plz: false,
    ort: false,
    telefon: false,
    email: false,
    uebernahme: false,
    korrekturabzug: false,
    platzierung: false,
    notizen: false,
    vorlage: false,
    format: false,
})

// ### LIVE-PREIS ###
let timer = null
const livePreis = ref(0)
watch([form, selectedId], () => {
    if (selectedId.value) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            getLivePreis(selectedId.value, "privatpreis", form.platzierung !== "" ? form.platzierung : null, form.newsletter).then(res => {
                livePreis.value = res.summe_netto
            })
        }, 2000)
    } else livePreis.value = 0
}, { deep: true })

const showErrors = ref(false)

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
    Object.keys(errors).forEach((key) => (errors[key] = ''))

    let ok = true
    if (!form.ausgabe || !form.ausgabe.trim()) {
        errors.ausgabe = 'Bitte geben Sie die gewünschte Ausgabe an.'
        ok = false
    }
    if (!form.vorname || !form.vorname.trim()) {
        errors.vorname = 'Bitte geben Sie Ihren Vornamen an.'
        ok = false
    }
    if (!form.nachname || !form.nachname.trim()) {
        errors.nachname = 'Bitte geben Sie Ihren Nachnamen an.'
        ok = false
    }
    if (!form.strasse || !form.strasse.trim()) {
        errors.strasse = 'Bitte geben Sie Ihre Straße an.'
        ok = false
    }
    if (!form.hausnr || !form.hausnr.trim()) {
        errors.hausnr = 'Bitte geben Sie Ihre Hausnummer an.'
        ok = false
    }
    if (!form.plz || !form.plz.trim()) {
        errors.plz = 'Bitte geben Sie Ihre Postleitzahl an.'
        ok = false
    }
    if (!form.ort || !form.ort.trim()) {
        errors.ort = 'Bitte geben Sie Ihren Ort an.'
        ok = false
    }
    if (!form.telefon || !form.telefon.trim()) {
        errors.telefon = 'Bitte geben Sie Ihre Telefonnummer an.'
        ok = false
    }
    if (!form.email || !emailRe.test(form.email)) {
        errors.email = 'Bitte geben Sie eine gültige Email-Adresse an.'
        ok = false
    }
    if (!form.korrekturabzug || !form.korrekturabzug.trim()) {
        errors.korrekturabzug = 'Bitte geben Sie eine Adresse für den Korrekturabzug an.'
        ok = false
    }
    if (selectedId.value === '') {
        errors.format = 'Bitte wählen Sie ein Format aus.'
        ok = false
    }

    return ok
}

function setTouched(field) {
  if (field in touched) {
    touched[field] = true
  }
}

function resetForm() {
  form.ausgabe = ''
  form.vorname = ''
  form.nachname = ''
  form.kundennummer = ''
  form.strasse = ''
  form.hausnr = ''
  form.plz = ''
  form.ort = ''
  form.telefon = ''
  form.email = ''
  form.uebernahme = ''
  form.korrekturabzug = ''
  form.platzierung = ''
  form.notizen = ''
  form.vorlage = ''
  form.format = ''
}

async function submitForm() {
  successMessage.value = ''
  errorMessage.value = ''
  showErrors.value = false

  if (honeypot.value || Date.now() - startTime < 3000) {
    return
  }

  if (!validate()) {
    showErrors.value = true
    errorMessage.value = 'Bitte füllen Sie alle Pflichtfelder korrekt aus.'
    Object.keys(touched).forEach((key) => {
      touched[key] = true
    })
    const firstError = Object.keys(errors).find((key) => errors[key])
    if (firstError && formRef.value) {
      const el = formRef.value.querySelector(`[name="${firstError}"]`)
      el?.focus()
    }
    return
  }

  submitting.value = true
  try {
    const res = await sendBestellung(
        form.kundennummer,
        form.ausgabe,
        form.newsletter ? 'newsletter' : selectedId.value,
        "privatpreis",
        form.platzierung !== "" ? form.platzierung : null,
        form.uebernahme,
        form.korrekturabzug,
        form.notizen,
        {
            vorname: form.vorname,
            name: form.nachname,
            strasse: form.strasse,
            nr: form.hausnr,
            plz: form.plz,
            ort: form.ort,
            land: "DE",
            zusatz: null,
            telefon: form.telefon,
            email: form.email
        }
    )
    if (res.status === "ok") {
        await uploadVorlage(res.bestellung_id, uploadedFile.value)
    }

    successMessage.value = 'Erfolgreich abgesendet! Ihre Anfrage wird schnellstmöglich bearbeitet.'
    resetForm()
  } catch (e) {
    errorMessage.value = 'Beim Senden des Formulars ist ein Fehler aufgetreten.'
  } finally {
    submitting.value = false
  }
}
</script>