import { ApiService } from './APIService.js'

async function sendMail(to, subject, html) {
  return await ApiService.post("/email", { profil: "Eschweger automailer", to: to, subject: subject, html: html })
}

export async function sendContact(from, message) {
  return await sendMail(
    "redaktion@die-eschweger.de",
    "Kontaktanfrage - DIE ESCHWEGER Website", 
    `Name: ${from.vorname} ${from.nachname}<br/>Email: ${from.email}<br/>Adresse: ${from.strasse}, ${from.plz} ${from.ort}<br/>Nachricht:<br/>${message}`
  )
}

// Zu AnzeigenService
export async function sendAnzeigeGeschaeftlich(format, ausgabe, kategorie, from, uebernahme, korrektur, platzierung, notiz) {
  return await ApiService.post('/mail/anzeige-geschaeft', { publikation_id: import.meta.env.VITE_PUBLIKATION_ID, from: from, format: format, ausgabe: ausgabe, kategorie: kategorie, uebernahme: uebernahme, korrektur: korrektur, platzierung: platzierung, notiz: notiz }, {})
}

export async function sendAnzeigePrivat(format, ausgabe, from, uebernahme, korrektur, platzierung, notiz) {
  return await ApiService.post('/mail/anzeige-geschaeft', { publikation_id: import.meta.env.VITE_PUBLIKATION_ID, from: from, format: format, ausgabe: ausgabe, uebernahme: uebernahme, korrektur: korrektur, platzierung: platzierung, notiz: notiz }, {})
}

// Ggf. zu KleinanzeigenService
export async function sendKleinanzeige(name, email, strasse, plz, ort, rubrik, text) {
  const subject = ""
  const message = ""
  return await ApiService.post('/mail/kleinanzeige', { publikation_id: import.meta.env.VITE_PUBLIKATION_ID, subject: subject, message: message }, {})
}

export async function sendMitmachen(vorname, nachname, email, tel, strasse, plz, ort, pakete, bemerkung) {
  let paketeString = ""
  if (pakete.value.length > 1) {
    pakete.value.forEach(p => {
      paketeString = paketeString + p.label + ", "
    })
  } else paketeString = pakete.value[0].label
  return await sendMail(
    "redaktion@die-eschweger.de", 
    "Mitmachen Formular - DIE ESCHWEGER Website", 
    `Paket(e): ${paketeString}<br/>Name: ${vorname} ${nachname}<br/>Email: ${email}<br/>Telefon: ${tel}<br/>Adresse: ${strasse}, ${plz} ${ort}<br/>Bemerkung: ${bemerkung}`
  )
}

// Zu FoerderService
export async function sendFoerder(betrag, typ, email, name, strasse, plz, ort, zahlart) {
  const subject = ""
  const message = ""
  return await ApiService.post('/mail/foerder', { publikation_id: import.meta.env.VITE_PUBLIKATION_ID, subject: subject, message: message }, {})
}