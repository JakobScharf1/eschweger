import { reactive, ref } from 'vue'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function useAnzeigeForm({
    initialValues,
    selectedId,
    honeypot,
    startTime,
    requiredFields,
    emailFields = {},
    initialErrors,
    validateForm,
    validateAdditional,
    onSubmit,
    onError,
    successText,
}) {
    const defaults = { ...initialValues }
    const form = reactive({ ...defaults })
    const fields = Object.keys(defaults)
    const errors = reactive(initialErrors
        ? { ...initialErrors }
        : Object.fromEntries(fields.map(field => [field, ''])))
    const touched = reactive(Object.fromEntries(fields.map(field => [field, false])))

    const successMessage = ref('')
    const errorMessage = ref('')
    const formRef = ref(null)
    const submitting = ref(false)
    const showErrors = ref(false)

    function validate() {
        clearErrors(errors)

        if (validateForm) {
            validateForm({ form, errors })
        } else {
            for (const [field, message] of Object.entries(requiredFields ?? {})) {
                if (typeof form[field] === 'Array' && form[field].length === 0) {
                    errors[field] = message
                } else if (typeof form[field] !== 'string' || !form[field].trim()) {
                    errors[field] = message
                }
            }

            for (const [field, message] of Object.entries(emailFields)) {
                if (!form[field] || !emailRe.test(form[field])) {
                    errors[field] = message
                }
            }

            if (selectedId && !selectedId.value) {
                errors.format = 'Bitte wählen Sie ein Format aus.'
            }

            validateAdditional?.({ form, selectedId: selectedId?.value, errors })
        }

        return !hasErrors(errors)
    }

    function setTouched(field) {
        if (field in touched) {
            touched[field] = true
        }
    }

    function resetForm() {
        restoreValues(form, defaults)
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
            Object.keys(touched).forEach(field => {
                touched[field] = true
            })

            const firstError = Object.keys(errors).find(field => errors[field])
            if (firstError && formRef.value) {
                const element = formRef.value.querySelector(`[name="${firstError}"]`)
                    ?? formRef.value.querySelector('.is-invalid')
                element?.focus()
            }
            return
        }

        submitting.value = true
        try {
            await onSubmit({ form, selectedId: selectedId?.value })
            successMessage.value = successText
            resetForm()
        } catch (error) {
            onError?.(error)
            errorMessage.value = 'Beim Senden des Formulars ist ein Fehler aufgetreten.'
        } finally {
            submitting.value = false
        }
    }

    function clearErrors(errors) {
        for (const key of Object.keys(errors)) {
            if (errors[key] && typeof errors[key] === 'object') {
                clearErrors(errors[key])
            } else {
                errors[key] = ''
            }
        }
    }

    function hasErrors(errors) {
        return Object.values(errors).some(error =>
            error && typeof error === 'object' ? hasErrors(error) : Boolean(error),
        )
    }

    function restoreValues(target, defaults) {
        for (const [key, value] of Object.entries(defaults)) {
            if (value && typeof value === 'object' && !Array.isArray(value)) {
                restoreValues(target[key], value)
            } else {
                target[key] = value
            }
        }
    }

    return {
        form,
        errors,
        touched,
        successMessage,
        errorMessage,
        formRef,
        submitting,
        showErrors,
        validate,
        setTouched,
        resetForm,
        submitForm,
    }
}
