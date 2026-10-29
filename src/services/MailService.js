import { ApiService } from './APIService.js'

export async function sendContact(from, message) {
  return await ApiService.post('/mail/contact', { publikation_id: import.meta.env.VITE_PUBLIKATION_ID, from: from, message: message }, {})
}

export async function sendGewinnspiel(from, loesung) {
  return await ApiService.post('/mail/gewinnspiel', { publikation_id: import.meta.env.VITE_PUBLIKATION_ID, from: from, loesung: loesung }, {})
}

export async function sendAnzeigeGeschaeftlich(format, ausgabe, kategorie, from, uebernahme, korrektur, platzierung, notiz) {
  return await ApiService.post('/mail/anzeige-geschaeft', { publikation_id: import.meta.env.VITE_PUBLIKATION_ID, from: from, format: format, ausgabe: ausgabe, kategorie: kategorie, uebernahme: uebernahme, korrektur: korrektur, platzierung: platzierung, notiz: notiz }, {})
}

export async function sendAnzeigePrivat(format, ausgabe, from, uebernahme, korrektur, platzierung, notiz) {
  return await ApiService.post('/mail/anzeige-geschaeft', { publikation_id: import.meta.env.VITE_PUBLIKATION_ID, from: from, format: format, ausgabe: ausgabe, uebernahme: uebernahme, korrektur: korrektur, platzierung: platzierung, notiz: notiz }, {})
}

export async function sendKleinanzeige(name, email, strasse, plz, ort, rubrik, text) {
  const subject = ""
  const message = ""
  return await ApiService.post('/mail/kleinanzeige', { publikation_id: import.meta.env.VITE_PUBLIKATION_ID, subject: subject, message: message }, {})
}

export async function sendMitmachen(vorname, nachname, email, tel, strasse, plz, ort, paket, bemerkung) {
  const subject = ""
  const message = ""
  return await ApiService.post('/mail/mitmachen', { publikation_id: import.meta.env.VITE_PUBLIKATION_ID, subject: subject, message: message }, {})
}

export async function sendFoerder(betrag, typ, email, name, strasse, plz, ort, zahlart) {
  const subject = ""
  const message = ""
  return await ApiService.post('/mail/foerder', { publikation_id: import.meta.env.VITE_PUBLIKATION_ID, subject: subject, message: message }, {})
}