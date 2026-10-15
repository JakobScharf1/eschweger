<template>
      <div class="row">
        <div class="col-10 mx-12">
          <div class="row gy-10 gx-lg-8 gx-xl-12">
            <div class="col-lg-8">
              <form
                ref="formRef"
                class="contact-form needs-validation"
                @submit.prevent="submitForm"
                novalidate
              >
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
                        :class="{ 'is-invalid': errors.vorname }
                        "
                        placeholder="Erika"
                        required
                        v-model="form.vorname"
                      />
                      <label>Vorname *</label>
                      <div class="valid-feedback">Passt!</div>
                      <div class="invalid-feedback">{{ errors.vorname || 'Bitte Vornamen angeben.' }}</div>
                    </div>
                  </div>
                  <!-- /column -->
                  <div class="col-md-6">
                    <div class="form-floating mb-4">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        :class="{ 'is-invalid': errors.nachname }"
                        placeholder="Musterfrau"
                        required
                        v-model="form.nachname"
                      />
                      <label>Nachname *</label>
                      <div class="valid-feedback">Passt!</div>
                      <div class="invalid-feedback">{{ errors.nachname || 'Bitte Nachnamen angeben.' }}</div>
                    </div>
                  </div>
                  <!-- /column -->
                  <div class="col-md-6">
                    <div class="form-floating mb-4">
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        :class="{ 'is-invalid': errors.email }"
                        placeholder="e.musterfrau@mail.de"
                        required
                        v-model="form.email"
                      />
                      <label>Email *</label>
                      <div class="valid-feedback">Passt!</div>
                      <div class="invalid-feedback">{{ errors.email || 'Bitte geben Sie eine gültige Email an.' }}</div>
                    </div>
                  </div>
                  <!-- /column -->
                  <div class="col-md-6">
                    <div class="form-select-wrapper mb-4">
                      <select
                        class="form-select"
                        id="form-select"
                        name="department"
                        required
                        v-model="form.category"
                        :disabled="preselection"
                      >
                        <option selected disabled value="">
                          Betreff auswählen
                        </option>
                        <option value="Allgemein">Allgemeine Anfrage</option>
                        <option value="Inhaltliche Frage">
                          Fragen zu Inhalten
                        </option>
                        <option value="Leserbrief">Leser:innenbrief</option>
                        <option value="Mitmachen">Mitmachen</option>
                        <option value="Werbeanzeigen">Werbeanzeigen</option>
                      </select>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">{{ errors.category || 'Please select a department.' }}</div>
                    </div>
                  </div>
                  <!-- /column -->
                  <div class="col-12">
                    <div class="form-floating mb-4">
                      <textarea
                        name="message"
                        class="form-control"
                        :class="{ 'is-invalid': errors.message }"
                        placeholder="Ihre Nachricht"
                        style="height: 150px"
                        required
                        v-model="form.message"
                      ></textarea>
                      <label>Nachricht *</label>
                      <div class="valid-feedback">Passt!</div>
                      <div class="invalid-feedback">{{ errors.message || 'Bitte geben Sie eine Nachricht an.' }}</div>
                    </div>
                  </div>
                  <!-- /column -->
                  <div class="col-12">
                    <div class="form-check mb-4">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="form.accepted"
                        :class="{ 'is-invalid': errors.accepted }"
                      />
                      <label class="form-check-label">
                        Ich akzeptiere die Datenschutzerklärung.
                      </label>
                      <div class="invalid-feedback">{{ errors.accepted || 'You must agree before submitting.' }}</div>
                    </div>
                  </div>
                  <!-- /column -->
                  <div class="col-12">
                    <input
                      type="submit"
                      class="btn btn-primary rounded-pill btn-send mb-3"
                      :disabled="submitting"
                      :value="submitting ? 'Sende...' : 'Abschicken'"
                    />
                    <p class="text-muted">
                      <strong>*</strong> Diese Felder sind Pflichtangaben.
                    </p>
                  </div>
                  <!-- /column -->
                </div>
                <!-- /.row -->
              </form>
              <!-- /form -->
            </div>
            <!--/column -->
            <div class="col-lg-4">
              <div
                class="d-flex flex-row"
              >
                <div>
                  <div class="icon text-primary fs-28 me-6 mt-n1">
                    <i class="uil uil-location-pin-alt"></i>
                  </div>
                </div>
                <div>
                  <h5>Adresse</h5>

                  <address>
                    STRASSE HAUSNR.<br class="d-none d-md-block" />
                    PLZ, ORT
                  </address>
                </div>
              </div>

              <div
                class="d-flex flex-row mb-3"
              >
                <div>
                  <div class="icon text-primary fs-28 me-6 mt-n1">
                    <i class="uil uil-phone-volume"></i>
                  </div>
                </div>
                <div>
                  <h5>Telefon</h5>

                  <a :href="`tel:${12345}`">
                    012358726347
                  </a>
                </div>
              </div>

              <div
                class="d-flex flex-row"
              >
                <div>
                  <div class="icon text-primary fs-28 me-6 mt-n1">
                    <i class="uil uil-envelope"></i>
                  </div>
                </div>
                <div>
                  <h5>Email</h5>

                  <a :href="`mailto:info@mail.com`">info@mail.com</a>
                </div>
              </div>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /column -->
      </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'

const props = defineProps(['preselection'])

const formRef = ref(null)
const submitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const form = reactive({
  vorname: '',
  nachname: '',
  email: '',
  category: '',
  message: '',
  accepted: false,
})

const errors = reactive({
  vorname: '',
  nachname: '',
  email: '',
  category: '',
  message: '',
  accepted: '',
})

onMounted(() => {
  if (props.preselection) {
    form.category = props.preselection
  }
})

function validate() {
  // clear
  Object.keys(errors).forEach((k) => (errors[k] = ''))

  let ok = true
  if (!form.vorname || !form.vorname.trim()) {
    errors.vorname = 'Bitte Vornamen angeben.'
    ok = false
  }
  if (!form.nachname || !form.nachname.trim()) {
    errors.nachname = 'Bitte Nachnamen angeben.'
    ok = false
  }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email || !emailRe.test(form.email)) {
    errors.email = 'Bitte geben Sie eine gültige Email an.'
    ok = false
  }
  if (!form.category) {
    errors.category = 'Bitte Betreff auswählen.'
    ok = false
  }
  if (!form.message || !form.message.trim()) {
    errors.message = 'Bitte geben Sie eine Nachricht an.'
    ok = false
  }
  if (!form.accepted) {
    errors.accepted = 'Sie müssen die Datenschutzerklärung akzeptieren.'
    ok = false
  }

  return ok
}

function resetForm() {
  form.vorname = ''
  form.nachname = ''
  form.email = ''
  form.category = ''
  form.message = ''
  form.accepted = false
}

async function submitForm() {
  successMessage.value = ''
  errorMessage.value = ''

  if (!validate()) {
    errorMessage.value = 'Bitte alle Pflichtfelder ausfüllen.'
    // focus first invalid field
    const first = Object.keys(errors).find((k) => errors[k])
    if (first && formRef.value) {
      const nameAttr = first === 'nachname' ? 'name' : first
      const el = formRef.value.querySelector(`[name="${nameAttr}"]`)
      el?.focus()
    }
    return
  }

  submitting.value = true
  try {
    // Weitergabe der Daten: emitten, Verarbeitung extern
    
    successMessage.value = 'Kontaktanfrage erfolgreich verschickt.'
    resetForm()
  } catch (e) {
    errorMessage.value = 'Fehler beim Verarbeiten der Kontaktanfrage.'
  } finally {
    submitting.value = false
  }
}
</script>