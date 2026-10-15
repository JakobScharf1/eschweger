import { ref } from "vue"
import { defineStore } from "pinia"

export const useMetaStore = defineStore('meta', () => {
    const id = ref(1)
    const title = ref("Der Wannefredder")
    const logo = ref("/assets/img/logo.png")
    const facebook = ref("https://facebook.com/wannefredder")
    const instagram = ref("https://instagram.com/der_wannefredder")
    const favicon = ref("/favicon.ico")
    const strasse = ref("Musterstr. 1")
    const ort = ref("37281 Wanfried")
    const email = ref("info@wannefredder.de")
    const tel = ref("+4915223706657")

    async function fetchMeta() {
        return
    }

    return {
        id,
        title,
        logo,
        facebook,
        instagram,
        favicon,
        strasse,
        ort,
        email,
        tel,
        fetchMeta,
    }
})