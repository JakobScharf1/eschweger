import { ApiService } from "./APIService";

export async function getAktuelles() {
    return await ApiService.get(`/publikationen/${import.meta.env.VITE_PUBLIKATION_ID}/redaktionssitzung`)
}