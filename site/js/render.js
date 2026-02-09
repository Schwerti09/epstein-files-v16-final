
import { fetchTrending } from './api.js';

export async function renderHome() {
    const content = document.getElementById('content');
    if(!content) return;
    
    content.innerHTML = '<div class="animate-pulse">Lade System...</div>';
    
    const data = await fetchTrending();
    if(data.length === 0) {
        content.innerHTML = '<div class="p-4 bg-red-900/50 border border-red-500 rounded">Keine Daten. Hast du die TURSO Variablen in Netlify gesetzt?</div>';
        return;
    }

    content.innerHTML = data.map(item => `
        <div class="mb-4 p-4 bg-slate-800 rounded border border-slate-700">
            <h3 class="font-bold text-xl">${item.title}</h3>
            <p class="text-slate-400">${item.summary}</p>
        </div>
    `).join('');
}

// Auto-Init
document.addEventListener('DOMContentLoaded', renderHome);
            