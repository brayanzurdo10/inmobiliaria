// properties-data.js - Carga datos desde localStorage o usa datos por defecto
const defaultPropertyImages = {
    

4: {
    title: "Conjunto Palmeto - Apartamento Venta Ciudad Verde Soacha",
    location: "Ciudad Verde, Soacha, Cundinamarca",
    price: "$220.000.000",
    oldPrice: "$227.000.000",
    badge: "Reservado",
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
    },
    pagos: ["efectivo"]
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
    },
    pagos: ["efectivo", "hipotecario", "fna"]
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
    },
    pagos: ["efectivo", "hipotecario", "fna"]
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
    },
    pagos: ["efectivo"]
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
    },
    pagos: ["efectivo"]
},
9:{
    title: "Apartamento en La Grandeza 4 - Hogares de Soacha Piso 6",
    location: "Hogares de Soacha, Soacha, Cundinamarca",
price: "157.000.000",
    oldPrice: "$162.000.000",
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
    },
    pagos: ["efectivo", "hipotecario"]
},
10:{
    title: "Apartamento en Aliso 1 - Venta Soacha piso 2",
    location: "Calle 15 #20-276, Soacha, Cundinamarca",
price: "$150.000.000",
    oldPrice: "$155.000.000",
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
    },
    pagos: ["efectivo", "fna"]
},
11:{
    title: "Apartamento en Capuchina - Venta Soacha piso 2",
    location: "Soacha, Cundinamarca",
price: "$155.000.000",
    oldPrice: "$160.000.000",
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
        features: { tipo: "Apartamento", gas: "Sí", parqueadero: "Comunal", porteria: "No especificado", lavanderia: "Sí", salonSocial: "Sí", parqueInfantil: "Sí", zonasVerdes: "Sí" }
    },
    pagos: ["efectivo", "hipotecario"]
},
12:{
    title: "Apartamento en Azalea - Ciudad Verde | Venta Soacha piso 2",
    location: "Ciudad Verde, Soacha, Cundinamarca",
price: "$184.000.000",
    oldPrice: "$190.000.000",
    badge: "Disponible",
    images: [
        "images/apartamentos/apartamento_12/sala_1.jpg",
        "images/apartamentos/apartamento_12/sala_2.jpg",
        "images/apartamentos/apartamento_12/pasillo.jpg",

        "images/apartamentos/apartamento_12/cocina.jpg",

        "images/apartamentos/apartamento_12/habitacion_principal.jpg",
        "images/apartamentos/apartamento_12/habitacion_principal_2.jpg",
        "images/apartamentos/apartamento_12/habitacion_1.jpg",
        "images/apartamentos/apartamento_12/habitacion_2.jpg",
        "images/apartamentos/apartamento_12/habitacion_3.jpg",
        "images/apartamentos/apartamento_12/habitacion_4.jpg",
        "images/apartamentos/apartamento_12/habitacion_5.jpg",
        "images/apartamentos/apartamento_12/habitacion_6.jpg",
        "images/apartamentos/apartamento_12/habitacion_7.jpg",

        "images/apartamentos/apartamento_12/bano_1.jpg",
        "images/apartamentos/apartamento_12/bano_2.jpg",
        "images/apartamentos/apartamento_12/bano_3.jpg"
    ],
    description: "Se vende apartamento en conjunto Azalea, ubicado en Ciudad Verde, Soacha. Cuenta con 56 m², 3 habitaciones, 2 baños, sala comedor, cocina integral, sala de estar y zona de lavado. Piso en cerámica en todas sus áreas. Ubicado en segundo piso, Torre 4, con parqueadero comunal. Excelente opción para vivienda familiar por su amplitud y ubicación.",
    details: {
        building: { conjunto: "Azalea", estrato: "3", antiguedad: "No especificado", piso: "2", acceso: "Escaleras" },
        distribution: { area: "56 m²", habitaciones: "3", banos: "2", garajes: "Comunal", ascensores: "No" },
        features: { tipo: "Apartamento", gas: "Sí", parqueadero: "Comunal", porteria: "Sí", lavanderia: "Sí", salonSocial: "No especificado", parqueInfantil: "Sí", zonasVerdes: "Sí" }
    },
    pagos: ["efectivo", "hipotecario", "fna"]
},
13:{
    title: "Apartamento en Alhelí - Ciudad Verde | Venta Soacha piso 2",
    location: "Ciudad Verde, Soacha, Cundinamarca",
price: "$189.000.000",
    oldPrice: "$195.000.000",
    badge: "Disponible",
    images: [
        "images/apartamentos/apartamento_13/cocina_1.jpg",
        "images/apartamentos/apartamento_13/sala_1.jpg",
        
        
        "images/apartamentos/apartamento_13/cocina_2.jpg",
        "images/apartamentos/apartamento_13/cocina_lavadero.jpg",

        "images/apartamentos/apartamento_13/pasillo_1.jpg",
        "images/apartamentos/apartamento_13/pasillo_2.jpg",

        "images/apartamentos/apartamento_13/habitacion_principal.jpg",
        "images/apartamentos/apartamento_13/habitacion_principal_2.jpg",
        "images/apartamentos/apartamento_13/habitacion_1.jpg",
        "images/apartamentos/apartamento_13/habitacion_2.jpg",
        "images/apartamentos/apartamento_13/habitacion_3.jpg",
        "images/apartamentos/apartamento_13/habitacion_4.jpg",
        "images/apartamentos/apartamento_13/habitacion_5.jpg",

        "images/apartamentos/apartamento_13/bano_1.jpg",
        "images/apartamentos/apartamento_13/bano_2.jpg"
    ],
    description: "Se vende apartamento en conjunto Alhelí, ubicado en Ciudad Verde, Soacha. Cuenta con 56 m², 3 habitaciones, 2 baños, sala comedor, cocina integral y zona de circulación amplia. El inmueble está remodelado, con pisos en cerámica en todas sus áreas y excelente estado. Ubicado en segundo piso con vista interior y parqueadero comunal. Excelente opción para vivienda familiar.",
    details: {
        building: { conjunto: "Alhelí", estrato: "3", antiguedad: "No especificado", piso: "2", acceso: "Escaleras" },
        distribution: { area: "56 m²", habitaciones: "3", banos: "2", garajes: "Comunal", ascensores: "No" },
        features: { tipo: "Apartamento", gas: "Sí", parqueadero: "Comunal", porteria: "Sí", lavanderia: "Sí", salonSocial: "No especificado", parqueInfantil: "Sí", zonasVerdes: "Sí" }
    },
    pagos: ["efectivo", "hipotecario", "fna"]
},
14:{
    title: "Apartamento en Verónica - Ciudad Verde | Venta Soacha piso 5",
    location: "Ciudad Verde, Soacha, Cundinamarca",
price: "$153.000.000",
    oldPrice: "$158.000.000",
    badge: "Disponible",
    images: [
        "images/apartamentos/apartamento_14/sala_1.jpg",
        "images/apartamentos/apartamento_14/sala_2.jpg",
        "images/apartamentos/apartamento_14/sala_3.jpg",
        "images/apartamentos/apartamento_14/sala_4.jpg",
        "images/apartamentos/apartamento_14/cocina.jpg",
        "images/apartamentos/apartamento_14/habitacion_1.jpg",
        "images/apartamentos/apartamento_14/habitacion_2.jpg",
        "images/apartamentos/apartamento_14/habitacion_3.jpg",
        "images/apartamentos/apartamento_14/habitacion_4.jpg",
        "images/apartamentos/apartamento_14/bano_principal_1.jpg",
        "images/apartamentos/apartamento_14/bano_principal_ducha.jpg",
        "images/apartamentos/apartamento_14/bano_2_ducha_2.jpg",
        "images/apartamentos/apartamento_14/bano_2_ducha.jpg"

    ],
    description: "Se vende hermoso apartamento remodelado en conjunto Verónica, ubicado en Ciudad Verde, Soacha. Cuenta con 43 m², 3 habitaciones, 1 baño, sala comedor, cocina y zona de lavandería. El inmueble tiene acabados de lujo y se encuentra en excelente estado. Ubicado en quinto piso con acceso por escaleras. No aplica para crédito hipotecario, solo pago en efectivo.",
    details: {
        building: { conjunto: "Verónica", estrato: "3", antiguedad: "No especificado", piso: "5", acceso: "Escaleras" },
        distribution: { area: "43 m²", habitaciones: "3", banos: "1", garajes: "Comunal", ascensores: "No" },
        features: { tipo: "Apartamento", gas: "Sí", parqueadero: "Comunal", porteria: "Sí", lavanderia: "Sí", salonSocial: "No especificado", parqueInfantil: "Sí", zonasVerdes: "Sí" }
    },
    pagos: ["efectivo", "hipotecario", "fna"]
},
15:{
    title: "Casa en Bosa Porvenir - Alameda del Portal 3 Pisos Esquinera",
    location: "Bosa Porvenir, Bogotá, Colombia",
price: "$140.000.000",
    oldPrice: "$145.000.000",
    badge: "Negociable",
    images: [
        "images/apartamentos/apartamento_15/fachada.jpg",
        "images/apartamentos/apartamento_15/sala_comedor.jpg",
        "images/apartamentos/apartamento_15/habitacion_1.jpg",
        "images/apartamentos/apartamento_15/bano_1.jpg",
        "images/apartamentos/apartamento_15/bano_ducha.jpg",
        "images/apartamentos/apartamento_15/video.mp4",
    ],
    description: "Se vende casa esquinera de 3 pisos en Bosa Porvenir, conjunto Alameda del Portal. Cuenta con 44.80 m² construidos, excelente distribución y posibilidad de ampliación a un 4° piso. En el primer nivel dispone de sala-comedor y cocina; en el segundo nivel habitación principal y baño; en el tercer nivel zona de ropas y una habitación adicional. Ideal para quienes buscan una vivienda con potencial de ampliación, buena ubicación y precio negociable. Papeles al día, lista para escriturar. Se acepta pago en efectivo o crédito.",
    details: {
        building: { conjunto: "Alameda del Portal", estrato: "N/A", antiguedad: "N/A", piso: "Casa de 3 pisos", acceso: "Escaleras" },
        distribution: { area: "44.80 m²", habitaciones: "2", banos: "1", garajes: "No especificado", ascensores: "No aplica" },
        features: { tipo: "Casa", gas: "Sí", parqueadero: "No especificado", porteria: "No especificado", lavanderia: "Zona de ropas", salonSocial: "No", parqueInfantil: "No especificado", zonasVerdes: "Sí", ampliacion: "Posibilidad de 4° piso" }
    },
    pagos: ["efectivo", "hipotecario"]
},
16:{
    title: "Casa en Bosa Recreo - Remodelada con Terraza",
    location: "Bosa Recreo, Bogotá, Colombia",
price: "$132.000.000",
    oldPrice: "$137.000.000",
    badge: "Negociable",
    images: [
        "images/apartamentos/apartamento_16/apartamento_16_fachada_principal.jpg",
        "images/apartamentos/apartamento_16/apartamento_16_fachada_entrada.jpg",

        "images/apartamentos/apartamento_16/apartamento_16_sala_entrada.jpg",
        "images/apartamentos/apartamento_16/apartamento_16_sala_comedor.jpg",

        "images/apartamentos/apartamento_16/apartamento_16_cocina_1.jpg",
        "images/apartamentos/apartamento_16/apartamento_16_cocina_2.jpg",

        "images/apartamentos/apartamento_16/apartamento_16_habitacion_1_a.jpg",
        "images/apartamentos/apartamento_16/apartamento_16_habitacion_1_b.jpg",
        "images/apartamentos/apartamento_16/apartamento_16_habitacion_2_a.jpg",
        "images/apartamentos/apartamento_16/apartamento_16_habitacion_2_b.jpg",
        "images/apartamentos/apartamento_16/apartamento_16_habitacion_2_c.jpg",
        "images/apartamentos/apartamento_16/apartamento_16_bano_1.jpg",
        "images/apartamentos/apartamento_16/apartamento_16_bano_ducha.jpg",

        "images/apartamentos/apartamento_16/apartamento_16_zona_lavanderia_1.jpg",
        "images/apartamentos/apartamento_16/apartamento_16_zona_lavanderia_2.jpg",
        "images/apartamentos/apartamento_16/apartamento_16_zona_lavanderia_3.jpg",

        "images/apartamentos/apartamento_16/apartamento_16_escalera_interior.jpg",
        "images/apartamentos/apartamento_16/apartamento_16_escalera_plantas.jpg",
        "images/apartamentos/apartamento_16/apartamento_16_video_recorrido.mp4"
        ],
    description: "Se vende espectacular casa en Bosa Recreo, completamente remodelada. Cuenta con medidas de 3x6 metros, excelente distribución y acabados modernos. Dispone de 2 habitaciones, 1 baño, sala-comedor amplia, cocina integral, espacio para segundo baño y terraza. Ubicada cerca al Mega Hospital de Bosa, en una zona de alta valorización. Ideal para quienes buscan comodidad, inversión y una vivienda lista para habitar. Precio negociable.",
    details: {
        building: { conjunto: "N/A", estrato: "N/A", antiguedad: "N/A", piso: "Casa", acceso: "Escaleras" },
        distribution: { area: "18 m² por piso aprox", habitaciones: "2", banos: "1 (opción segundo)", garajes: "No especificado", ascensores: "No aplica" },
        features: { tipo: "Casa", gas: "Sí", parqueadero: "No especificado", porteria: "No", lavanderia: "Zona de lavandería", salonSocial: "No", parqueInfantil: "No especificado", zonasVerdes: "Sí", terraza: "Sí", remodelado: "Sí" }
    },
    pagos: ["efectivo"]
},
17: {
    title: "Casa en Venta Tierra Buena Soacha Parque Campestre",
    location: "Tierra Buena, Soacha, Cundinamarca",
price: "$145.000.000 - $150.000.000",
    oldPrice: "$150.000.000 - $155.000.000",
    badge: "Disponible",
    images: [
        "images/apartamentos/apartamento_17/fachada_principal.jpg",
        "images/apartamentos/apartamento_17/fachada_entrada.jpg",
        "images/apartamentos/apartamento_17/fachada_lateral.jpg",

        "images/apartamentos/apartamento_17/sala_a.jpg",
        "images/apartamentos/apartamento_17/sala_b.jpg",

        "images/apartamentos/apartamento_17/cocina.jpg",

        "images/apartamentos/apartamento_17/habitacion_1_a.jpg",
        "images/apartamentos/apartamento_17/habitacion_1_b.jpg",
        "images/apartamentos/apartamento_17/habitacion_2_a.jpg",
        "images/apartamentos/apartamento_17/habitacion_2_b.jpg",
        "images/apartamentos/apartamento_17/habitacion_2_c.jpg",
        "images/apartamentos/apartamento_17/habitacion_3_a.jpg",
        "images/apartamentos/apartamento_17/habitacion_3_b.jpg",
        "images/apartamentos/apartamento_17/habitacion_3_c.jpg",

        "images/apartamentos/apartamento_17/bano_1.jpg",
        "images/apartamentos/apartamento_17/bano_lavamanos.jpg",

        "images/apartamentos/apartamento_17/zona_lavanderia.jpg",

        "images/apartamentos/apartamento_17/escalera_1.jpg",
        "images/apartamentos/apartamento_17/escalera_2.jpg",
        "images/apartamentos/apartamento_17/cuarto_deposito.jpg",
        "images/apartamentos/apartamento_17/video.mp4"
    ],
    description: "Se vende casa en Tierra Buena Soacha Parque Campestre. Cuenta con 72 m² construidos (3x8), distribuida en 3 pisos, 3 habitaciones con clóset, 2 baños, sala comedor, cocina integral y patio. Precio de $145.000.000 en efectivo o $150.000.000 con banco. Información: 3028492570.",
    details: {
        building: { conjunto: "Parque Campestre", estrato: "3", antiguedad: "No especificado", piso: "Casa 3 niveles", acceso: "Escaleras" },
        distribution: { area: "72 m²", habitaciones: "3", banos: "2", garajes: "No especificado", ascensores: "No aplica" },
        features: { tipo: "Casa", gas: "Sí", parqueadero: "No especificado", porteria: "No especificado", lavanderia: "Sí", salonSocial: "No", parqueInfantil: "Sí", zonasVerdes: "Sí", patio: "Sí" }
    },
    pagos: ["efectivo", "hipotecario"]
},
18: {
    title: "Casa en Venta Bosa Olivos 2 - Frente a Parque Tibanica",
    location: "Bosa Olivos 2, Bogotá, Colombia",
price: "$170.000.000",
    oldPrice: "$175.000.000",
    badge: "Negociable",
    images: [
        "images/apartamentos/apartamento_18/escalera_1.jpg",
        "images/apartamentos/apartamento_18/bano_1.jpg",
        "images/apartamentos/apartamento_18/bano_2.jpg",
        "images/apartamentos/apartamento_18/bano_ducha.jpg",

        "images/apartamentos/apartamento_18/cocina.jpg",
        "images/apartamentos/apartamento_18/cocina_lavanderia.jpg",

        "images/apartamentos/apartamento_18/cuarto_deposito.jpg",
        "images/apartamentos/apartamento_18/escalera_2.jpg",

        "images/apartamentos/apartamento_18/habitacion_1_a.jpg",
        "images/apartamentos/apartamento_18/habitacion_1_b.jpg",
        "images/apartamentos/apartamento_18/habitacion_2_a.jpg",
        "images/apartamentos/apartamento_18/habitacion_2_b.jpg",
        "images/apartamentos/apartamento_18/habitacion_3_a.jpg",
        "images/apartamentos/apartamento_18/habitacion_3_b.jpg",
        "images/apartamentos/apartamento_18/habitacion_3_c.jpg",
        "images/apartamentos/apartamento_18/habitacion_3_d.jpg",
        "images/apartamentos/apartamento_18/habitacion_3_e.jpg",

        "images/apartamentos/apartamento_18/pasillo.jpg",
        "images/apartamentos/apartamento_18/piso_detalle.jpg",
        "images/apartamentos/apartamento_18/zona_lavanderia.jpg",
        "images/apartamentos/apartamento_18/zona_video.mp4"
    ],
    description: "Se vende casa en Bosa Olivos 2 frente al Parque Tibanica. Cuenta con un área de 6x6 metros distribuidos en 3 pisos, ideal para inversión por su potencial rentable. En el primer piso dispone de 2 habitaciones, sala o comedor, baño y cocina con gas natural. El segundo piso cuenta con 3 habitaciones, un baño amplio, cocina y zona de lavadero. El tercer piso tiene 2 habitaciones, baño, sala-comedor, cocina y zona de lavado. Precio $170.000.000 negociables.",
    details: {
        building: { conjunto: "N/A", estrato: "2-3", antiguedad: "No especificado", piso: "Casa 3 niveles", acceso: "Escaleras" },
        distribution: { area: "36 m² por piso aprox (6x6)", habitaciones: "7", banos: "3", garajes: "No especificado", ascensores: "No aplica" },
        features: { tipo: "Casa", gas: "Sí", parqueadero: "No especificado", porteria: "No", lavanderia: "Sí", salonSocial: "No", parqueInfantil: "Sí (Parque Tibanica)", zonasVerdes: "Sí", rentable: "Sí" }
    },
    pagos: ["efectivo"]
},
19: {
    title: "Apartamento en Venta Conjunto Verónica - Ciudad Verde",
    location: "Ciudad Verde, Soacha, Cundinamarca",
    price: "$133.000.000",
    badge: "Disponible",
    images: [
        "images/apartamentos/apartamento_19/sala_1.jpg",
        "images/apartamentos/apartamento_19/sala_2.jpg",

        "images/apartamentos/apartamento_19/cocina_1.jpg",
        "images/apartamentos/apartamento_19/cocina_2.jpg",

        "images/apartamentos/apartamento_19/corredor.jpg",

        "images/apartamentos/apartamento_19/habitacion_1.jpg",
        "images/apartamentos/apartamento_19/habitacion_2.jpg",
        "images/apartamentos/apartamento_19/habitacion_3.jpg",
        "images/apartamentos/apartamento_19/habitacion_4.jpg",
        "images/apartamentos/apartamento_19/habitacion_5.jpg",
        "images/apartamentos/apartamento_19/habitacion_6.jpg",

        "images/apartamentos/apartamento_19/bano_1.jpg",

        "images/apartamentos/apartamento_19/vista_exterior.jpg"
    ],
    description: "Espectacular apartamento ubicado en el conjunto Verónica en Ciudad Verde. Cuenta con amplios espacios, excelente iluminación natural, varias habitaciones, 1 baño, sala comedor, cocina integral y una hermosa vista exterior. Ubicado en piso 6 con excelente distribución interna, ideal para familias que buscan comodidad y buena ubicación. Dispone de parqueadero comunal y cercanía a centros comerciales como Miraflores y Prado Verde. Se recibe pago en efectivo, crédito con todos los bancos y Fondo Nacional del Ahorro.",
    details: {
        building: {
            conjunto: "Verónica",
            estrato: "3",
            antiguedad: "No especificado",
            piso: "6",
            acceso: "Escaleras"
        },
        distribution: {
            area: "44 m²",
            habitaciones: "3",
            banos: "1",
            garajes: "Comunal",
            ascensores: "No especificado"
        },
        features: {
            tipo: "Apartamento",
            gas: "Sí",
            parqueadero: "Comunal",
            porteria: "Sí",
            lavanderia: "Sí",
            salonSocial: "No especificado",
            parqueInfantil: "Sí",
            zonasVerdes: "Sí",
            remodelado: "Sí",
            pisos: "Cerámica y laminados"
        }
    },
    pagos: ["efectivo", "hipotecario", "fna"]
},

20: {
    title: "Casa en Venta Usme Pueblo - Conjunto Residencial El Sol",
    location: "Usme Pueblo, Bogotá, Colombia",
    price: "$175.000.000",
    badge: "Disponible",
    images: [
        "images/apartamentos/apartamento_20/sala_1.jpg",
        "images/apartamentos/apartamento_20/sala_2.jpg",

        "images/apartamentos/apartamento_20/cocina.jpg",

        "images/apartamentos/apartamento_20/habitacion_1.jpg",
        "images/apartamentos/apartamento_20/habitacion_2.jpg",
        "images/apartamentos/apartamento_20/habitacion_3.jpg",
        "images/apartamentos/apartamento_20/habitacion_4.jpg",
        "images/apartamentos/apartamento_20/habitacion_5.jpg",

        "images/apartamentos/apartamento_20/bano_1.jpg",
        "images/apartamentos/apartamento_20/bano_2.jpg",

        "images/apartamentos/apartamento_20/deposito.jpg"
    ],
    description: "Hermosa casa ubicada en Usme Pueblo, conjunto residencial El Sol. Cuenta con 4 habitaciones, 2 cocinas integrales, 2 baños, sala comedor y sala de estar. Pisos en cerámica en todas sus áreas y documentos al día. Excelente opción de inversión por su potencial rentable, ubicada en sector principal con fácil acceso a transporte. Se recibe pago en efectivo, crédito con todos los bancos y Fondo Nacional del Ahorro.",
    details: {
        building: { conjunto: "El Sol", estrato: "No especificado", antiguedad: "No especificado", piso: "Casa", acceso: "Escaleras" },
        distribution: { area: "No especificado", habitaciones: "4", banos: "2", garajes: "No especificado", ascensores: "No aplica" },
        features: { tipo: "Casa", gas: "Sí", parqueadero: "No especificado", porteria: "Sí", lavanderia: "Sí", salonSocial: "No especificado", parqueInfantil: "Sí", zonasVerdes: "Sí", rentable: "Sí", pisos: "Cerámica" }
    },
    pagos: ["efectivo", "hipotecario", "fna"]
},
21: {
    title: "Apartamento de Lujo en Conjunto Abundará la Prosperidad",
    location: "Bogotá, Colombia",
    price: "$297.000.000",
    badge: "Disponible",
    images: [
        // Sala
        "images/apartamentos/apartamento_21/sala_3.jpg",
        "images/apartamentos/apartamento_21/sala_1.jpg",
        "images/apartamentos/apartamento_21/sala_2.jpg",
        
        "images/apartamentos/apartamento_21/sala_lampara.jpg",

        // Cocina
        "images/apartamentos/apartamento_21/cocina_1.jpg",
        "images/apartamentos/apartamento_21/cocina_2.jpg",
        "images/apartamentos/apartamento_21/cocina_3.jpg",

        // Habitaciones
        "images/apartamentos/apartamento_21/habitacion_1.jpg",
        "images/apartamentos/apartamento_21/habitacion_2.jpg",
        "images/apartamentos/apartamento_21/habitacion_3.jpg",

        // Baños
        "images/apartamentos/apartamento_21/bano_1.jpg",
        "images/apartamentos/apartamento_21/bano_2.jpg",
        "images/apartamentos/apartamento_21/bano_3.jpg",
        "images/apartamentos/apartamento_21/bano_4.jpg",

        // Jacuzzi / Spa
        "images/apartamentos/apartamento_21/jacuzzi_1.jpg",
        "images/apartamentos/apartamento_21/jacuzzi_2.jpg",
        "images/apartamentos/apartamento_21/jacuzzi_3.jpg",
        "images/apartamentos/apartamento_21/jacuzzi_4.jpg",

        // Terraza
        "images/apartamentos/apartamento_21/terraza_asador_jacuzzi.jpg",
        "images/apartamentos/apartamento_21/terraza_jacuzzi_2.jpg",

        // Extras
        "images/apartamentos/apartamento_21/deposito.jpg",

        // Zonas comunes
        "images/apartamentos/apartamento_21/zona_comun_lobby_1.jpg",
        "images/apartamentos/apartamento_21/zona_comun_lobby_2.jpg",
        "images/apartamentos/apartamento_21/zona_comun_gimnasio_1.jpg",
        "images/apartamentos/apartamento_21/zona_comun_gimnasio_2.jpg",
        "images/apartamentos/apartamento_21/zona_comun_gimnasio_3.jpg",
        "images/apartamentos/apartamento_21/zona_comun_piscina_1.jpg",
        "images/apartamentos/apartamento_21/zona_comun_piscina_2.jpg",
        "images/apartamentos/apartamento_21/zona_comun_parque_agua.jpg",
        "images/apartamentos/apartamento_21/zona_comun_parque_agua_2.jpg",
        "images/apartamentos/apartamento_21/zona_comun_parque_mascotas.jpg",
        "images/apartamentos/apartamento_21/zona_comun_salon_eventos.jpg",
        "images/apartamentos/apartamento_21/zona_comun_salon_ninos.jpg",
        "images/apartamentos/apartamento_21/zona_comun_cancha.jpg",
        "images/apartamentos/apartamento_21/video.mp4"
    ],
    description: "Se vende lujoso apartamento en el conjunto Abundará la Prosperidad. Cuenta con 67 m², ubicado en primer piso con ascensor. Dispone de 3 habitaciones, 2 amplios baños, balcón, cocina integral independiente con barra americana, patio de ropas independiente y zona BBQ privada. Incluye un exclusivo cuarto spa dentro del apartamento con tina/jacuzzi. Ubicado en estrato 4, ideal para quienes buscan confort, lujo y excelente valorización.",
    details: {
        building: { conjunto: "Abundará la Prosperidad", estrato: "4", antiguedad: "No especificado", piso: "1", acceso: "Ascensor" },
        distribution: { area: "67 m²", habitaciones: "3", banos: "2", garajes: "No especificado", ascensores: "Sí" },
        features: { 
            tipo: "Apartamento", 
            gas: "Sí", 
            parqueadero: "No especificado", 
            porteria: "Sí", 
            lavanderia: "Independiente", 
            salonSocial: "Sí", 
            parqueInfantil: "Sí", 
            zonasVerdes: "Sí", 
            balcon: "Sí", 
            bbq: "Sí", 
            jacuzzi: "Sí", 
            spa: "Sí" 
        }
    },
    pagos: ["efectivo", "hipotecario", "fna"]
},
22: {
    title: "Apartamento Remodelado en Parque Campestre Etapa 3 - Soacha",
    location: "Parque Campestre Etapa 3, Soacha, Cundinamarca",
    price: "$149.000.000",
    badge: "Negociable",
    images: [
        "images/apartamentos/apartamento_22/b2_sala_1.jpg",
        "images/apartamentos/apartamento_22/b2_sala_2.jpg",
        "images/apartamentos/apartamento_22/b2_sala_cocina.jpg",

        "images/apartamentos/apartamento_22/b2_cocina_1.jpg",
        "images/apartamentos/apartamento_22/b2_cocina_2.jpg",
        "images/apartamentos/apartamento_22/b2_cocina_3.jpg",

        "images/apartamentos/apartamento_22/b2_habitacion_1.jpg",
        "images/apartamentos/apartamento_22/b2_habitacion_2.jpg",
        "images/apartamentos/apartamento_22/b2_habitacion_3.jpg",
        "images/apartamentos/apartamento_22/b2_habitacion_4.jpg",
        "images/apartamentos/apartamento_22/b2_habitacion_5.jpg",

        "images/apartamentos/apartamento_22/b2_bano_1.jpg",
        "images/apartamentos/apartamento_22/b2_bano_2.jpg",
        "images/apartamentos/apartamento_22/b2_bano_3.jpg",
        "images/apartamentos/apartamento_22/b2_bano_4.jpg",

        "images/apartamentos/apartamento_22/b2_corredor.jpg",
        "images/apartamentos/apartamento_22/b2_vista_jardin.jpg",

        "images/apartamentos/apartamento_22/b2_lobby_1.jpg",
        "images/apartamentos/apartamento_22/b2_lobby_2.jpg",
        "images/apartamentos/apartamento_22/b2_lobby_3.jpg"
    ],
    description: "¡Oportunidad única! Se vende apartamento totalmente remodelado en Parque Campestre Etapa 3, Soacha. Cuenta con 48,22 m², 3 habitaciones, 2 baños, cocina integral nueva y sala-comedor con excelente distribución. Ubicado en piso 4 (sin ascensor) con vista panorámica e iluminación natural. Parqueadero comunal. Conjunto con vigilancia 24/7, zonas verdes y entrada renovada. Libre de deudas, listo para escriturar de inmediato. Ideal para quienes buscan comprar sin invertir en remodelaciones.",
    details: {
        building: { conjunto: "Parque Campestre Etapa 3", estrato: "3", antiguedad: "No especificado", piso: "4", acceso: "Escaleras" },
        distribution: { area: "48,22 m²", habitaciones: "3", banos: "2", garajes: "Comunal", ascensores: "No" },
        features: { tipo: "Apartamento", gas: "Sí", parqueadero: "Comunal", porteria: "24 horas", lavanderia: "Sí", salonSocial: "No especificado", parqueInfantil: "Sí", zonasVerdes: "Sí", remodelado: "Sí", iluminacion: "Alta" }
    },
    pagos: ["efectivo", "hipotecario", "fna"]
},
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

