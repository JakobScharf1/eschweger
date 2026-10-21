<template>    
    <section class="mb-5">
        <strong>Auslage: </strong>Das Heft wird im Einzelhandel, Arztpraxen, Tankstellen uvm. zur kostenlosen Mitnahme ausgelegt.<br/>
        <strong>Erscheinungsweise: </strong>monatlich<br/>
        <strong>Auflage: </strong>5.000 Exemplare<br/>
        <strong>Verbreitung: </strong>Kostenlos an vielen Verteilstellen<br/>
    </section>

    <div class="alert alert-primary" role="alert">
        <b>Einführungsrabatt</b><br/>
        25% für die ersten drei Ausgaben: November und Dezember 2026, Januar 2027! Informieren Sie sich über unsere Adventskalender-Aktion!
    </div>

    <section>
        <h2 class="mb-0">Format auswählen</h2>
        <small>Preise exkl. MwSt. - Nur für Gewerbetreibende mit Sitz im Verbreitungsgebiet</small>

        <h3 class="mb-0 mt-3">Anzeigen</h3>
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
            :priceBusiness="f.priceBusiness"
            :selected="selectedId === f.id"
            @select="setSelectedId"
            />
        </div>

        <div class="row">
            <div class="col-md-12 col-lg-6">
                <h3 class="mb-0 mt-3">Gewinnspiele</h3>
                <div class="row g-3 mt-1 mb-5">
                    <AdFormatCard
                    class="col-sm-12 col-lg-6"
                    v-for="f in gewinnspiele"
                    :key="f.id"
                    :value="f.id"
                    :title="f.title"
                    :width="f.width"
                    :height="f.height"
                    :subtitle="f.subtitle"
                    :priceBusiness="f.priceBusiness"
                    :selected="selectedId === f.id"
                    @select="setSelectedId"
                    />
                </div>
                <small>Gewinnspiele werden redaktionell gestaltet und setzen die Bereitstellung von mindestens einem Gewinn voraus.</small>
            </div>
            <div class="col-md-12 col-lg-6">
                 <h3 class="mb-0 mt-3">Umschlagseiten</h3>
                <div class="row g-3 mt-1 mb-5">
                    <AdFormatCard
                    class="col-sm-12 col-lg-6"
                    v-for="f in umschlagseiten"
                    :key="f.id"
                    :value="f.id"
                    :title="f.title"
                    :width="f.width"
                    :height="f.height"
                    :subtitle="f.subtitle"
                    :priceBusiness="f.priceBusiness"
                    :selected="selectedId === f.id"
                    @select="setSelectedId"
                    />
                </div>
            </div>
        </div>


        <div class="row">
            <div class="mb-5 col-sm-12 col-lg-6">
                <h3 class="mb-0 mt-3">Newsletter</h3>
                <AdFormatCard
                class="mt-3 col-sm-12 col-lg-6"
                newsletter
                title="Newsletter"
                value="newsletter"
                subtitle="Pro 1.000 Abonnenten"
                price="30"
                :selected="selectedId === 'newsletter'"
                @select="setSelectedId('newsletter')"
                >
                </AdFormatCard>
                <div class="form-floating mt-2 col-sm-12 col-lg-6" v-if="selectedId === 'newsletter'">
                    <input
                        type="text"
                        name="newsletter-wochen"
                        class="form-control"
                        :class="{ 'is-invalid': errors.newsletter && (showErrors || touched.newsletter) }"
                        placeholder="Newsletter-Werbung in Wochen"
                        v-model="form.newsletter"
                        @blur="setTouched('newsletter')"
                    />
                    <label>Newsletter-Werbung in Wochen *</label>
                    <div v-if="errors.newsletter && (showErrors || touched.newsletter)" class="invalid-feedback">{{ errors.newsletter }}</div>
                </div>
            </div>
            <div class="mb-5 col-sm-12 col-lg-4">
                <h3 class="mb-0 mt-3">Jahresrabatte</h3>
                <table class="table">
                    <thead>
                        <th>Schaltungen</th>
                        <th>Rückerstattungen</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3</td>
                            <td>5 %</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>10 %</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>15 %</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>25 %</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
                        <label>Platzierungswunsch (+5% Zuschlag)</label>
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
                </div>
            </div>
        </form>
    </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import AdFormatCard from '@/components/anzeigen/AdFormatCard.vue'
import FileUpload from '@/components/FileUpload.vue'

const selectedId = ref("")

function setSelectedId(id) {
    console.log("SELECTED ID:", id)
  selectedId.value = id
}

const formats = [
  { id: 'a-1/1', title: '1/1 Seite', width: 210, height: 279, subtitle: "4-spaltig, hoch (+3mm Beschnitt)", priceBusiness: { ort: 700, base: 875, social: 525 } },
  { id: 'a-1/2-4-quer', title: '1/2 Seite', width: 190, height: 136, subtitle: "4-spaltig, quer", priceBusiness: { ort: 386, base: 482, social: 289 } },
  { id: 'a-1/2-2-hoch', title: '1/2 Seite', width: 92.5, height: 264, subtitle: "2-spaltig, hoch", priceBusiness: { ort: 386, base: 482, social: 289 } },
  { id: 'a-1/3-4-quer', title: '1/3 Seite', width: 190.3, height: 89, subtitle: "4-spaltig, quer", priceBusiness: { ort: 269, base: 336, social: 202 } },
  { id: 'a-1/4-4-quer', title: '1/4 Seite', width: 190, height: 65.5, subtitle: "4-spaltig, quer", priceBusiness: { ort: 210, base: 263, social: 158 } },
  { id: 'a-1/4-2-hoch', title: '1/4 Seite', width: 92.5, height: 129.5, subtitle: "2-spaltig, hoch", priceBusiness: { ort: 210, base: 263, social: 158 } },
  { id: 'a-1/4-3-quer', title: '1/4 Seite', width: 141.2, height: 92.5, subtitle: "3-spaltig, quer", priceBusiness: { ort: 210, base: 263, social: 158 } },
  { id: 'a-1/4-1-hoch', title: '1/4 Seite', width: 43.7, height: 264, subtitle: "1-spaltig, hoch", priceBusiness: { ort: 210, base: 263, social: 158 } },
  { id: 'a-1/6-2-hoch', title: '1/6 Seite', width: 92.5, height: 89, subtitle: "2-spaltig, hoch", priceBusiness: { ort: 143, base: 179, social: 108 } },
  { id: 'a-1/8-4-quer', title: '1/8 Seite', width: 190, height: 30.3, subtitle: "4-spaltig, quer", priceBusiness: { ort: 110, base: 137, social: 83 } },
  { id: 'a-1/8-2-quer', title: '1/8 Seite', width: 92.5, height: 65.5, subtitle: "2-spaltig, quer", priceBusiness: { ort: 110, base: 137, social: 83 } },
]

const gewinnspiele = [
    { id: 'g-1/1', title: '1/1 Seite', width: 210, height: 279, subtitle: "4-spaltig, hoch", priceBusiness: { ort: 560, base: 700 } },
    { id: 'g-1/2', title: '1/2 Seite', width: 190, height: 136, subtitle: "4-spaltig, quer", priceBusiness: { ort: 308, base: 386 } },
]

const umschlagseiten = [
    { id: 'u-4', title: 'Umschlagseite 4', width: 210, height: 279, subtitle: "", priceBusiness: { ort: 875, base: 1093 } },
    { id: 'u-2/3', title: 'Umschlagseite 2 oder 3', width: 210, height: 279, subtitle: "", priceBusiness: { ort: 805, base: 1006 } },
]

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
    newsletter: '',
})

const errors = reactive({
    ausgabe: '',
    name: '',
    adresse: '',
    telefon: '',
    email: '',
    korrekturabzug: '',
    platzierung: '',
    notizen: '',
    vorlage: '',
    format: '',
    newsletter: '',
})

const touched = reactive({
    ausgabe: false,
    name: false,
    adresse: false,
    telefon: false,
    email: false,
    korrekturabzug: false,
    platzierung: false,
    notizen: false,
    vorlage: false,
    format: false,
    newsletter: false,
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
    if(selectedId.value === 'newsletter' && (!form.newsletter || form.newsletter === '')) {
        errors.newsletter = 'Bitte geben Sie die Anzahl der Wochen für den Newsletter an.'
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
    const res = await fetch('/messages/werbung-privat.php', {
    method: 'POST',
    body: new FormData(formRef.value),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    successMessage.value = 'Erfolgreich abgesendet! Ihre Anfrage wird schnellstmöglich bearbeitet.'
    resetForm()
  } catch (e) {
    errorMessage.value = 'Beim Senden des Formulars ist ein Fehler aufgetreten.'
  } finally {
    submitting.value = false
  }
}
</script>