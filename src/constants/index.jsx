import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
import user6 from "../assets/user6.jpg";

export const navItems = [
    { label: "Features", href: "#" },
    { label: "Workflow", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Testimonials", href: "#" }
];

export const features = [
    {
        icon: <BotMessageSquare />,
        text: "Optimización de Recursos",
        description: "Mejora continua mediante analisis avanzado y simulación de procesos de producción"
    },
    {
        icon: <BatteryCharging />,
        text: "Gestión de Recursos",
        description: "Planificación y asignación eficiente de material"
    },
    {
        icon: <Fingerprint />,
        text: "Analisis predictivo",
        description: "Identificacion de riesgos y oportunidades a traves de modelos de datos inteligentes"
    },
    {
        icon: <ShieldHalf />,
        text: "Automatización de tareas",
        description: "Reducción de tareas repetitivas para agilizar la producción"
    },
    {
        icon: <PlugZap />,
        text: "Monitoreo en Tiempo Real",
        description: "Control de cada etapa del proceso productivo para una respuesta inmediata"
    },
    {
        icon: <GlobeLock />,
        text: "Reportes Personalizables",
        description: "Generacion de informes claros y especificos para una mejor toma de decisiones"
    }
];

export const checkListItems = [
    {
        title: "Analisis de Datos",
        description: "Recolecta y analiza datos operativos para detectar areas de mejora y optimización"
    },
    {
        title: "Simulación de Escenarios",
        description: "Permite probar distintos escenarios para evaluar el impacto de cambios en los procesos"
    },
    {
        title: "Planificacion de recursos",
        description: "Organiza y asigna recursos de manera eficiente, ajustandose a las necesidades de producción"
    },
    {
        title: "Monitoreo y Ajuste Continuo",
        description: "Supervisa el proceso en tiempo real, permitiendo ajustes rapidos ante desviaciones o imprevistos"
    }
];

export const pricingOptions = [
    {
        title: "Essential",
        price: "$99",
        features: [
            "Analisis de datos basicos a procesos",
            "Generacion de reportes estandar",
            "Soporte por correo electronico",
            "Acceso a recursos de formacion inicial"
        ],
    },
    {
        title: "Pro",
        price: "$199",
        features: [
            "Simulacion avanzada de escenarios",
            "Personalizacion de reportes",
            "Monitoreo en tiempo real",
            "Soporte telefonico y tiempo real"
        ],
    },
    {
        title: "Empresarial",
        price: "$399",
        features: [
            "Analisis predictivo y optimización automatica de procesos",
            "Integracion con sistemas ERP y CRM",
            "Acceso multiusuario y configuracion personalizado",
            "Soporte prioritario 24/7"
        ],
    }
];

export const testimonials = [
    {
        user: "Ana G.",
        employee: "Gerente de Producción",
        image: user1,
        text: "Harmonizer transformo nuestros procesos; ahora tenemos control total y mejoras continuas"
    },
    {
        user: "Luis M.",
        employee: "Ingeniero Industrial",
        image: user2,
        text: "La simulacion de escenarios nos permitio reducir costos y optimizar recursos significativamente"
    },
    {
        user: "Claudia R.",
        employee: "Supervisora de Planta",
        image: user3,
        text: "El monitoreo en tiempo real mejoro nuestra eficiencia en cada fase de producción"
    },
    {
        user: "Carlos T.",
        employee: "Analista de Datos",
        image: user4,
        text: "Herramienta esencial para analisis rapido y decisiones informadas en entornos dinamicos"
    },
    {
        user: "Veronica S.",
        employee: "Directora de Operaciones",
        image: user5,
        text: "Harmonizer agilizo nuestra toma de decisiones y elevo nuestra competitividad a la empresa."
    },
    {
        user: "Miguel H.",
        employee: "Jefe de Calidad",
        image: user6,
        text: "Los reportes personalizables ayudaron a identificar problemas rapidamente y mejorar procesos"
    }
];

export const resourceLinks = [
    { href: "#", text: "Getting Started" },
    { href: "#", text: "Documentación" },
    { href: "#", text: "Tutoriales" },
    { href: "#", text: "API" },
    { href: "#", text: "Forums" }
];

export const platformLinks = [
    { href: "#", text: "Caracteristicas" },
    { href: "#", text: "Dispositivos soportados" },
    { href: "#", text: "Requerimientos" },
    { href: "#", text: "Descargas" },
    { href: "#", text: "Notas anteriores" }
];

export const communityLinks = [
    { href: "#", text: "Eventos" },
    { href: "#", text: "Meetups" },
    { href: "#", text: "Conferencias" },
    { href: "#", text: "Hackathons" },
    { href: "#", text: "Empleos" }
]