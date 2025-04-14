// Función para generar escenarios dinámicos usando Google Gemini API
async function generateScenario() {
    try {
        const prompt = `
        Genera un escenario empresarial para un juego de simulación de CEO.
        El escenario debe incluir:
        - Una situación desafiante que enfrenta la empresa
        - Una descripción detallada del contexto
        - 4 opciones de decisión diferentes
        - Para cada opción, especifica el impacto en:
          * Finanzas (entre -40 y +20)
          * Reputación (entre -30 y +30)
          * Moral del equipo (entre -25 y +25)
        - Un feedback para cada opción
        
        Devuelve el escenario en formato JSON con esta estructura exacta:
        {
            "id": "número único",
            "situation": "título del escenario",
            "description": "descripción detallada",
            "options": [
                {
                    "text": "descripción de la opción",
                    "impact": {
                        "finances": número,
                        "reputation": número,
                        "morale": número
                    },
                    "feedback": "resultado de la decisión"
                }
            ]
        }
        `;

        const response = await callGeminiAPI(prompt);
        const scenario = JSON.parse(response);

        // Verificar que el escenario no se haya usado antes
        if (usedScenarios.has(scenario.id)) {
            return generateScenario(); // Generar nuevo escenario si está repetido
        }

        usedScenarios.add(scenario.id);
        return scenario;

    } catch (error) {
        console.error('Error al generar escenario:', error);
        // Retornar un escenario de respaldo en caso de error
        return scenarios[Math.floor(Math.random() * scenarios.length)];
    }
}

// Función para llamar a la API de Google Gemini
async function callGeminiAPI(prompt) {
    // Aquí va la implementación de la llamada a la API
    // Esta función debe ser implementada según la documentación de Gemini
    throw new Error('Función callGeminiAPI no implementada');
}