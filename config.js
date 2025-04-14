// Configuración de la API de Google Gemini
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

// Configuración de la API
const API_CONFIG = {
    baseURL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GEMINI_API_KEY}`
    }
};

// Función para llamar a la API de Gemini
async function callGeminiAPI(prompt) {
    try {
        if (!GEMINI_API_KEY) {
            throw new Error('API key no configurada');
        }

        const response = await fetch(API_CONFIG.baseURL, {
            method: 'POST',
            headers: API_CONFIG.headers,
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`Error en la API: ${response.status}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;

    } catch (error) {
        console.error('Error al llamar a la API de Gemini:', error);
        throw error;
    }
}

// Exportar la función y configuración
export { callGeminiAPI, API_CONFIG };