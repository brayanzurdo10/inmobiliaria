// properties-data.js - Carga datos desde localStorage o usa datos por defecto
const defaultPropertyImages = {
    0: {
        title: "Eucalipto - Apartamento Venta Ciudad Verde Soacha",
        location: "Ciudad Verde, Soacha, Cundinamarca",
        price: "$130.000.000",
        badge: "Nuevo",
        images: [
            "images/apartamentos/apartamento_0/Bano.png",
"images/apartamentos/apartamento_0/cocina_1.png",
"images/apartamentos/apartamento_0/cocina_2.png",
"images/apartamentos/apartamento_0/Entrada_torre.png",
"images/apartamentos/apartamento_0/Habitacion_princial_3.png",
"images/apartamentos/apartamento_0/Habitacion_principal_1.png",
"images/apartamentos/apartamento_0/Habitacion_principal_2.png",
"images/apartamentos/apartamento_0/Habitacion_principal_4.png",
"images/apartamentos/apartamento_0/Habitacion_secundaria_1.png",
"images/apartamentos/apartamento_0/Habitacion_secundaria_2.png",
"images/apartamentos/apartamento_0/Habitacion_secundaria_3.png",
"images/apartamentos/apartamento_0/Habitacion_secundaria_4.png",
"images/apartamentos/apartamento_0/Parqueaderos.png",
"images/apartamentos/apartamento_0/Recepcion_entrada_tienda_comunal.png",
"images/apartamentos/apartamento_0/Sala_1.png",
"images/apartamentos/apartamento_0/Sala_2.png",
"images/apartamentos/apartamento_0/Sala_3.png",
"images/apartamentos/apartamento_0/Sala_4.png",
"images/apartamentos/apartamento_0/Zona_comun_1.png",
"images/apartamentos/apartamento_0/Zona_Comun_2.png",
"images/apartamentos/apartamento_0/Zona_comun_parque.png"
        ],
        description: "Hermoso apartamento en venta de 37m2, con vista interior, ubicado en un 5to piso.",
        details: {
            building: { conjunto: "Eucalipto", estrato: "3", antiguedad: "11 años", piso: "5to piso", acceso: "Escaleras" },
            distribution: { area: "37 m²", habitaciones: "3", banos: "1", garajes: "No tiene", ascensores: "No tiene" },
            features: { tipo: "Apartamento", gas: "Sí", parqueadero: "No", porteria: "24 horas", lavanderia: "Zona de lavandería", salonSocial: "Sí", parqueInfantil: "Sí", zonasVerdes: "Sí" }
        }
    },
    1: {
        title: "Penthouse Exclusivo con Terraza",
        location: "Torre Skyline, Piso 25",
        price: "$450,000",
        badge: "Premium",
        images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"],
        description: "Increíble penthouse con terraza privada y jacuzzi.",
        details: {
            building: { conjunto: "Skyline Tower", estrato: "5", antiguedad: "5 años" },
            distribution: { area: "250 m2", habitaciones: "4", banos: "3", garajes: "2", ascensores: "Si" },
            features: { tipo: "Penthouse", gas: "Si", porteria: "24 hrs", lavanderia: "Si" }
        }
    },
    2: {
        title: "Apartamento Familiar Ideal",
        location: "Residencial Las Flores",
        price: "$195,000",
        badge: "Popular",
        images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"],
        description: "Perfecto para familias, cerca de escuelas y parques.",
        details: {
            building: { conjunto: "Las Flores", estrato: "4", antiguedad: "8 años" },
            distribution: { area: "95 m2", habitaciones: "3", banos: "2", garajes: "1", ascensores: "Si" },
            features: { tipo: "Apartamento", gas: "Si", porteria: "12 hrs", lavanderia: "Si" }
        }
    },
    3: {
        title: "Estudio Moderno y Funcional",
        location: "Urban District",
        price: "$125,000",
        badge: "Oferta",
        images: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800"],
        description: "Estudio moderno con diseño inteligente.",
        details: {
            building: { conjunto: "Urban District", estrato: "3", antiguedad: "2 años" },
            distribution: { area: "55 m2", habitaciones: "1", banos: "1", garajes: "No Tiene", ascensores: "Si" },
            features: { tipo: "Estudio", gas: "Si", porteria: "24 hrs", lavanderia: "Si" }
        }
    }
};

function getPropertyImages() {
    var stored = localStorage.getItem('inmueblespro_properties');
    if (stored) {
        try {
            var parsed = JSON.parse(stored);
            var obj = {};
            parsed.forEach(function(prop, index) {
                obj[index] = prop;
            });
            return obj;
        } catch (e) {
            console.error(e);
        }
    }
    return defaultPropertyImages;
}

var propertyImages = getPropertyImages();

function getWhatsAppNumber() {
    return localStorage.getItem('adminWhatsapp') || '573114466932';
}

