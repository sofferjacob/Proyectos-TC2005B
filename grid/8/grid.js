const colors = ['red', 'green', 'blue', 'yellow'];

const big = document.getElementById("big");

for (let i = 0; i < 7; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = colors[i % (colors.length - 1)];
    document.body.insertBefore(div, big);
}