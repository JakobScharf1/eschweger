import { ApiService } from "./APIService";

export async function getAnzeigenKatalog() {
    /** Unterscheidung Privat/Geschäftlich? */
    return await ApiService.get(`/publikationen/${import.meta.env.VITE_PUBLIKATION_ID}/anzeigen-katalog`)
}

export async function getPreisinfos() {
    return await ApiService.get(`/publikationen/${import.meta.env.VITE_PUBLIKATION_ID}/preisinfos`)
}

export async function getLivePreis(formatCode, preiskategorie, platzierungswunsch, newsletter) {
    return await ApiService.post("/anzeigen-preis", {
        publikation_id: import.meta.env.VITE_PUBLIKATION_ID,
        format_code: formatCode,
        preiskategorie: preiskategorie,
        platzierungswunsch: platzierungswunsch,
        newsletter_abonnenten: newsletter
    })
}

export async function sendBestellung(kundennummer, ausgabeAm, formatCode, preiskategorie, newsletter, platzierungswunsch, uebernahmeAus, korrekturabzug, notizen, besteller) {
    return await ApiService.post("/anzeigen-bestellung", {
        kundennummer: kundennummer,
        ausgabe_am: ausgabeAm,
        format_code: formatCode,
        preiskategorie: preiskategorie,
        newsletter_abonnenten: newsletter,
        platzierungswunsch: platzierungswunsch,
        uebernahme_aus: uebernahmeAus,
        korrekturabzug: korrekturabzug,
        notizen: notizen,
        besteller: besteller,
    })
}
