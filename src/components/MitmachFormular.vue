<template>
  <div class="mitmach-formular">
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

        <div class="col-md-6">
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

        <div class="col-12">
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

        <div class="col-12">
          <div class="form-floating mb-4">
            <textarea
              name="bemerkung"
              class="form-control"
              placeholder="Bemerkung (optional)"
              style="height: 150px"
              v-model="form.bemerkung"
            ></textarea>
            <label>Bemerkung</label>
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary rounded-pill btn-send mb-3" :disabled="submitting">
            {{ submitting ? 'Sende...' : 'Absenden' }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formRef = ref(null)
const submitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const form = reactive({
  vorname: '',
  nachname: '',
  email: '',
  telefon: '',
  ort: '',
  bemerkung: '',
})

const errors = reactive({
  vorname: '',
  nachname: '',
  email: '',
  telefon: '',
  ort: '',
})

const touched = reactive({
  vorname: false,
  nachname: false,
  email: false,
  telefon: false,
  ort: false,
})

const showErrors = ref(false)

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
  Object.keys(errors).forEach((key) => (errors[key] = ''))

  let ok = true
  if (!form.vorname || !form.vorname.trim()) {
    errors.vorname = 'Bitte Vornamen angeben.'
    ok = false
  }
  if (!form.nachname || !form.nachname.trim()) {
    errors.nachname = 'Bitte Nachnamen angeben.'
    ok = false
  }
  if (!form.email || !emailRe.test(form.email)) {
    errors.email = 'Bitte geben Sie eine gültige Email an.'
    ok = false
  }
  if (!form.telefon || !form.telefon.trim()) {
    errors.telefon = 'Bitte Telefonnummer angeben.'
    ok = false
  }
  if (!form.ort || !form.ort.trim()) {
    errors.ort = 'Bitte Ort angeben.'
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
  form.vorname = ''
  form.nachname = ''
  form.email = ''
  form.telefon = ''
  form.ort = ''
  form.bemerkung = ''
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
    

    successMessage.value = 'Erfolgreich eingtragen!'
    resetForm()
  } catch (e) {
    errorMessage.value = 'Beim Senden des Formulars ist ein Fehler aufgetreten.'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.mitmach-formular {
  width: 100%;
}

.messages {
  margin-bottom: 1rem;
}

.form-control.is-invalid,
.form-select.is-invalid,
textarea.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  display: block;
}
</style>
