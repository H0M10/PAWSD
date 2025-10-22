/* js/script.js */

const loadHTML = (selector, url) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error al cargar " + url);
            }
            const data = await response.text();
            document.querySelector(selector).innerHTML = data;
            resolve();
        } catch (error) {
            console.error(error);
            document.querySelector(selector).innerHTML = `<p>Error cargando contenido.</p>`;
            reject(error);
        }
    });
};

document.addEventListener("DOMContentLoaded", async () => {
    try {
        // 1. Carga main.html y footer.html (pueden cargar al mismo tiempo)
        await Promise.all([
            loadHTML("#main", "main.html"),
            loadHTML("#footer", "footer.html") // <-- AÑADIDO
        ]);
        
        // 2. DESPUÉS de que main.html esté listo, carga el header
        //    (Asegura que #header-placeholder existe)
        if (document.querySelector("#header-placeholder")) {
            await loadHTML("#header-placeholder", "header.html");
        } else {
            console.error("#header-placeholder no encontrado después de cargar main.html");
        }

    } catch (error) {
        console.error("Error en la carga de HTML:", error);
    }
});