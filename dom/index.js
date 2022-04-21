/*
Ejercicios DOM y Eventos
Jacobo Soffer
A01028653
21/04/2022
*/
// 1. Posición del mouse
const mousePosition = document.getElementById('mousePosition');

document.onmousemove = (e) => mousePosition.innerHTML = `Posición del mouse: (${e.clientX}, ${e.clientY})`;

// 2. Campos de una forma
const form = document.getElementById("form1");

form.onsubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const res = document.getElementById("form-result");
    res.innerHTML = "nombre: " + data.get('fname') + ' ' + data.get('lname');
};

// 3. Filas y columnas tabla
const table = document.getElementById("sampleTable")
let cols = 2
let rows = 2
const insertRow = document.getElementById("rowbtn")
insertRow.onclick = (e) => {
    const row = document.createElement("tr");
    for (let i = 0; i < cols; i++) {
        const col = document.createElement("td");
        col.innerHTML = `Row ${rows + 1} column ${i + 1}`
        row.appendChild(col);
    }
    rows++
    table.appendChild(row)
};

const colbtn = document.getElementById("colbtn");
colbtn.onclick = (e) => {
    const rows = table.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        let col = document.createElement("td");
        col.innerHTML = `Row ${i + 1} column ${cols + 1}`
        rows[i].appendChild(col);
    }
    cols++;
};

// 4. Texto en una celda de tabla
const textTable = document.getElementById("myTable");
const tabForm = document.getElementById("tabForm");

tabForm.onsubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const xStr = data.get("rowcord");
    const yStr = data.get("colcord");
    if (!xStr.length || !yStr.length) return;
    const x = parseInt(xStr);
    const y = parseInt(yStr);
    if (x === NaN || y === NaN) return;
    const rows = textTable.getElementsByTagName("tr");
    const cols = rows[x - 1].getElementsByTagName("td");
    cols[y - 1].innerText = data.get("toInsert");
};

// 5. Lista de colores
let colors = [
    'Red',
    'Green',
    'White',
    'Black',
    'Blue',
    'Orange',
    'Yellow',
    'Green',
    'Purple',
    'Pink',
];

const colorSelect = document.getElementById("colorSelect");
const addColor = document.getElementById('addColor');
addColor.onclick = (e) => {
    if (!colors.length) return;
    const min = 0;
    const max = colors.length - 1;
    const i = Math.floor(Math.random() * (max - min + 1)) + min;
    const color = colors[i];
    colors = [...colors.slice(0, i), ...colors.slice(i + 1)];
    const option = document.createElement("option")
    option.innerText = color;
    colorSelect.appendChild(option);
};

const removeColor = document.getElementById("removeColor");
removeColor.onclick = (e) => {
    const colorOptions = colorSelect.getElementsByTagName("option");
    if (!colorOptions.length) return;
    const toRemove = colorOptions[colorOptions.length - 1];
    colors.push(toRemove.innerText);
    colorSelect.removeChild(toRemove);
};

// 6. Cambio de imagen con mouse
const img = document.getElementById("image");
img.onmouseenter = (e) => {
    const min = 300;
    const max = 600;
    const width = Math.floor(Math.random() * (max - min + 1)) + min;
    const height = Math.floor(Math.random() * (max - min + 1)) + min;
    img.src = `http://placekitten.com/${width}/${height}`
};