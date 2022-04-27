const colors = ['red', 'green', 'blue', 'white'];

let row = 1;
let col = 1;
for (let i = 1; i <= 18; i++) {
    if (col % 7 === 0) {
        col = 1;
        row++
    }
    const div = document.createElement("div");
    div.style.backgroundColor = colors[i % colors.length];
    div.style.gridColumnStart = col
    div.style.gridColumnEnd = col + 1;
    div.style.gridRowStart = row;
    div.style.gridRowEnd = row + 1;
    document.body.appendChild(div);
    col++;
}