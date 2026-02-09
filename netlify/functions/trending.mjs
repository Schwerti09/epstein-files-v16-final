
export default async (req, context) => {
    return new Response(JSON.stringify([
        { title: "System Online", summary: "Die API Verbindung steht.", year: 2024 }
    ]), { headers: { "Content-Type": "application/json" } });
};