const ramos = [
  { codigo: "QFAR 1101", nombre: "Matemáticas I", prereqs: [] },
  { codigo: "QFAR 1102", nombre: "Química I", prereqs: [] },
  { codigo: "QFAR 1103", nombre: "Técnicas Básicas de Laboratorio", prereqs: [] },
  { codigo: "QFAR 1104", nombre: "Biología Celular y Molecular", prereqs: [] },
  { codigo: "QFAR 1105", nombre: "Introducción a las Ciencias Farmacéuticas", prereqs: [] },
  { codigo: "CES 1144", nombre: "Salud, Bienestar y Sociedad", prereqs: [] },
  { codigo: "QFAR 1106", nombre: "Matemáticas II", prereqs: [] },
  { codigo: "QFAR 1107", nombre: "Química II", prereqs: ["QFAR 1102", "QFAR 1103"] },
  { codigo: "QFAR 1110", nombre: "Anatomía e Histología", prereqs: [] },
  { codigo: "QFAR 1109", nombre: "Fisiología y Patología I", prereqs: ["QFAR 1104"] },
  { codigo: "CES 1145", nombre: "Salud Pública", prereqs: ["CES 1144"] },
  { codigo: "ELAC", nombre: "Electivo Antropológico Cristiano", prereqs: [] },
  { codigo: "QFAR 1108", nombre: "Biofísica", prereqs: [] },
  { codigo: "QFAR 1111", nombre: "Química Orgánica I", prereqs: ["QFAR 1107"] },
  { codigo: "QFAR 1112", nombre: "Botánica Farmacéutica", prereqs: [] },
  { codigo: "QFAR 1113", nombre: "Fisiología y Patología II", prereqs: ["QFAR 1109"] },
  { codigo: "CES 1146", nombre: "Salud Familiar Comunitaria I", prereqs: ["CES 1145"] },
  { codigo: "DIVERSIDAD1", nombre: "Electivo Diversidad I", prereqs: [] },
  { codigo: "QFAR 1114", nombre: "Comunicación en Salud", prereqs: [] },
  { codigo: "QFAR 1115", nombre: "Química Orgánica II", prereqs: ["QFAR 1111"] },
  { codigo: "QFAR 1116", nombre: "Química Analítica", prereqs: ["QFAR 1107"] },
  { codigo: "QFAR 1117", nombre: "Bioquímica General", prereqs: ["QFAR 1111"] },
  { codigo: "QFAR 1118", nombre: "Fisicoquímica", prereqs: ["QFAR 1106", "QFAR 1107"] },
  { codigo: "CES 1147", nombre: "Salud Familiar Comunitaria II", prereqs: ["CES 1146"] },
  { codigo: "QFAR 1119", nombre: "Farmacología General", prereqs: ["QFAR 1115"] },
  { codigo: "QFAR 1120", nombre: "Microbiología", prereqs: ["QFAR 1102"] },
  { codigo: "QFAR 1121", nombre: "Análisis Instrumental", prereqs: ["QFAR 1116"] },
  { codigo: "QFAR 1122", nombre: "Farmacognosia", prereqs: ["QFAR 1112", "QFAR 1115"] },
  { codigo: "CES 1149", nombre: "Módulo Integrado Salud I", prereqs: ["CES 1147"] },
  { codigo: "DIVERSIDAD2", nombre: "Electivo Diversidad II", prereqs: [] },
  { codigo: "QFAR 1123", nombre: "Farmacología de Sistemas I", prereqs: ["QFAR 1119", "QFAR 1113"] },
  { codigo: "QFAR 1124", nombre: "Bioquímica Clínica", prereqs: ["QFAR 1117"] },
  { codigo: "QFAR 1125", nombre: "Farmacoquímica I", prereqs: ["QFAR 1119"] },
  { codigo: "QFAR 1126", nombre: "Inmunología", prereqs: ["QFAR 1113"] },
  { codigo: "QFAR 1127", nombre: "Bioestadística", prereqs: ["QFAR 1106"] },
  { codigo: "CES 1150", nombre: "Módulo Integrado Salud II", prereqs: ["CES 1149"] }
];

const malla = document.getElementById("malla");

function renderMalla() {
  malla.innerHTML = "";
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = ramo.codigo;
    div.innerHTML = `<h3>${ramo.nombre}</h3><p>${ramo.codigo}</p>`;
    if (ramo.prereqs.length === 0) div.classList.add("activado");
    div.onclick = () => toggleRamo(ramo);
    malla.appendChild(div);
  });
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
      }
    }
  });
}

renderMalla();
