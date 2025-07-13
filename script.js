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

  { codigo: "QFAR 1128", nombre: "Farmacología en Sistemas II", prereqs: ["QFAR 1123"], semestre: 7 },
  { codigo: "QFAR 1129", nombre: "Tecnología Farmacéutica I", prereqs: [], semestre: 7 },
  { codigo: "QFAR 1130", nombre: "Farmacoquímica II", prereqs: ["QFAR 1125"], semestre: 7 },
  { codigo: "QFAR 1131", nombre: "Administración y gestión farmacéutica", prereqs: ["SEMESTRE6"], semestre: 7 },
  { codigo: "QFAR 1132", nombre: "Práctica Preliminar", prereqs: ["SEMESTRE6"], semestre: 7 },
  { codigo: "ELTE", nombre: "Electivo Teológico", prereqs: [], semestre: 7 },

  { codigo: "QFAR 1133", nombre: "Toxicología", prereqs: ["QFAR 1128", "QFAR 1121"], semestre: 8 },
  { codigo: "QFAR 1134", nombre: "Tecnología farmacéutica II", prereqs: ["QFAR 1129"], semestre: 8 },
  { codigo: "QFAR 1135", nombre: "Atención Farmacéutica", prereqs: ["QFAR 1124", "QFAR 1128"], semestre: 8 },
  { codigo: "QFAR 1136", nombre: "Farmacia Comunitaria y Asistencial", prereqs: ["QFAR 1128", "QFAR 1129"], semestre: 8 },
  { codigo: "QFAR 1137", nombre: "Seminarios de Investigación", prereqs: ["QFAR 1132"], semestre: 8 },
  { codigo: "CES 1151", nombre: "Gestión de calidad y acreditación", prereqs: ["CES 1150"], semestre: 8 },

  { codigo: "QFAR 1138", nombre: "Legislación Farmacéutica", prereqs: ["SEMESTRE7"], semestre: 9 },
  { codigo: "QFAR 1139", nombre: "Biofarmacia", prereqs: ["QFAR 1134"], semestre: 9 },
  { codigo: "QFAR 1140", nombre: "Cosmética Farmacéutica", prereqs: ["QFAR 1134"], semestre: 9 },
  { codigo: "QFAR 1141", nombre: "Farmacia Clínica", prereqs: ["QFAR 1130", "QFAR 1135"], semestre: 9 },
  { codigo: "ETI433", nombre: "Ética Profesional", prereqs: [], semestre: 9 },
  { codigo: "DIVERSIDAD3", nombre: "Electivo Diversidad III", prereqs: [], semestre: 9 },

  { codigo: "QFAR 1142", nombre: "Práctica Profesional", prereqs: ["SEMESTRE9"], semestre: 10 },
  { codigo: "QFAR 1143", nombre: "Actividad Titulación", prereqs: ["QFAR 1137"], semestre: 10 },
  { codigo: "QFAR 1144", nombre: "Electivo de Especialidad", prereqs: [], semestre: 10 },
];

const malla = document.getElementById("malla");

function renderMalla() {
  const totalSemestres = 10;
  const contenedor = document.createElement("div");
  contenedor.className = "contenedor-semestres";

  for (let s = 1; s <= totalSemestres; s++) {
    const columna = document.createElement("div");
    columna.className = "semestre-vertical";

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${s}`;
    columna.appendChild(titulo);

    ramos.filter(r => r.semestre === s).forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.id = ramo.codigo;
      div.innerHTML = `<h3>${ramo.nombre}</h3><p>${ramo.codigo}</p>`;
      if (ramo.prereqs.length === 0 || ramo.prereqs.includes(`SEMESTRE${s - 1}`)) div.classList.add("activado");
      div.onclick = () => toggleRamo(ramo);
      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  }

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
      const prereqsCompletados = ramo.prereqs.every(cod => {
        if (cod.startsWith("SEMESTRE")) {
          const semestreNum = parseInt(cod.replace("SEMESTRE", ""));
          const ramosSemestre = ramos.filter(r => r.semestre === semestreNum);
          return ramosSemestre.every(r => document.getElementById(r.codigo)?.classList.contains("completado"));
        } else {
          return document.getElementById(cod)?.classList.contains("completado");
        }
      });
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
