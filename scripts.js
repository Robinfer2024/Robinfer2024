const DATOSNOTAS = [
    ["20190398", 14, 14, 16, 18, 16, 16, 10, 0, 0, 8],
    ["20180235", 16, 18, 14, 14, 16, 10, 10, 0, 0, 6],
    ["20190315", 11, 14, 15, 15, 14, 15, 8, 0, 0, 7],
    ["20190409", 14, 14, 16, 18, 16, 16, 8, 0, 0, 7],
    ["20190413", 16, 16, 16, 16, 16, 12, 12, 0, 0, 7],
    ["20190416", 16, 16, 16, 16, 16, 12, 6, 0, 0, 6],
    ["20180264", 0, 12, 14, 16, 11, 12, 8, 0, 0, 6],
    ["20190438", 16, 16, 16, 16, 16, 12, 8, 0, 0, 6],
    ["20180543", 16, 12, 14, 16, 15, 12, 10, 0, 0, 7],
    ["20190015", 14, 12, 14, 16, 14, 12, 0, 0, 0, 5],
];

function mostrarNotas() {
    const codigo = document.getElementById("codigo").value;
    const tabla = document.getElementById("tabla-notas");
    const cuerpo = document.getElementById("tabla-cuerpo");

    // Limpiar tabla
    cuerpo.innerHTML = "";

    // Buscar estudiante
    const estudiante = DATOSNOTAS.find(notas => notas[0] === codigo);

    if (estudiante) {
        const fila = document.createElement("tr");
        estudiante.forEach(dato => {
            const celda = document.createElement("td");
            celda.textContent = dato;
            fila.appendChild(celda);
        });
        cuerpo.appendChild(fila);
        tabla.style.display = "table";
    } else {
        alert("Código no encontrado. Intente nuevamente.");
        tabla.style.display = "none";
    }
}
