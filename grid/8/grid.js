const colors = ['red', 'green', 'blue', 'yellow'];

for (let i = 0; i < 7; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = colors[i % (colors.length - 1)];
    document.body.appendChild(div);
}