import { ApiService } from './APIService.js'

export async function postAbo(active, chosenAbo, data) {
    const interval = active === "halbjahr" ? "h" : "j"
    const angebot = chosenAbo + "_" + interval
    return await ApiService.post('/abo-bestellung', { publication_id: import.meta.env.VITE_PUBLIKATION_ID, angebot: angebot, ...data }, {})
}