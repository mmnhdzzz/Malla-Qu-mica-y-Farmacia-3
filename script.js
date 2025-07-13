const ramos = [
  { codigo: "QFAR 1101", nombre: "Matemáticas I", prereqs: [], semestre: 1 },
  { codigo: "QFAR 1102", nombre: "Química I", prereqs: [], semestre: 1 },
  { codigo: "QFAR 1103", nombre: "Técnicas Básicas de Laboratorio", prereqs: [], semestre: 1 },
  { codigo: "QFAR 1104", nombre: "Biología Celular y Molecular", prereqs: [], semestre: 1 },
  { codigo: "QFAR 1105", nombre: "Introducción a las Ciencias Farmacéuticas", prereqs: [], semestre: 1 },
  { codigo: "CES 1144", nombre: "Salud, Bienestar y Sociedad", prereqs: [], semestre: 1 },

  { codigo: "QFAR 1106", nombre: "Matemáticas II", prereqs: [], semestre: 2 },
  { codigo: "QFAR 1107", nombre: "Química II", prereqs: ["QFAR 1102", "QFAR 1103"], semestre: 2 },
  { codigo: "QFAR 1110", nombre: "Anatomía e Histología", prereqs: [], semestre: 2 },
  { codigo: "QFAR 1109", nombre: "Fisiología y Patología I", prereqs: ["QFAR 1104"], semestre: 2 },
  { codigo: "CES 1145", nombre: "Salud Pública", prereqs: ["CES 1144"], semestre: 2 },
  { codigo: "ELAC", nombre: "Electivo Antropológico Cristiano", prereqs: [], semestre: 2 },

  { codigo: "QFAR 1108", nombre: "Biofísica", prereqs: [], semestre: 3 },
  { codigo: "QFAR 1111", nombre: "Química Orgánica I", prereqs: ["QFAR 1107"], semestre: 3 },
  { codigo: "QFAR 1112", nombre: "Botánica Farmacéutica", prereqs: [], semestre: 3 },
  { codigo: "QFAR 1113", nombre: "Fisiología y Patología II", prereqs: ["QFAR 1109"], semestre: 3 },
  { codigo: "CES 1146", nombre: "Salud Familiar Comunitaria I", prereqs: ["CES 1145"], semestre: 3 },
  { codigo: "DIVERSIDAD1", nombre: "Electivo Diversidad I", prereqs: [], semestre: 3 },

  { codigo: "QFAR 1114", nombre: "Comunicación en Salud", prereqs: [], semestre: 4 },
  { codigo: "QFAR 1115", nombre: "Química Orgánica II", prereqs: ["QFAR 1111"], semestre: 4 },
  { codigo: "QFAR 1116", nombre: "Química Analítica", prereqs: ["QFAR 1107"], semestre: 4 },
  { codigo: "QFAR 1117", nombre: "Bioquímica General", prereqs: ["QFAR 1111"], semestre: 4 },
  { codigo: "QFAR 1118", nombre: "Fisicoquímica", prereqs: ["QFAR 1106", "QFAR 1107"], semestre: 4 },
  { codigo: "CES 1147", nombre: "Salud Familiar Comunitaria II", prereqs: ["CES 1146"], semestre: 4 },

  { codigo: "QFAR 1119", nombre: "Farmacología General", prereqs: ["QFAR 1115"], semestre: 5 },
  { codigo: "QFAR 1120", nombre: "Microbiología", prereqs: ["QFAR 1102"], semestre: 5 },
  { codigo: "QFAR 1121", nombre: "Análisis Instrumental", prereqs: ["QFAR 1116"], semestre: 5 },
  { codigo: "QFAR 1122", nombre: "Farmacognosia", prereqs: ["QFAR 1112", "QFAR 1115"], semestre: 5 },
  { codigo: "CES 1149", nombre: "Módulo Integrado Salud I", prereqs: ["CES 1147"], semestre: 5 },
  { codigo: "DIVERSIDAD2", nombre: "Electivo Diversidad II", prereqs: [], semestre: 5 },

  { codigo: "QFAR 1123", nombre: "Farmacología de Sistemas I", prereqs: ["QFAR 1119", "QFAR 1113"], semestre: 6 },
  { codigo: "QFAR 1124", nombre: "Bioquímica Clínica", prereqs: ["QFAR 1117"], semestre: 6 },
  { codigo: "QFAR 1125", nombre: "Farmacoquímica I", prereqs: ["QFAR 1119"], semestre: 6 },
  { codigo: "QFAR 1126", nombre: "Inmunología", prereqs: ["QFAR 1113"], semestre: 6 },
  { codigo: "QFAR 1127", nombre: "Bioestadística", prereqs: ["QFAR 1106"], semestre: 6 },
  { codigo: "CES 1150", nombre: "Módulo Integrado Salud II", prereqs: ["CES 1149"], semestre: 6 },
];

const malla = document.getElementById("malla");

function renderMalla() {
  const totalSemestres = 6;

  // Contenedor que agrupa los semestres en fila
  const contenedor = document.createElement("div");
  contenedor.className = "contenedor-semestres";

  for (let s = 1; s <= totalSemestres; s++) {
    const columna = document.createElement("div");
    columna.className = "semestre-vertical";

    // Título semestre
    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${s}`;
    columna.appendChild(titulo);

    // Filtrar ramos por semestre
    ramos.filter(r => r.semestre === s).forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.id = ramo.codigo;
      div.innerHTML = `<h3>${ramo.nombre}</h3><p>${ramo.codigo}</p>`;

      // Si no tiene prerrequisitos, activado desde el inicio
      if (ramo.prereqs.length === 0) div.classList.add("activado");

      // Al hacer clic cambia estado completado (si activado)
      div.onclick = () => toggleRamo(ramo);

      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  }

  // Vacía y añade el contenedor a #malla
  malla.innerHTML = "";
  malla.appendChild(contenedor);
}

function toggleRamo(ramo) {
  const div = document.getElementById(ramo.codigo);
  if (!div.classList.contains("activado")) return;
  div.classList.toggle("completado");
  actualizarRamos();
}

function actualizarRamos() {
  ramos.forEach(ramo => {
    if (ramo.prereqs.length > 0) {
      const prereqsCompletados = ramo.prereqs.every(cod =>
        document.getElementById(cod)?.classList.contains("completado")
      );
      const div = document.getElementById(ramo.codigo);
      if (prereqsCompletados) {
        div.classList.add("activado");
      } else {
        div.classList.remove("activado");
        div.classList.remove("completado");
      }
    }
  });
}

renderMalla();
