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
                <div class="col-md-12 mt-4">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="name"
                        class="form-control"
                        :class="{ 'is-invalid': errors.name && (showErrors || touched.name) }"
                        placeholder="Name"
                        required
                        v-model="form.name"
                        @blur="setTouched('name')"
                        />
                        <label>Name *</label>
                        <div v-if="errors.name && (showErrors || touched.name)" class="invalid-feedback">{{ errors.name }}</div>
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="adresse"
                        class="form-control"
                        :class="{ 'is-invalid': errors.adresse && (showErrors || touched.adresse) }"
                        placeholder="Adresse"
                        required
                        v-model="form.adresse"
                        @blur="setTouched('adresse')"
                        />
                        <label>Adresse *</label>
                        <div v-if="errors.adresse && (showErrors || touched.adresse)" class="invalid-feedback">{{ errors.adresse }}</div>
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

                <div class="col-md-6 mt-4">
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
                <div class="col-md-6 mt-4">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="korrekturabzug"
                        class="form-control"
                        :class="{ 'is-invalid': errors.korrekturabzug && (showErrors || touched.korrekturabzug) }"
                        placeholder="Korrekturabzug an"
                        required
                        v-model="form.korrekturabzug"
                        @blur="setTouched('korrekturabzug')"
                        />
                        <label>Korrekturabzug an *</label>
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
                        v-model="uploadedFiles"
                        name="vorlage"
                        label="Vorlage (kann nachgereicht werden, max. 10MB)"
                        :accepted-file-types="['image/png', 'image/jpeg', 'application/pdf']"
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

                <em class="mb-3">Falls keine Vorlage vorliegt, kann diese nachgereicht werden. Entsprechend bitte in den Notizen anmerken.</em>

                <input type="hidden" name="gewinnspiel" value="00_2026" />

                <div class="col-12 justify-content-center mb-3">
                    <button type="submit" class="btn btn-primary rounded-pill btn-send" :disabled="submitting">
                        {{ submitting ? 'Sende...' : 'Absenden' }}
                    </button>
                    <small class="ms-3">{{ selectedFormatPrice === 0 ? 'Bitte wählen Sie ein Format aus' : `${selectedFormatPrice},-- € inkl. MwSt.` }}</small>
                </div>
            </div>
        </form>
    </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import AdFormatCard from '@/components/anzeigen/AdFormatCard.vue'
import FileUpload from '@/components/FileUpload.vue'
import { sendAnzeigePrivat } from '@/services/MailService'

const selectedId = ref("")

function setSelectedId(id) {
    console.log("SELECTED ID:", id)
  selectedId.value = id
}

const formats = [
  { id: '1/1', title: '1/1 Seite', width: 210, height: 279, subtitle: "(+3mm Beschnitt)", price: 350 },
  { id: '1/2-4-quer', title: '1/2 Seite', width: 190, height: 136, subtitle: "4-spaltig, quer", price: 190 },
  { id: '1/2-2-hoch', title: '1/2 Seite', width: 92.5, height: 264, subtitle: "2-spaltig, hoch", price: 190 },
  { id: '1/3-4-quer', title: '1/3 Seite', width: 190.3, height: 89, subtitle: "4-spaltig, quer", price: 130 },
  { id: '1/4-4-quer', title: '1/4 Seite', width: 190, height: 65.5, subtitle: "4-spaltig, quer", price: 100 },
  { id: '1/4-2-hoch', title: '1/4 Seite', width: 92.5, height: 129.5, subtitle: "2-spaltig, hoch", price: 100 },
  { id: '1/4-3-quer', title: '1/4 Seite', width: 141.2, height: 92.5, subtitle: "3-spaltig, quer", price: 100 },
  { id: '1/4-1-hoch', title: '1/4 Seite', width: 43.7, height: 264, subtitle: "1-spaltig, hoch", price: 100 },
  { id: '1/6-2', title: '1/6 Seite', width: 92.5, height: 89, subtitle: "2-spaltig", price: 70 },
  { id: '1/8-4-quer', title: '1/8 Seite', width: 190, height: 30.3, subtitle: "4-spaltig, quer", price: 50 },
  { id: '1/8-2-quer', title: '1/8 Seite', width: 92.5, height: 65.5, subtitle: "2-spaltig, quer", price: 50 },
  { id: '1/16', title: '1/16 Seite', width: 43.7, height: 65.5, subtitle: "1-spaltig", price: 20 },
]

const selectedFormatPrice = computed(() => {
  const format = formats.find(f => f.id === selectedId.value)
  return format ? format.price : 0
})

const successMessage = ref('')
const errorMessage = ref('')
const formRef = ref(null)
const submitting = ref(false)

const form = reactive({
    ausgabe: '',
    name: '',
    adresse: '',
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
    name: '',
    adresse: '',
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
    name: false,
    adresse: false,
    telefon: false,
    email: false,
    uebernahme: false,
    korrekturabzug: false,
    platzierung: false,
    notizen: false,
    vorlage: false,
    format: false,
})

const showErrors = ref(false)

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
    Object.keys(errors).forEach((key) => (errors[key] = ''))

    let ok = true
    if (!form.ausgabe || !form.ausgabe.trim()) {
        errors.ausgabe = 'Bitte geben Sie die gewünschte Ausgabe an.'
        ok = false
    }
    if (!form.name || !form.name.trim()) {
        errors.name = 'Bitte geben Sie Ihren Namen an.'
        ok = false
    }
    if (!form.adresse || !form.adresse.trim()) {
        errors.adresse = 'Bitte geben Sie Ihre Adresse an.'
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
    if (!form.vorlage || !form.vorlage.trim()) {
        // TODO
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
  form.name = ''
  form.adresse = ''
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
    await sendAnzeigePrivat(form.format, form.ausgabe, { name: form.name, email: form.email, tel: form.telefon, adresse: form.adresse }, form.uebernahme, form.korrekturabzug, form.platzierung, form.notizen)

    successMessage.value = 'Erfolgreich abgesendet! Ihre Anfrage wird schnellstmöglich bearbeitet.'
    resetForm()
  } catch (e) {
    errorMessage.value = 'Beim Senden des Formulars ist ein Fehler aufgetreten.'
  } finally {
    submitting.value = false
  }
}
</script>