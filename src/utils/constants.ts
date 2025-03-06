import type { DatosProfesionales } from "./typos";

export const tipoViolencia = [
  { name: "Psicológica", slug: "psicologica" },
  { name: "Física", slug: "fisica" },
  { name: "Económica", slug: "economica" },
  { name: "Sexual", slug: "sexual" },
  { name: "Laboral", slug: "laboral" },
  { name: "Institucional", slug: "institucional" },
  { name: "En línea", slug: "en-línea" },
];

export const datosAutores = {
  psicologica: [
    { name: "Pareja", value: 19 },
    {
      name: "Varón con jerarquía superior en el medio de comunicación",
      value: 104,
    },
    { name: "Varón compañero en el medio de comunicación", value: 83 },
    { name: "Varón de otro medio de comunicación", value: 49 },
    { name: "Otra mujer periodista", value: 54 },
    { name: "Funcionario y/o empleado público", value: 84 },
    { name: "Ciudadano/particular", value: 71 },
    { name: "Otra mujer que trabaja en los medios de comunicación", value: 47 },
  ],
  fisica: [
    { name: "Pareja", value: 4 },
    {
      name: "Varón con jerarquía superior en el medio de comunicación",
      value: 11,
    },
    { name: "Varón compañero en el medio de comunicación", value: 7 },
    { name: "Varón de otro medio de comunicación", value: 7 },
    { name: "Otra mujer periodista", value: 6 },
    { name: "Funcionario y/o empleado público", value: 15 },
    { name: "Ciudadano/particular", value: 11 },
    { name: "Otra mujer que trabaja en los medios de comunicación", value: 6 },
  ],
  economica: [
    { name: "Pareja", value: 10 },
    {
      name: "Varón con jerarquía superior en el medio de comunicación",
      value: 95,
    },
    { name: "Varón compañero en el medio de comunicación", value: 32 },
    { name: "Varón de otro medio de comunicación", value: 11 },
    { name: "Otra mujer periodista", value: 21 },
    { name: "Funcionario y/o empleado público", value: 31 },
    { name: "Ciudadano/particular", value: 12 },
    { name: "Otra mujer que trabaja en los medios de comunicación", value: 20 },
  ],
  sexual: [
    { name: "Pareja", value: 2 },
    {
      name: "Varón con jerarquía superior en el medio de comunicación",
      value: 43,
    },
    { name: "Varón compañero en el medio de comunicación", value: 43 },
    { name: "Varón de otro medio de comunicación", value: 18 },
    { name: "Otra mujer periodista", value: 0 },
    { name: "Funcionario y/o empleado público", value: 26 },
    { name: "Ciudadano/particular", value: 16 },
    { name: "Otra mujer que trabaja en los medios de comunicación", value: 3 },
  ],
  laboral: [
    { name: "Pareja", value: 4 },
    {
      name: "Varón con jerarquía superior en el medio de comunicación",
      value: 27,
    },
    { name: "Varón compañero en el medio de comunicación", value: 11 },
    { name: "Varón de otro medio de comunicación", value: 4 },
    { name: "Otra mujer periodista", value: 6 },
    { name: "Funcionario y/o empleado público", value: 7 },
    { name: "Ciudadano/particular", value: 3 },
    { name: "Otra mujer que trabaja en los medios de comunicación", value: 7 },
  ],
  institucional: [
    { name: "Pareja", value: 3 },
    {
      name: "Varón con jerarquía superior en el medio de comunicación",
      value: 82,
    },
    { name: "Varón compañero en el medio de comunicación", value: 42 },
    { name: "Varón de otro medio de comunicación", value: 14 },
    { name: "Otra mujer periodista", value: 23 },
    { name: "Funcionario y/o empleado público", value: 59 },
    { name: "Ciudadano/particular", value: 12 },
    { name: "Otra mujer que trabaja en los medios de comunicación", value: 21 },
  ],
  "en-línea": [
    { name: "Pareja", value: 5 },
    {
      name: "Varón con jerarquía superior en el medio de comunicación",
      value: 14,
    },
    { name: "Varón compañero en el medio de comunicación", value: 14 },
    { name: "Varón de otro medio de comunicación", value: 26 },
    { name: "Otra mujer periodista", value: 11 },
    { name: "Funcionario y/o empleado público", value: 35 },
    { name: "Ciudadano/particular", value: 62 },
    { name: "Otra mujer que trabaja en los medios de comunicación", value: 17 },
  ],
};

export const categoriasPersonalesEncuestadas = [
  { name: "Edad de la encuestada", slug: "edad" },
  { name: "Nivel educativo", slug: "educacion" },
  { name: "Jefa de hogar", slug: "jefa" },
  { name: "Cantidad de hijos", slug: "hijos" }
];

export const datosPersonales = {
  edad: [
    { name: "Entre 18 y 25", value: 4 },
    { name: "Entre 26 y 35", value: 49 },
    { name: "Entre 36 y 44", value: 71 },
    { name: "Entre 45 y 60", value: 84 },
    { name: "Entre 61 y 80", value: 7 },
  ],
  educacion: [
    { name: "Secundario completo/incompleto", value: 2 },
    { name: "Terciario completo", value: 25 },
    { name: "Universitario incompleto", value: 62 },
    { name: "Universitario completo", value: 78 },
    { name: "Posgrado incompleto", value: 21 },
    { name: "Posgrado completo", value: 27 },
  ],
  jefa: [
    { name: "Sí", value: 133 },
    { name: "No", value: 82 },
  ],
  hijos: [
    { name: "Ninguno", value: 91 },
    { name: "1 hijo/a", value: 46 },
    { name: "2 hijos/as", value: 51 },
    { name: "3 hijos/as", value: 23 },
    { name: "4 hijos/as", value: 2 },
    { name: "5 hijos/as", value: 2 },
  ]
};


export const categoriasProfesionalesEncuestadas = [
  { name: "Años de ejercicio de la profesión", slug: "anos" },
  { name: "Ámbito de ejercicio de la profesión", slug: "ambito" },
  { name: "Plataforma en la que se desarrolla", slug: "plataforma" },
];



export const datosProfesionales:DatosProfesionales = {
  anos: [
    { name: "0 a 5 años", value: 28 },
    { name: "6 a 10 años", value: 28 },
    { name: "11 a 15 años", value: 27 },
    { name: "16 a 20 años", value: 41 },
    { name: "Más de 20 años", value: 91 },
  ],
  ambito: [
    { name: "Público", value: 29 },
    { name: "Privado", value: 140 },
    { name: "Público y privado", value: 46 }

  ],
  plataforma: [
    { name: "Medio gráfico", value: 80 },
    { name: "Medio audiovisual", value: 53 },
    { name: "Medio radiofónico", value: 85 },
    { name: "Fotoperiodismo", value: 4 },
    { name: "Medio multiplataforma", value: 108 },
    { name: "Perfil personal en redes sociales", value: 37 },
    { name: "Podcast", value: 1 },
    { name: "Institucional", value: 1 },
    { name: "Newsletter", value: 1 }
  ]
};

export const colors = [
  "#401F71",
  "#FFAC39",
  "#2A0C4E",
  "#E6E1CF",
  "#C9695B",
  "#88659F",
  "#F8D58D",
  "#ED8272",
  "#B092C2",
];