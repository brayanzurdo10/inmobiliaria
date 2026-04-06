// properties-data.js - Carga datos desde localStorage o usa datos por defecto
const defaultPropertyImages = {
    
    1: {
    title: "El Triunfo 1 - Apartamento Venta Hogares Soacha",
    location: "Carrera 38 # 13 - 116 Soacha, Hogares Soacha",
    price: "$130.000.000",
    oldPrice: "$134.000.000",
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
    oldPrice: "$191.000.000",
    badge: "Reservado",
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
    oldPrice: "$154.000.000",
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
},
4: {
    title: "Conjunto Palmeto - Apartamento Venta Ciudad Verde Soacha",
    location: "Ciudad Verde, Soacha, Cundinamarca",
    price: "$220.000.000",
    oldPrice: "$227.000.000",
    badge: "Disponible",
    images: [
        "images/apartamentos/apartamento_4/fachada.jpg",
        "images/apartamentos/apartamento_4/video.mp4",
    "images/apartamentos/apartamento_4/Entrada.jpg",
    "images/apartamentos/apartamento_4/sala_1.jpg",
    "images/apartamentos/apartamento_4/sala_2.jpg",
    "images/apartamentos/apartamento_4/sala_3.jpg",
    "images/apartamentos/apartamento_4/sala_4.jpg",
    "images/apartamentos/apartamento_4/cocina.jpg",
    "images/apartamentos/apartamento_4/cocina_1.jpg",
    "images/apartamentos/apartamento_4/lavadero.jpg",
    "images/apartamentos/apartamento_4/pasillo.jpg",
    "images/apartamentos/apartamento_4/habitacion_1.jpg",
    "images/apartamentos/apartamento_4/habitacion_2.jpg",
    "images/apartamentos/apartamento_4/habitacion_3.jpg",
    "images/apartamentos/apartamento_4/bano_1.jpg",
    "images/apartamentos/apartamento_4/bano_2.jpg",
    "images/apartamentos/apartamento_4/balcon_1.jpg",
    "images/apartamentos/apartamento_4/balcon_2.jpg"
    ],
    description: "Se vende amplio apartamento de 68 m² en Ciudad Verde, Soacha, Conjunto Palmeto. Ubicado en 2° piso esquinero, con excelente vista, iluminación natural y espacios cómodos. Cuenta con sala-comedor amplia, cocina semi-integral, estudio y acabados en porcelanato. Ideal para quienes buscan comodidad, ubicación estratégica y tranquilidad. Papeles al día, listo para traspaso.",
    details: {
        building: { conjunto: "Palmeto", estrato: "3", antiguedad: "N/A", piso: "2° piso", acceso: "Escaleras" },
        distribution: { area: "68 m²", habitaciones: "3", banos: "2", garajes: "No especificado", ascensores: "No" },
        features: { tipo: "Apartamento", gas: "Sí", parqueadero: "Comunal", porteria: "Vigilancia 24/7", lavanderia: "Zona de lavandería", salonSocial: "Sí", parqueInfantil: "Sí", zonasVerdes: "Sí" }
    }
},
5:{
    title: "Casa en Parque Campestre - Casa en Venta 3 Pisos Soacha",
    location: "Parque Campestre, Soacha, Cundinamarca",
    price: "$170.000.000",
    oldPrice: "$175.000.000",
    badge: "Negociable",
    images: [
        "images/apartamentos/apartamento_5/Entrada.jpg",

        "images/apartamentos/apartamento_5/sala_1.png",
        "images/apartamentos/apartamento_5/sala_2.jpg",

        "images/apartamentos/apartamento_5/cocina.png",
        "images/apartamentos/apartamento_5/patio.png",

        "images/apartamentos/apartamento_5/habitacion_1.png",
        "images/apartamentos/apartamento_5/habitacion_2.png",
        "images/apartamentos/apartamento_5/habitacion_3.png",
        "images/apartamentos/apartamento_5/habitacion_4.jpg",

        "images/apartamentos/apartamento_5/bano_1.png",
        "images/apartamentos/apartamento_5/bano_2.png"
    ],
    description: "Se vende amplia casa de 3 pisos en Parque Campestre, Soacha. Cuenta con aproximadamente 93 m² construidos, excelente distribución y espacios cómodos. Dispone de 4 habitaciones (una con baño privado), sala-comedor, cocina, patio y buena iluminación natural. Ideal para familias que buscan amplitud, comodidad y tranquilidad. Precio negociable.",
    details: {
        building: { conjunto: "Parque Campestre", estrato: "3", antiguedad: "15 años", piso: "Casa de 3 pisos", acceso: "Escaleras" },
        distribution: { area: "93 m² aprox", habitaciones: "4", banos: "2", garajes: "Comunal", ascensores: "No aplica" },
        features: { tipo: "Casa", gas: "Sí", parqueadero: "Comunal", porteria: "24 horas", lavanderia: "Zona de lavandería", salonSocial: "Sí", parqueInfantil: "Sí", zonasVerdes: "Sí" }
    }
},
6:{
    title: "Apartamento en Ciudad Verde - Conjunto Eucalipto Primer Piso",
    location: "Ciudad Verde, Soacha, Cundinamarca",
    price: "$140.000.000",
    oldPrice: "$144.000.000",
    badge: "Disponible",
    images: [
        "images/apartamentos/apartamento_6/cocina_1.jpeg",
        "images/apartamentos/apartamento_6/entrada_1.jpeg",
        "images/apartamentos/apartamento_6/entrada_2.jpeg",
        
        "images/apartamentos/apartamento_6/cocina_2.jpeg",
        "images/apartamentos/apartamento_6/cocina_3.jpeg",
        "images/apartamentos/apartamento_6/cocina_4.jpeg",
        "images/apartamentos/apartamento_6/pasillo_1.jpeg",
        "images/apartamentos/apartamento_6/pasillo_2.jpg",
        "images/apartamentos/apartamento_6/habitacion_1.jpeg",
        "images/apartamentos/apartamento_6/habitacion_2.jpeg",
        "images/apartamentos/apartamento_6/habitacion_3.jpeg",
        "images/apartamentos/apartamento_6/habitacion_4.jpeg",
        "images/apartamentos/apartamento_6/bano_1.jpg",
        "images/apartamentos/apartamento_6/bano_2.jpg"
    ],
    description: "Se vende apartamento en Ciudad Verde, Conjunto Eucalipto, ubicado en primer piso. Cuenta con 3 alcobas, sala, comedor, cocina integral y baño. Tiene excelentes acabados, se encuentra en muy buen estado y listo para habitar. Ideal para quienes buscan comodidad, fácil acceso y una excelente ubicación.",
    details: {
        building: { conjunto: "Eucalipto", estrato: "3", antiguedad: "N/A", piso: "Primer piso", acceso: "Fácil acceso" },
        distribution: { area: "40 m²", habitaciones: "3", banos: "1", garajes: "Comunal", ascensores: "No" },
        features: { tipo: "Apartamento", gas: "Sí", parqueadero: "Comunal", porteria: "24 horas", lavanderia: "Zona de lavandería", salonSocial: "Sí", parqueInfantil: "No especificado", zonasVerdes: "Sí" }
    }
},
7:{
    title: "Apartamento en Jardín Maiporé - 1er Piso Venta Soacha",
    location: "Jardín Maiporé, Soacha, Cundinamarca",
    price: "$149.990.000",
    oldPrice: "$154.000.000",
    badge: "Negociable",
    images: [
        "images/apartamentos/apartamento_7/sala_1.jpeg",
        "images/apartamentos/apartamento_7/sala_2.jpeg",
        "images/apartamentos/apartamento_7/sala_3.jpeg",

        "images/apartamentos/apartamento_7/cocina_1.jpeg",
        "images/apartamentos/apartamento_7/lavado.jpeg",

        "images/apartamentos/apartamento_7/habitacion_1.jpeg",
        "images/apartamentos/apartamento_7/habitacion_2.jpeg",

        "images/apartamentos/apartamento_7/bano.jpeg",
        "images/apartamentos/apartamento_7/bano_2.png",
        "images/apartamentos/apartamento_7/video.mp4"
    ],
    description: "🏠 ¡Gran oportunidad! Se vende o se cede deuda apartamento en Jardín Maiporé, Soacha. Ubicado en primer piso, cuenta con 47 m² totalmente terminados, excelente iluminación y distribución funcional. Dispone de 2 habitaciones amplias y espacio adaptable para segundo baño privado o walk-in closet. Incluye cocina equipada, calentador a gas y zona de lavandería independiente. Ubicación estratégica cerca a Autopista Sur, centros comerciales y supermercados. Ideal para vivir o invertir.",
    details: {
        building: { conjunto: "Jardín Maiporé Torre 17", estrato: "3", antiguedad: "N/A", piso: "Primer piso", acceso: "Fácil acceso" },
        distribution: { area: "47 m²", habitaciones: "2", banos: "1 (opción segundo)", garajes: "Comunal", ascensores: "No" },
        features: { tipo: "Apartamento", gas: "Sí", parqueadero: "Comunal", porteria: "Vigilancia 24/7", lavanderia: "Independiente", salonSocial: "Sí", parqueInfantil: "Sí", zonasVerdes: "Sí", gimnasio: "Biosaludable" }
    }
},
8:{
    title: "Apartamento en Torres del Camino 1 - 1er Piso Venta Soacha",
    location: "Torres del Camino 1, Soacha, Cundinamarca",
    price: "$160.000.000",
    oldPrice: "$165.000.000",
    badge: "Disponible",
    images: [
        "images/apartamentos/apartamento_8/porteria.jpg",
        "images/apartamentos/apartamento_8/complejo.jpg",
        "images/apartamentos/apartamento_8/complejo_2.jpg",
    
        "images/apartamentos/apartamento_8/sala.jpg",
        "images/apartamentos/apartamento_8/cocina.jpg",
        "images/apartamentos/apartamento_8/pasillo.jpg",

        "images/apartamentos/apartamento_8/habitacion_1.jpg",
        "images/apartamentos/apartamento_8/habitacion_2.jpg",
        "images/apartamentos/apartamento_8/habitacion_3.jpg",

        "images/apartamentos/apartamento_8/bano_1.jpg",
        "images/apartamentos/apartamento_8/bano_2.jpg"
    ],
    description: "🏠 Torres del Camino 1 – Ubicación estratégica en Soacha. Se vende apartamento en primer piso con 53 m², ideal para familias, adultos mayores o quienes buscan fácil acceso. Cuenta con 3 habitaciones, 2 baños, sala-comedor amplia, cocina funcional, zona de lavado independiente y espacio para estudio o home office. Ubicado en conjunto residencial con zonas verdes, BBQ, salón social y cicloparqueadero. Ambiente tranquilo, interior y con excelente iluminación natural. Cerca de avenidas principales, transporte público, centros comerciales, colegios, estación de policía y zonas recreativas.",
    details: {
        building: { conjunto: "Torres del Camino 1", estrato: "3", antiguedad: "N/A", piso: "Primer piso", acceso: "Fácil acceso" },
        distribution: { area: "53 m²", habitaciones: "3", banos: "2", garajes: "Comunal", ascensores: "No" },
        features: { tipo: "Apartamento", gas: "Sí", parqueadero: "Comunal", porteria: "Sí", lavanderia: "Independiente", salonSocial: "Sí", parqueInfantil: "Sí", zonasVerdes: "Sí", bbq: "Sí", cicloparqueadero: "Sí" }
    }
},
9:{
    title: "Apartamento en La Grandeza 4 - Hogares de Soacha Piso 6",
    location: "Hogares de Soacha, Soacha, Cundinamarca",
    price: "157.000.000",
    badge: "Disponible",
    images: [
        "images/apartamentos/apartamento_9/porteria.jpg",
        "images/apartamentos/apartamento_9/parqueadero.jpg",

        "images/apartamentos/apartamento_9/sala_1.jpg",
        "images/apartamentos/apartamento_9/sala_2.jpg",

        "images/apartamentos/apartamento_9/cocina_1.jpg",
        "images/apartamentos/apartamento_9/lavadero_1.jpg",
        "images/apartamentos/apartamento_9/lavadero_2.jpg",

        "images/apartamentos/apartamento_9/pasillo.jpg",
        "images/apartamentos/apartamento_9/pasillo_2.jpg",

        "images/apartamentos/apartamento_9/habitacion_1.jpg",
        "images/apartamentos/apartamento_9/habitacion_2.jpg",
        "images/apartamentos/apartamento_9/habitacion_3.jpg",
        "images/apartamentos/apartamento_9/bano_2.jpg",

        "images/apartamentos/apartamento_9/bano.jpg",
        "images/apartamentos/apartamento_9/bano_1.jpg",
        
    ],
    description: "Se vende excelente apartamento en Hogares de Soacha, conjunto residencial La Grandeza 4, ubicado en piso 6. Cuenta con 50 m², 3 habitaciones, 2 baños, sala-comedor, cocina y zona de lavandería. Estrato 3, parqueadero por sorteo. Ideal para familias que buscan comodidad y buena ubicación.",
    details: {
        building: { conjunto: "La Grandeza 4", estrato: "3", antiguedad: "N/A", piso: "6° piso", acceso: "Escaleras" },
        distribution: { area: "50 m²", habitaciones: "3", banos: "2", garajes: "Por sorteo", ascensores: "No" },
        features: { tipo: "Apartamento", gas: "Sí", parqueadero: "Comunal", porteria: "Sí", lavanderia: "Zona de lavandería", salonSocial: "Si", parqueInfantil: "Si", zonasVerdes: "Sí" }
    }
},
10:{
    title: "Apartamento en Aliso 1 - Venta Soacha piso 2",
    location: "Calle 15 #20-276, Soacha, Cundinamarca",
    price: "$150.000.000",
    badge: "Disponible",
    images: [
        "images/apartamentos/apartamento_10/sala_1.jpeg",
        "images/apartamentos/apartamento_10/sala_2.jpeg",

        "images/apartamentos/apartamento_10/cocina.jpg",
        "images/apartamentos/apartamento_10/lavadero.jpg",

        "images/apartamentos/apartamento_10/habitacion_1.jpeg",
        "images/apartamentos/apartamento_10/habitacion_2.jpeg",
        "images/apartamentos/apartamento_10/habitacion_3.jpeg",
        "images/apartamentos/apartamento_10/habitacion_4.jpeg",

        "images/apartamentos/apartamento_10/bano_1.jpeg",
        "images/apartamentos/apartamento_10/bano_2.jpeg",
        "images/apartamentos/apartamento_10/video.mp4"

    ],
    description: "Se vende apartamento en conjunto Aliso 1, ubicado en Soacha. Cuenta con 43.38 m², 2 habitaciones, 1 baño, sala-comedor, cocina y zona de lavandería. Ubicado en APT 202 Torre 16, con acceso por escaleras. Excelente opción para quienes buscan comodidad y buena ubicación a un precio competitivo.",
    details: {
        building: { conjunto: "Aliso 1", estrato: "3", antiguedad: "6 años", piso: "2", acceso: "Escaleras" },
        distribution: { area: "43.38 m²", habitaciones: "2", banos: "1", garajes: "Comunal", ascensores: "No" },
        features: { tipo: "Apartamento", gas: "Sí", parqueadero: "Comunal", porteria: "24 horas", lavanderia: "Sí", salonSocial: "Sí", parqueInfantil: "Sí", zonasVerdes: "Sí" }
    }
},
11:{
    title: "Apartamento en Capuchina - Venta Soacha piso 2",
    location: "Soacha, Cundinamarca",
    price: "$155.000.000",
    badge: "Disponible",
    images: [
        "images/apartamentos/apartamento_11/sala.jpg",
        "images/apartamentos/apartamento_11/cocina.jpg",
        "images/apartamentos/apartamento_11/pasillo.jpg",

        "images/apartamentos/apartamento_11/habitacion_1.jpg",
        "images/apartamentos/apartamento_11/habitacion_2.jpg",
        "images/apartamentos/apartamento_11/habitacion_3.jpg",
        "images/apartamentos/apartamento_11/habitacion_4.jpg",
        "images/apartamentos/apartamento_11/habitacion_5.jpg",
        "images/apartamentos/apartamento_11/habitacion_6.jpg",
        "images/apartamentos/apartamento_11/habitacion_7.jpg",

        "images/apartamentos/apartamento_11/bano_1.jpg",
        "images/apartamentos/apartamento_11/bano_2.jpg",

        "images/apartamentos/apartamento_11/fachada.jpg",
        "images/apartamentos/apartamento_11/entrada.jpg",

        "images/apartamentos/apartamento_11/video_1.mp4",
        "images/apartamentos/apartamento_11/video_2.mp4",
        "images/apartamentos/apartamento_11/video_3.mp4"
    ],
    description: "Se vende apartamento en conjunto Capuchina, ubicado en Soacha. Cuenta con 51 m², 3 habitaciones, 2 baños, sala-comedor, cocina y un pequeño estudio. Todas las habitaciones tienen clóset. El inmueble está totalmente terminado, se entrega pintado y listo para entrega inmediata. Excelente opción para vivienda o inversión.",
    details: {
        building: { conjunto: "Capuchina", estrato: "3", antiguedad: "No especificado", piso: "2", acceso: "Escaleras" },
        distribution: { area: "51 m²", habitaciones: "3", banos: "2", garajes: "Comunal", ascensores: "No" },
        features: { tipo: "Apartamento", gas: "Sí", parqueadero: "Comunal", porteria: "No especificado", lavanderia: "Sí", salonSocial: "No especificado", parqueInfantil: "No especificado", zonasVerdes: "No especificado" }
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

