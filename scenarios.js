// Escenarios del CEO Challenge
export const scenarios = [
    {
        id: 1,
        situation: "La empresa enfrenta una filtración de datos de clientes",
        description: "Se ha detectado una brecha de seguridad que comprometió información sensible de clientes. Los medios están empezando a reportar el incidente.",
        options: [
            {
                text: "Mantener silencio mientras se investiga internamente",
                impact: {
                    finances: -15,
                    reputation: -20,
                    morale: -5
                },
                feedback: "La falta de comunicación generó desconfianza y especulaciones negativas."
            },
            {
                text: "Emitir un comunicado inmediato y ofrecer servicios de protección de identidad a los afectados",
                impact: {
                    finances: -10,
                    reputation: 5,
                    morale: 10
                },
                feedback: "La transparencia y acción rápida fue apreciada por clientes y empleados."
            },
            {
                text: "Culpar públicamente al proveedor de servicios de seguridad",
                impact: {
                    finances: -5,
                    reputation: -15,
                    morale: -10
                },
                feedback: "Evadir la responsabilidad dañó las relaciones comerciales y la credibilidad."
            },
            {
                text: "Contratar expertos externos para manejar la crisis y mejorar la seguridad",
                impact: {
                    finances: -20,
                    reputation: 10,
                    morale: 5
                },
                feedback: "La inversión en expertise profesional demostró compromiso con la seguridad."
            }
        ]
    },
    {
        id: 2,
        situation: "Oportunidad de expansión internacional",
        description: "Se presenta la oportunidad de expandir operaciones a un mercado emergente en Latinoamérica con gran potencial de crecimiento pero alta inestabilidad política.",
        options: [
            {
                text: "Proceder con la expansión inmediatamente",
                impact: {
                    finances: -30,
                    reputation: 15,
                    morale: 10
                },
                feedback: "La rápida entrada al mercado proporcionó una ventaja competitiva significativa."
            },
            {
                text: "Realizar un estudio de mercado exhaustivo antes de decidir",
                impact: {
                    finances: -10,
                    reputation: 5,
                    morale: 0
                },
                feedback: "La decisión informada minimizó riesgos pero retrasó oportunidades de crecimiento."
            },
            {
                text: "Buscar un socio local para la expansión",
                impact: {
                    finances: -20,
                    reputation: 10,
                    morale: 5
                },
                feedback: "La alianza estratégica facilitó la entrada al mercado y redujo riesgos operativos."
            },
            {
                text: "Descartar la oportunidad y enfocarse en el mercado actual",
                impact: {
                    finances: 5,
                    reputation: -10,
                    morale: -5
                },
                feedback: "La decisión conservadora mantuvo la estabilidad pero perdió una oportunidad de crecimiento."
            }
        ]
    }
];

const usedScenarios = new Set();

export function getRandomScenario() {
    const availableScenarios = scenarios.filter(scenario => !usedScenarios.has(scenario.id));
    if (availableScenarios.length === 0) {
        usedScenarios.clear(); // Reiniciar si todos los escenarios han sido usados
        return scenarios[Math.floor(Math.random() * scenarios.length)];
    }
    const scenario = availableScenarios[Math.floor(Math.random() * availableScenarios.length)];
    usedScenarios.add(scenario.id);
    return scenario;
}