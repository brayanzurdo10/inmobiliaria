// properties-data.js - Carga datos desde localStorage o usa datos por defecto
const defaultPropertyImages = {
    0: {
        title: "Vinculo - Apartamento Venta Ciudad Verde Soacha",
        location: "Ciudad Verde, Soacha, Cundinamarca",
        price: "$130.000.000",
        badge: "Disponible",
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
            features: { tipo: "Apartamento", gas: "Sí", parqueadero: "Comunal", porteria: "24 horas", lavanderia: "Zona de lavandería", salonSocial: "Sí", parqueInfantil: "Sí", zonasVerdes: "Sí" }
        }
    },
    1: {
    title: "El Triunfo 1 - Apartamento Venta Hogares Soacha",
    location: "Carrera 38 # 13 - 116 Soacha, Hogares Soacha",
    price: "$130.000.000",
    badge: "Disponible",
    images: [
        "images/apartamentos/apartamento_0/Sala_3.png",

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
"images/apartamentos/apartamento_0/Bano.png",
"images/apartamentos/apartamento_0/Sala_4.png",
"images/apartamentos/apartamento_0/Zona_comun_1.png",
"images/apartamentos/apartamento_0/Zona_Comun_2.png",
"images/apartamentos/apartamento_0/Zona_comun_parque.png"
    ],
    description: "Venta de apartamento de 42 m² ubicado en el conjunto residencial El Triunfo 1 en Hogares Soacha. Apartamento en primer piso con espacios amplios, buena iluminación natural, sala-comedor espaciosa, cocina básica y parqueadero comunal por sorteo.",
    details: {
        building: { conjunto: "El Triunfo 1", estrato: "3", antiguedad: "N/A", piso: "1er piso", acceso: "Escaleras" },
        distribution: { area: "42 m²", habitaciones: "2", banos: "1", garajes: "Comunal por sorteo", ascensores: "No tiene" },
        features: { tipo: "Apartamento", gas: "Sí", parqueadero: "Comunal", porteria: "24 horas", lavanderia: "Zona de lavandería", salonSocial: "Si", parqueInfantil: "Sí", zonasVerdes: "Sí" }
    }
},
    2: {
    title: "Ciudad Verde - Apartamento Amoblado en Venta Soacha",
    location: "Ciudad Verde, Soacha, Cundinamarca",
    price: "$185.000.000",
    badge: "Disponible",
    images: [
        "images/apartamentos/apartamento_2/bano_1.jpg",
        "images/apartamentos/apartamento_2/bano_2.mp4",
        "images/apartamentos/apartamento_2/bano_3.jpg",
        "images/apartamentos/apartamento_2/bano_4.jpg",
        "images/apartamentos/apartamento_2/bano_5.jpg",
        "images/apartamentos/apartamento_2/bano_6.mp4",
        "images/apartamentos/apartamento_2/cocina.jpg",
        "images/apartamentos/apartamento_2/cocina_1.mp4",
        "images/apartamentos/apartamento_2/habitacion_1.jpg",
        "images/apartamentos/apartamento_2/habitacion_2.jpg",
        "images/apartamentos/apartamento_2/habitacion_3.jpg",
        "images/apartamentos/apartamento_2/pasillo.mp4",
        "images/apartamentos/apartamento_2/Sala_1.jpg",
        "images/apartamentos/apartamento_2/Sala_2.jpg",
        "images/apartamentos/apartamento_2/Sala_3.jpg"
    ],
    description: "Se vende hermoso apartamento amoblado en Ciudad Verde, Soacha. Cuenta con 53 m², excelente iluminación natural y distribución funcional. Ubicado en 6° piso, ideal para negocio inmediato. Incluye persianas, closets, mueble de sala, televisor, nevera, lavadora y mueble de TV. Todo al día.",
    details: {
        building: { conjunto: "Ciudad Verde", estrato: "3", antiguedad: "N/A", piso: "6° piso", acceso: "No especificado" },
        distribution: { area: "53 m²", habitaciones: "3", banos: "2", garajes: "No especificado", ascensores: "No especificado" },
        features: { tipo: "Apartamento", gas: "Sí", porteria: "No especificado", lavanderia: "Zona de ropas", salonSocial: "No especificado", parqueInfantil: "No especificado", zonasVerdes: "Sí" }
    }
    },
    3: {
    title: "Ciudad Verde - Apartamento Venta Soacha",
    location: "Ciudad Verde, Soacha, Cundinamarca",
    price: "$149.500.000",
    badge: "Disponible",
    images: [
        "images/apartamentos/apartamento_3/bano_1.jpg",
        "images/apartamentos/apartamento_3/bano_2.jpg",
        "images/apartamentos/apartamento_3/bano_3.jpg",
        "images/apartamentos/apartamento_3/bano_4.jpg",
        "images/apartamentos/apartamento_3/bano_5.jpg",
        "images/apartamentos/apartamento_3/cocina.jpg",
        "images/apartamentos/apartamento_3/habitacion_1.jpg",
        "images/apartamentos/apartamento_3/Sala_3.jpg",
        "images/apartamentos/apartamento_3/pasillo.jpg",
        "images/apartamentos/apartamento_3/habitacion_2.jpg",
        "images/apartamentos/apartamento_3/habitacion_3.jpg",
        "images/apartamentos/apartamento_3/habitacion_4.jpg",
        "images/apartamentos/apartamento_3/Sala_2.jpg",
        "images/apartamentos/apartamento_3/Sala_1.jpg"
    ],
    description: "Se vende hermoso apartamento en Ciudad Verde, Soacha. Cuenta con 3 habitaciones, 1 baño, cocina integral y sala comedor. Incluye acabados modernos como espejo con luces LED y bluetooth, además de persianas. Ubicado en conjunto residencial con zona BBQ, ideal para vivir en familia.",
    details: {
        building: { conjunto: "Ciudad Verde", estrato: "3", antiguedad: "N/A", piso: "3", acceso: "Escaleras" },
        distribution: { area: "50 m²", habitaciones: "3", banos: "1", garajes: "N/A", ascensores: "No" },
        features: { tipo: "Apartamento", gas: "Sí", parqueadero: "Comunal", porteria: "24 horas", lavanderia: "Zona de lavandería", salonSocial: "Si", parqueInfantil: "Si", zonasVerdes: "Sí (zona BBQ)" }
    }
}
};

function getPropertyImages() {
    // Siempre usar defaultPropertyImages para evitar problemas con localStorage
    return defaultPropertyImages;
    
    // Código original comentado para referencia:
    /*
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
    */
}

var propertyImages = getPropertyImages();

// Función para limpiar cache si es necesario
function clearPropertyCache() {
    localStorage.removeItem('inmueblespro_properties');
    localStorage.removeItem('adminWhatsapp');
    location.reload();
}

function getWhatsAppNumber() {
    return localStorage.getItem('adminWhatsapp') || '573114466932';
}

