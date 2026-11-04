import { ApiService } from "./APIService";

export async function getNaechsteRedaktionssitzung() {
    return await ApiService.get(`/publikationen/${import.meta.env.VITE_PUBLIKATION_ID}/redaktionssitzung`)
}