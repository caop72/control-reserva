const ubicaciones = {
  "Amazonas": [
    { municipio: "Alto Orinoco", sitio: "Polideportivo Antonio José de Sucre", direccion: "M99J+8M7, Troncal 12, Puerto Ayacucho 7101, Amazonas" },
    { municipio: "Atabapo", sitio: "Estadio Ramón Iribertegui", direccion: "28V2+GJX, San Fernando de Atabapo 7101, Amazonas" },
    { municipio: "Atures", sitio: "Estadio Humberto Perez Morillo", direccion: "MC87+3MM, Puerto Ayacucho 7101, Amazonas" },
    { municipio: "Autana", sitio: "Estación de Servicio Samariapo", direccion: "6692+655, Samariapo 7101, Amazonas" },
    { municipio: "Manapiare", sitio: "Aeródromo de San Juan De Manapiare", direccion: "8X92+M7R, San Juan de Manapiare 7101, Amazonas" },
    { municipio: "Maroa", sitio: "Cancha de Maroa", direccion: "PC9R+M3, San Miguel 7101, Amazonas" },
    { municipio: "Río Negro", sitio: "Estadio Municipal San Carlos de Borromeo", direccion: "de, Torre de Control RADAR RÍO NEGRO, Sector Arenal, San Carlos de Río Negro 7101, Amazonas" }
  ],
  "Anzoátegui": [
    { municipio: "Anaco", sitio: "Estadio Florencio Macayo", direccion: "CG99+RQG, C. Sucre, Anaco 6003, Anzoátegui" },
    { municipio: "Aragua", sitio: "Estadio Aragua de Barcelona", direccion: "F59Q+WM3, Aragua de Barcelona 6002, Anzoátegui" },
    { municipio: "Bolívar", sitio: "Complejo Polideportivo Libertador Simón Bolívar", direccion: "58JV+H2F, Puerto La Cruz 6001, Anzoátegui" },
    { municipio: "Bruzual", sitio: "Estadio Remigio Camero", direccion: "WRPJ+JHH, Clarines 6008, Anzoátegui" },
    { municipio: "Cajigal", sitio: "Estadio en Onoto", direccion: "JR37+7CF, Troncal 14, Onoto 6020, Anzoátegui" },
    { municipio: "Carvajal", sitio: "Estadio de Beisbol", direccion: "San Mateo 6048, Anzoátegui" },
    { municipio: "Diego Bautista Urbaneja", sitio: "Estadio Pancho Alegria", direccion: "58HV+94F, Puerto La Cruz 6001, Anzoátegui" },
    { municipio: "Independencia", sitio: "Estadio Monumental José Antonio Anzoátegui", direccion: "Av. Intercomunal Jorge Rodríguez, Puerto La Cruz 6001, Anzoátegui" },
    { municipio: "Freites", sitio: "Polideportivo Griselda Palacios", direccion: "7MX2+P87, Cantaura 6007, Anzoátegui" },
    { municipio: "Guanipa", sitio: "Estadio de Beisbol Jose 'Joche' Boada", direccion: "VRRH+6R5, San José de Guanipa 6054, Anzoátegui" },
    { municipio: "Guanta", sitio: "Estadio Jesús Rizales", direccion: "6CP3+J8Q, Guanta 6014, Anzoátegui" },
    { municipio: "Libertad", sitio: "Campo de béisbol Carmen Tabare", direccion: "PCQV+6WC, San Mateo 6048, Anzoátegui" },
    { municipio: "McGregor", sitio: "Polideportivo La Peñita", direccion: "5CFQ+F4W, Principal, Cdad. Orinoco 8013, Anzoátegui" },
    { municipio: "Miranda", sitio: "Polideportivo Rafael Vidal", direccion: "Polideportivo Rafael Vidal, Av. Principal de La Trinidad, Caracas 1080, Miranda" },
    { municipio: "Monagas", sitio: "Polideportivo de Maturín", direccion: "PRXM+6CG, Av. Raul Leoni, Maturín 6201, Monagas" },
    { municipio: "Peñalver", sitio: "Estadio Antonio Armas", direccion: "3X39+3VG, Av. José Antonio Anzoátegui, Puerto Píritu 6022, Anzoátegui" },
    { municipio: "Píritu", sitio: "Estadio de Santa Barbara", direccion: "2XH9+4MQ, Puerto Píritu 6022, Anzoátegui" },
    { municipio: "San Juan de Capistrano", sitio: "Estadio Principal 'Miguel Cacho Guevara'", direccion: "4HHF+G8M, Sector Casco Central Historico Calle Las Flores Diagonal a la Concha Custica, Boca de Uchire 6005, Anzoátegui" },
    { municipio: "Santa Ana", sitio: "Estadio Municipal Rigoberto Salazár", direccion: "885V+H45, C. 23 de Enero, Santa Ana 6027, Anzoátegui" },
    { municipio: "Simón Rodríguez", sitio: "Estadio de Béisbol Menor Pedro Emilio Rojas", direccion: "VPQQ+VX4, El Tigre 6050, Anzoátegui" },
    { municipio: "Sotillo", sitio: "Estadio Alfonso 'Chico' Carrasquel", direccion: "6949+8J5, Avenida Stadium, Puerto La Cruz 6023, Anzoátegui" }
  ],

  "Apure": [
    { municipio: "Achaguas", sitio: "Estadio 'Cesar Alexis Vargas'", direccion: "QQHG+MQM, Achaguas 7002, Apure" },
    { municipio: "Biruaca", sitio: "Estadio Juan Porrello", direccion: "Juan Porrelo, La Palmita 7007, Apure" },
    { municipio: "Muñoz", sitio: "Estadio Cozme Gutierrez", direccion: "HV64+HJM, Mantecal 7010, Apure" },
    { municipio: "José Antonio Páez", sitio: "Estadio Jose Rigoberto Neiva 'Morrones'", direccion: "772H+83F, C. Cedeño, Guasdualito 5063, Apure" },
    { municipio: "Pedro Camejo", sitio: "Campo de Béisbol", direccion: "J9RR+CCV, San Juan de Payara 7004, Apure" },
    { municipio: "Rómulo Gallegos", sitio: "Polideportivo Candelario Morales", direccion: "3G72+CXP, Elorza 7011, Apure" }
  ]

  "Aragua": [
    { municipio: "Bolívar", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Francisco Linares Alcántara", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Girardot", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "José Angel Lamas", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "José Félix Ribas", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "José Rafael Revenga", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Libertador", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Mario Briceño Iragorry", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Santiago Mariño", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Sucre", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Tovar", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Zamora", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Camatagua", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Ocumare de la Costa de Oro", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San Casimiro", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San Sebastián", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Santos Michelena", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Urdaneta", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Barinas": [
    { municipio: "Barinas", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Alberto Arvelo Torrealba", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Antonio José de Sucre", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Arismendi", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Bolívar", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Cruz Paredes", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Ezequiel Zamora", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Obispos", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Pedraza", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Rojas", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Sosa", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Bolívar": [
    { municipio: "Angostura (Ciudad Bolívar)", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Caroní (Ciudad Guayana)", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Cedeño (Caicara del Orinoco)", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "El Callao", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Gran Sabana (Santa Elena de Uairén)", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Heres (Ciudad Bolívar)", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Piar (Upata)", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Roscio (Guasipati)", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Sifontes (Tumeremo)", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Sucre (Maripa)", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Carabobo": [
    { municipio: "Bejuma", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Carlos Arvelo", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Diego Ibarra", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Guacara", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Juan José Mora", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Libertador", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Los Guayos", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Miranda", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Montalbán", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Naguanagua", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Puerto Cabello", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San Diego", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San Joaquín", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Valencia", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Cojedes": [
    { municipio: "Anzoátegui", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "El Pao de San Juan Bautista", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Falcón", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Girardot", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Lima Blanco", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Ricaurte", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Rómulo Gallegos", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San Carlos", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Tinaco", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Delta Amacuro": [
    { municipio: "Antonio Díaz", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Casacoima", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Pedernales", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Tucupita", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Distrito Capital": [
    { municipio: "Libertador", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Chacao", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Baruta", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Sucre", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "El Hatillo", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Falcón": [
    { municipio: "Acosta", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Bolívar", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Buchivacoa", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Cocorote", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Democracia", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Federación", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Jacura", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Los Taques", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Miranda", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Monseñor Iturriza", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Petit", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San Francisco", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Silva", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Sucre", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Unión", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Guárico": [
    { municipio: "Camatagua", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Chaguaramas", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "El Socorro", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Francisco de Miranda", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "José Félix Ribas", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Las Mercedes", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Leonardo Infante", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Ortiz", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San Gerónimo de Guayabal", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San José de Guaribe", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Santa María de Ipire", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Lara": [
    { municipio: "Andrés Eloy Blanco", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Crespo", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Iribarren", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Jiménez", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Morán", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Palavecino", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Simón Planas", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Torres", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Urdaneta", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Mérida": [
    { municipio: "Alberto Adriani", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Andrés Bello", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Antonio Pinto Salinas", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Aricagua", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Campo Elías", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Caracciolo Parra Olmedo", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Guaraque", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Julio César Salas", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Libertador", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Miranda", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Obispo Ramos Lora", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Pueblo Llano", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Rangel", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Rivas Dávila", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Santos Marquina", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Sucre", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Tovar", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Miranda": [
    { municipio: "Acevedo", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Andrés Bello", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Baruta", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Brión", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Bolívar", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Buroz", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Carrizal", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Chacao", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Cristóbal Rojas", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "El Hatillo", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Guaicaipuro", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Gual", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Independencia", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Lander", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Los Salias", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Páez", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Paz Castillo", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Plaza", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Sucre", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Urdaneta", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Zamora", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Monagas": [
    { municipio: "Aguasay", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Acosta", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Bolívar", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Caripito", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Colón", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Everetts", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Guácaras", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Maturín", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Miranda", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Punta de Mata", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Nueva Esparta": [
    { municipio: "Antolín del Campo", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Díaz", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "García", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Marano", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Mariño", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Peninsula de Macanao", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Arismendi (Isla de Margarita)", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Portuguesa": [
    { municipio: "Araure", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Bispo Sotero", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Esteller", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Guanarito", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Independencia", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "José Vicente", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "La Trinidad", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Manuel Monge", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Paez", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San Genaro de Boconoito", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San Rafael de Onoto", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Sucre", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Turén", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Sucre": [
    { municipio: "Casanay", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Araya", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Cruz Salmerón Acosta", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Cariaco", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Ribero", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Carúpano", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Bermúdez", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Andrés Eloy Blanco", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Cumaná", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Sucre", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Cumanacoa", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Montes", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "El Pilar", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Benítez", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Güiria", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Valdez", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Irapa", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Mariño", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Marigüitar", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Bolívar", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Río Caribe", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Arismendi", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San Antonio del Golfo", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Mejía", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San José de Areocuar", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Andrés Mata", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Tunapuy", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Libertador", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Yaguaraparo", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Cajigal", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Táchira": [
    { municipio: "Andrés Bello", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Antonio Rómulo Costa", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Ayacucho", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Benítez", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Bolívar", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Carache", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Colón", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Cordobés", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Francisco de Miranda", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "García de Hevia", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Guásimos", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Independencia", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Junín", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "La Pantalla", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Libertad", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Michelena", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Panamericano", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Pedro María Ureña", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San Cristóbal", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San Judas Tadeo", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Seboruco", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Santa Ana", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Santos Marquina", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Trujillo": [
    { municipio: "Andrés Bello", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Boconó", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Bolívar", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Candelaria", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Carache", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Carvajal", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Escuque", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Márquez Cañizales", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Miranda", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Monte Carmelo", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Motatán", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Pampán", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Pampanito", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Rafael Rangel", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San Rafael de Carvajal", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Sucre", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Trujillo", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Urdaneta", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Valera", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Vargas": [
    { municipio: "Vargas", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Yaracuy": [
    { municipio: "Arístides Bastidas", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Bolívar", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Bruzual", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Cocorote", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Independencia", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "La Trinidad", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Monge", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Nirgua", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Páez", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Peña", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San Felipe", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Sucre", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Urachiche", sitio: "por identificar", direccion: "por identificar" }
  ],

  "Zulia": [
    { municipio: "Baralt", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Bolívar", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Cabimas", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Catatumbo", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Colón", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Francisco Javier Pulgar", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Jesús María Semprún", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "La Cañada de Urdaneta", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Lagunillas", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Mara", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Maracaibo", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Miranda", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Almirante Padilla", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "San Francisco", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Sucre", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Valmore Rodríguez", sitio: "por identificar", direccion: "por identificar" },
    { municipio: "Jesús Enrique Lossada", sitio: "por identificar", direccion: "por identificar" }
  ]

};

module.exports = ubicaciones;
