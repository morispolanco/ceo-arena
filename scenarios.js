// Escenarios del CEO Challenge
const scenarios = [
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
                    reputation: +5,
                    morale: +10
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
                    reputation: +10,
                    morale: +5
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
                text: "Realizar una entrada agresiva con gran inversión inicial",
                impact: {
                    finances: -25,
                    reputation: +15,
                    morale: +10
                },
                feedback: "La inversión significativa generó atención positiva pero expuso a la empresa a riesgos considerables."
            },
            {
                text: "Comenzar con una oficina pequeña y crecer gradualmente",
                impact: {
                    finances: -10,
                    reputation: +5,
                    morale: +5
                },
                feedback: "El enfoque cauteloso permitió aprender del mercado con riesgos controlados."
            },
            {
                text: "Buscar un socio local para una joint venture",
                impact: {
                    finances: -15,
                    reputation: +10,
                    morale: 0
                },
                feedback: "La alianza estratégica facilitó la entrada al mercado y redujo riesgos operativos."
            },
            {
                text: "Posponer la expansión y enfocarse en mercados actuales",
                impact: {
                    finances: +5,
                    reputation: -5,
                    morale: -5
                },
                feedback: "Se perdió una oportunidad de crecimiento pero se mantuvieron recursos para otras iniciativas."
            }
        ]
    },
    {
        id: 3,
        situation: "Crisis de recursos humanos",
        description: "Varios empleados clave han renunciado simultáneamente para unirse a un competidor, llevándose conocimiento valioso.",
        options: [
            {
                text: "Iniciar acciones legales contra los empleados y el competidor",
                impact: {
                    finances: -15,
                    reputation: -10,
                    morale: -20
                },
                feedback: "Las acciones legales crearon un ambiente de tensión y afectaron la moral del equipo."
            },
            {
                text: "Implementar un programa de retención con mejores beneficios",
                impact: {
                    finances: -20,
                    reputation: +10,
                    morale: +25
                },
                feedback: "La inversión en el bienestar de los empleados fortaleció la lealtad del equipo."
            },
            {
                text: "Reestructurar los equipos y promover talento interno",
                impact: {
                    finances: -5,
                    reputation: +5,
                    morale: +15
                },
                feedback: "Las oportunidades de crecimiento interno motivaron al personal existente."
            },
            {
                text: "Contratar consultores externos para cubrir las posiciones",
                impact: {
                    finances: -25,
                    reputation: 0,
                    morale: -5
                },
                feedback: "La solución temporal no abordó los problemas subyacentes de retención."
            }
        ]
    },
    {
        id: 4,
        situation: "Innovación tecnológica disruptiva",
        description: "Un competidor ha lanzado una nueva tecnología que amenaza con hacer obsoleto uno de nuestros productos principales.",
        options: [
            {
                text: "Invertir fuertemente en I+D para desarrollar tecnología superior",
                impact: {
                    finances: -30,
                    reputation: +20,
                    morale: +15
                },
                feedback: "La apuesta por la innovación posicionó a la empresa como líder tecnológico."
            },
            {
                text: "Buscar adquirir la empresa competidora",
                impact: {
                    finances: -40,
                    reputation: +10,
                    morale: -5
                },
                feedback: "La adquisición aseguró la tecnología pero generó desafíos de integración."
            },
            {
                text: "Pivotear hacia un nuevo mercado o producto",
                impact: {
                    finances: -20,
                    reputation: +5,
                    morale: +10
                },
                feedback: "El cambio estratégico abrió nuevas oportunidades de crecimiento."
            },
            {
                text: "Mantener el producto actual y reducir precios",
                impact: {
                    finances: -15,
                    reputation: -15,
                    morale: -10
                },
                feedback: "La estrategia defensiva no logró retener clientes a largo plazo."
            }
        ]
    },
    {
        id: 5,
        situation: "Problema de calidad del producto",
        description: "Se han reportado fallos significativos en la última versión de nuestro producto estrella, afectando a miles de usuarios.",
        options: [
            {
                text: "Retirar el producto y ofrecer reembolsos completos",
                impact: {
                    finances: -35,
                    reputation: +15,
                    morale: -5
                },
                feedback: "La decisión costosa demostró compromiso con la satisfacción del cliente."
            },
            {
                text: "Lanzar una actualización rápida y ofrecer compensación limitada",
                impact: {
                    finances: -15,
                    reputation: +5,
                    morale: +5
                },
                feedback: "La respuesta balanceada mantuvo la confianza sin comprometer demasiados recursos."
            },
            {
                text: "Minimizar el problema y esperar que pase",
                impact: {
                    finances: -5,
                    reputation: -25,
                    morale: -15
                },
                feedback: "La falta de acción deterioró la confianza de los clientes y empleados."
            },
            {
                text: "Crear un equipo especial de respuesta a crisis",
                impact: {
                    finances: -20,
                    reputation: +10,
                    morale: +10
                },
                feedback: "El enfoque profesional y dedicado restauró la confianza gradualmente."
            }
        ]
    },
    {
        id: 6,
        situation: "Oferta de fusión",
        description: "Una empresa más grande del sector ha hecho una oferta para adquirir la compañía con una prima del 30% sobre el valor actual.",
        options: [
            {
                text: "Aceptar la oferta y facilitar la transición",
                impact: {
                    finances: +30,
                    reputation: -5,
                    morale: -15
                },
                feedback: "La venta generó ganancias inmediatas pero afectó la independencia operativa."
            },
            {
                text: "Rechazar la oferta y anunciar plan de crecimiento independiente",
                impact: {
                    finances: -10,
                    reputation: +15,
                    morale: +20
                },
                feedback: "La decisión de mantener independencia fortaleció la cultura empresarial."
            },
            {
                text: "Negociar mejores términos y mantener autonomía operativa",
                impact: {
                    finances: +20,
                    reputation: +5,
                    morale: +5
                },
                feedback: "El acuerdo balanceado preservó valores clave mientras aseguraba beneficios."
            },
            {
                text: "Buscar ofertas competidoras",
                impact: {
                    finances: +15,
                    reputation: -10,
                    morale: -10
                },
                feedback: "La búsqueda de múltiples ofertas creó incertidumbre interna."
            }
        ]
    },
    {
        id: 7,
        situation: "Crisis ambiental",
        description: "Se descubre que uno de nuestros procesos de producción está causando contaminación significativa en la comunidad local.",
        options: [
            {
                text: "Detener inmediatamente la producción y remediar el daño",
                impact: {
                    finances: -40,
                    reputation: +20,
                    morale: +10
                },
                feedback: "La acción decisiva demostró compromiso con la responsabilidad ambiental."
            },
            {
                text: "Implementar gradualmente mejoras ambientales",
                impact: {
                    finances: -20,
                    reputation: -10,
                    morale: -5
                },
                feedback: "El enfoque gradual fue percibido como insuficiente por la comunidad."
            },
            {
                text: "Negar responsabilidad y continuar operaciones",
                impact: {
                    finances: +5,
                    reputation: -30,
                    morale: -25
                },
                feedback: "La negación causó daño severo a la imagen corporativa y moral."
            },
            {
                text: "Invertir en tecnología verde y programas comunitarios",
                impact: {
                    finances: -30,
                    reputation: +25,
                    morale: +20
                },
                feedback: "La inversión en sostenibilidad fortaleció relaciones comunitarias."
            }
        ]
    },
    {
        id: 8,
        situation: "Cambio en regulaciones",
        description: "Nuevas regulaciones gubernamentales requieren cambios significativos en nuestros procesos y productos.",
        options: [
            {
                text: "Implementar cambios rápidamente con recursos internos",
                impact: {
                    finances: -25,
                    reputation: +5,
                    morale: -10
                },
                feedback: "La adaptación rápida aseguró cumplimiento pero estresó al equipo."
            },
            {
                text: "Contratar consultores especializados en regulación",
                impact: {
                    finances: -20,
                    reputation: +10,
                    morale: +5
                },
                feedback: "La experiencia externa facilitó una transición suave."
            },
            {
                text: "Cabildear por cambios en la regulación",
                impact: {
                    finances: -15,
                    reputation: -5,
                    morale: 0
                },
                feedback: "Los esfuerzos de lobby tuvieron resultados mixtos y cuestionamientos éticos."
            },
            {
                text: "Rediseñar productos y procesos proactivamente",
                impact: {
                    finances: -30,
                    reputation: +15,
                    morale: +15
                },
                feedback: "La innovación proactiva posicionó a la empresa como líder en cumplimiento."
            }
        ]
    },
    {
        id: 9,
        situation: "Oportunidad de adquisición",
        description: "Una startup innovadora pero con problemas financieros está disponible para adquisición a un precio atractivo.",
        options: [
            {
                text: "Realizar una adquisición completa",
                impact: {
                    finances: -30,
                    reputation: +10,
                    morale: +5
                },
                feedback: "La adquisición agregó capacidades valiosas pero requirió recursos significativos."
            },
            {
                text: "Proponer una inversión minoritaria estratégica",
                impact: {
                    finances: -15,
                    reputation: +5,
                    morale: 0
                },
                feedback: "La inversión parcial mantuvo flexibilidad mientras aseguraba acceso a tecnología."
            },
            {
                text: "Esperar a que bajen más de precio",
                impact: {
                    finances: +5,
                    reputation: -5,
                    morale: -5
                },
                feedback: "La espera resultó en pérdida de oportunidad cuando otro comprador emergió."
            },
            {
                text: "Desarrollar capacidades similares internamente",
                impact: {
                    finances: -25,
                    reputation: +15,
                    morale: +15
                },
                feedback: "El desarrollo interno fortaleció capacidades pero tomó más tiempo."
            }
        ]
    },
    {
        id: 10,
        situation: "Conflicto interno de liderazgo",
        description: "Hay tensiones significativas entre los líderes de diferentes departamentos que están afectando la operación.",
        options: [
            {
                text: "Reorganizar la estructura organizacional",
                impact: {
                    finances: -10,
                    reputation: +5,
                    morale: +15
                },
                feedback: "La reestructuración mejoró la colaboración entre departamentos."
            },
            {
                text: "Facilitar sesiones de mediación y team building",
                impact: {
                    finances: -5,
                    reputation: 0,
                    morale: +10
                },
                feedback: "Las actividades de equipo mejoraron la comunicación gradualmente."
            },
            {
                text: "Reemplazar a los líderes problemáticos",
                impact: {
                    finances: -15,
                    reputation: -5,
                    morale: -10
                },
                feedback: "Los cambios abruptos de liderazgo crearon más inestabilidad."
            },
            {
                text: "Ignorar el conflicto esperando que se resuelva solo",
                impact: {
                    finances: -20,
                    reputation: -15,
                    morale: -25
                },
                feedback: "La falta de acción permitió que el conflicto escalara significativamente."
            }
        ]
    },
    {
        id: 11,
        situation: "Demanda de propiedad intelectual",
        description: "Un competidor alega que nuestro producto principal infringe sus patentes y exige compensación.",
        options: [
            {
                text: "Luchar legalmente contra la demanda",
                impact: {
                    finances: -25,
                    reputation: -5,
                    morale: -5
                },
                feedback: "La batalla legal fue costosa y desgastante para la organización."
            },
            {
                text: "Negociar un acuerdo de licencia",
                impact: {
                    finances: -15,
                    reputation: +5,
                    morale: +5
                },
                feedback: "El acuerdo permitió continuar operaciones con certeza legal."
            },
            {
                text: "Rediseñar el producto para evitar la patente",
                impact: {
                    finances: -20,
                    reputation: +10,
                    morale: +10
                },
                feedback: "La innovación forzada resultó en un producto mejorado."
            },
            {
                text: "Ignorar la demanda y continuar operaciones",
                impact: {
                    finances: +5,
                    reputation: -20,
                    morale: -15
                },
                feedback: "La estrategia arriesgada resultó en mayores problemas legales."
            }
        ]
    },
    {
        id: 12,
        situation: "Oportunidad de transformación digital",
        description: "La empresa necesita modernizar sus sistemas legacy, pero el costo y riesgo de la transformación son significativos.",
        options: [
            {
                text: "Implementar una transformación digital completa",
                impact: {
                    finances: -35,
                    reputation: +20,
                    morale: +15
                },
                feedback: "La modernización integral mejoró la eficiencia y competitividad."
            },
            {
                text: "Actualizar sistemas gradualmente por departamentos",
                impact: {
                    finances: -20,
                    reputation: +5,
                    morale: +5
                },
                feedback: "El enfoque incremental minimizó riesgos pero ralentizó beneficios."
            },
            {
                text: "Mantener sistemas actuales con mejoras mínimas",
                impact: {
                    finances: -5,
                    reputation: -15,
                    morale: -10
                },
                feedback: "La falta de modernización afectó la competitividad a largo plazo."
            },
            {
                text: "Tercerizar operaciones tecnológicas",
                impact: {
                    finances: -25,
                    reputation: +10,
                    morale: -5
                },
                feedback: "La tercerización mejoró capacidades pero creó dependencia externa."
            }
        ]
    },
    {
        id: 13,
        situation: "Crisis de redes sociales",
        description: "Un comentario controversial de un ejecutivo se ha vuelto viral en redes sociales, generando backlash significativo.",
        options: [
            {
                text: "Emitir disculpa pública y tomar acción disciplinaria",
                impact: {
                    finances: -5,
                    reputation: +15,
                    morale: -5
                },
                feedback: "La respuesta rápida y decisiva ayudó a controlar el daño reputacional."
            },
            {
                text: "Defender al ejecutivo y atacar la 'cultura de cancelación'",
                impact: {
                    finances: -15,
                    reputation: -20,
                    morale: -10
                },
                feedback: "La postura defensiva amplificó la controversia y alienó a stakeholders."
            },
            {
                text: "Ignorar la controversia esperando que pase",
                impact: {
                    finances: -10,
                    reputation: -15,
                    morale: -15
                },
                feedback: "El silencio fue interpretado como falta de responsabilidad."
            },
            {
                text: "Lanzar campaña de responsabilidad social",
                impact: {
                    finances: -20,
                    reputation: +10,
                    morale: +15
                },
                feedback: "Las acciones positivas ayudaron a cambiar la narrativa gradualmente."
            }
        ]
    },
    {
        id: 14,
        situation: "Desafío de sostenibilidad",
        description: "Inversores y clientes demandan mayor compromiso con la sostenibilidad y reducción de huella de carbono.",
        options: [
            {
                text: "Comprometer neutralidad de carbono para 2030",
                impact: {
                    finances: -30,
                    reputation: +25,
                    morale: +20
                },
                feedback: "El compromiso ambicioso posicionó a la empresa como líder en sostenibilidad."
            },
            {
                text: "Implementar iniciativas graduales de sostenibilidad",
                impact: {
                    finances: -15,
                    reputation: +10,
                    morale: +10
                },
                feedback: "El enfoque balanceado mostró progreso sin comprometer operaciones."
            },
            {
                text: "Enfocarse en marketing verde sin cambios significativos",
                impact: {
                    finances: -5,
                    reputation: -15,
                    morale: -10
                },
                feedback: "El greenwashing fue detectado y criticado por stakeholders."
            },
            {
                text: "Crear división dedicada a innovación sostenible",
                impact: {
                    finances: -25,
                    reputation: +20,
                    morale: +15
                },
                feedback: "La inversión en innovación verde generó nuevas oportunidades."
            }
        ]
    },
    {
        id: 15,
        situation: "Escasez en cadena de suministro",
        description: "Problemas globales han causado escasez de componentes críticos y aumento de costos logísticos.",
        options: [
            {
                text: "Diversificar proveedores y aumentar inventario",
                impact: {
                    finances: -25,
                    reputation: +10,
                    morale: +5
                },
                feedback: "La estrategia redujo riesgos pero aumentó costos operativos."
            },
            {
                text: "Rediseñar productos con componentes alternativos",
                impact: {
                    finances: -20,
                    reputation: +15,
                    morale: +10
                },
                feedback: "La innovación en diseño mejoró la resiliencia de la cadena."
            },
            {
                text: "Aumentar precios para compensar costos",
                impact: {
                    finances: +10,
                    reputation: -15,
                    morale: -5
                },
                feedback: "Los aumentos de precio afectaron la satisfacción del cliente."
            },
            {
                text: "Verticalizar producción de componentes críticos",
                impact: {
                    finances: -35,
                    reputation: +20,
                    morale: +15
                },
                feedback: "La integración vertical mejoró control pero requirió gran inversión."
            }
        ]
    },
    {
        id: 19,
        situation: "Desafío de ciberseguridad",
        description: "Se detecta un intento sofisticado de ciberataque que podría comprometer datos críticos.",
        options: [
            {
                text: "Implementar bloqueo completo de sistemas",
                impact: {
                    finances: -25,
                    reputation: +5,
                    morale: -10
                },
                feedback: "La respuesta drástica protegió datos pero interrumpió operaciones."
            },
            {
                text: "Contratar expertos en ciberseguridad",
                impact: {
                    finances: -20,
                    reputation: +15,
                    morale: +10
                },
                feedback: "La expertise externa mejoró defensas y confianza."
            },
            {
                text: "Mantener operaciones con monitoreo aumentado",
                impact: {
                    finances: -10,
                    reputation: -10,
                    morale: -5
                },
                feedback: "El enfoque pasivo dejó vulnerabilidades sin atender."
            },
            {
                text: "Implementar programa completo de seguridad",
                impact: {
                    finances: -30,
                    reputation: +20,
                    morale: +15
                },
                feedback: "La inversión proactiva fortaleció la postura de seguridad."
            }
        ]
    },
    {
        id: 20,
        situation: "Cambio generacional",
        description: "La empresa enfrenta el desafío de atraer y retener talento joven mientras mantiene el conocimiento de empleados senior.",
        options: [
            {
                text: "Implementar programa de mentoring intergeneracional",
                impact: {
                    finances: -15,
                    reputation: +15,
                    morale: +20
                },
                feedback: "El programa facilitó la transferencia de conocimiento y creó puentes generacionales."
            },
            {
                text: "Priorizar la contratación de jóvenes talentos",
                impact: {
                    finances: -20,
                    reputation: +10,
                    morale: -5
                },
                feedback: "La renovación generacional trajo innovación pero perdió experiencia valiosa."
            },
            {
                text: "Mantener políticas tradicionales",
                impact: {
                    finances: +5,
                    reputation: -15,
                    morale: -15
                },
                feedback: "La resistencia al cambio dificultó la adaptación a nuevas realidades."
            },
            {
                text: "Crear programas híbridos de desarrollo",
                impact: {
                    finances: -25,
                    reputation: +20,
                    morale: +15
                },
                feedback: "El enfoque balanceado fortaleció la cultura organizacional."
            }
        ]
    }
];

// Función para obtener un escenario aleatorio no utilizado
function getRandomScenario() {
    const availableScenarios = scenarios.filter(scenario => !usedScenarios.has(scenario.id));
    if (availableScenarios.length === 0) {
        usedScenarios.clear(); // Reiniciar si todos los escenarios han sido usados
        return scenarios[Math.floor(Math.random() * scenarios.length)];
    }
    const scenario = availableScenarios[Math.floor(Math.random() * availableScenarios.length)];
    usedScenarios.add(scenario.id);
    return scenario;
}
,
    {
        id: 16,
        situation: "Competidor disruptivo",
        description: "Un nuevo competidor ha entrado al mercado con un modelo de negocio innovador y precios agresivos.",
        options: [
            {
                text: "Igualar precios y condiciones del competidor",
                impact: {
                    finances: -30,
                    reputation: -5,
                    morale: -10
                },
                feedback: "La guerra de precios afectó márgenes sin diferenciación clara."
            },
            {
                text: "Enfocarse en segmentos premium y diferenciación",
                impact: {
                    finances: -10,
                    reputation: +15,
                    morale: +10
                },
                feedback: "La estrategia de diferenciación protegió márgenes y base de clientes."
            },
            {
                text: "Adquirir o aliarse con startups innovadoras",
                impact: {
                    finances: -25,
                    reputation: +20,
                    morale: +15
                },
                feedback: "Las alianzas estratégicas agregaron capacidades innovadoras."
            },
            {
                text: "Mantener estrategia actual y observar",
                impact: {
                    finances: -15,
                    reputation: -10,
                    morale: -5
                },
                feedback: "La inacción permitió al competidor ganar participación de mercado."
            }
        ]
    },
    {
        id: 17,
        situation: "Oportunidad de diversificación",
        description: "Se identifica oportunidad de entrar en un nuevo segmento de mercado con gran potencial pero fuera de nuestra experiencia core.",
        options: [
            {
                text: "Invertir fuertemente en el nuevo segmento",
                impact: {
                    finances: -35,
                    reputation: +20,
                    morale: +15
                },
                feedback: "La diversificación agresiva abrió nuevas vías de crecimiento."
            },
            {
                text: "Realizar un piloto a pequeña escala",
                impact: {
                    finances: -15,
                    reputation: +5,
                    morale: +5
                },
                feedback: "El enfoque cauteloso permitió aprender sin gran exposición."
            },
            {
                text: "Buscar socio con experiencia en el segmento",
                impact: {
                    finances: -20,
                    reputation: +15,
                    morale: +10
                },
                feedback: "La alianza estratégica redujo riesgos de entrada."
            },
            {
                text: "Mantener foco en negocio principal",
                impact: {
                    finances: +5,
                    reputation: -5,
                    morale: -5
                },
                feedback: "Se perdió oportunidad de diversificación pero se mantuvo eficiencia."
            }
        ]
    },
    {
        id: 18,
        situation: "Crisis de liderazgo",
        description: "El CEO actual anuncia su retiro repentino en medio de rumores de desacuerdos con la junta directiva.",
        options: [
            {
                text: "Promover rápidamente a un líder interno",
                impact: {
                    finances: -5,
                    reputation: +10,
                    morale: +15
                },
                feedback: "La promoción interna mantuvo continuidad y motivó al equipo."
            },
            {
                text: "Contratar un CEO externo con experiencia",
                impact: {
                    finances: -20,
                    reputation: +15,
                    morale: -5
                },
                feedback: "El liderazgo externo trajo nuevas perspectivas pero causó ajustes."
            },
            {
                text: "Establecer un comité ejecutivo temporal",
                impact: {
                    finances: -10,
                    reputation: -5,
                    morale: -10
                },
                feedback: "La estructura temporal creó incertidumbre y retrasos."
            },
            {
                text: "Iniciar proceso de venta de la empresa",
                impact: {
                    finances: +20,
                    reputation: -15,
                    morale: -20
                },
                feedback: "La decisión de venta generó ansiedad y pérdida de talento."
            }
        ]
    },
    {
        id: 19,
        situation: "Desafío de ciberseguridad",
        description: "Se detecta un intento sofisticado de ciberataque que podría comprometer datos críticos.",
        options: [
            {
                text: "Implementar bloqueo completo de sistemas",
                impact: {
                    finances: -25,
                    reputation: +5,
                    morale: -10
                },
                feedback: "La respuesta drástica protegió datos pero interrumpió operaciones."
            },
            {
                text: "Contratar expertos en ciberseguridad",
                impact: {
                    finances: -20,
                    reputation: +15,
                    morale: +10
                },
                feedback: "La expertise externa mejoró defensas y confianza."
            },
            {