
// FIXED API CLIENT
const API_BASE = '/api'; 

export async function fetchTrending() {
    try {
        const res = await fetch(`${API_BASE}/trending`);
        if (!res.ok) throw new Error("API Fehler: " + res.status);
        return await res.json();
    } catch (e) {
        console.warn("API noch nicht bereit (Env Vars gesetzt?)", e);
        return [];
    }
}
            