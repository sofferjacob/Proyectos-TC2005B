const grids = document.getElementsByTagName("iframe");

console.log(grids)

for (let i = 0; i < grids.length; i++) {
    grids[i].contentDocument.body.onclick = (e) => {
        console.log("click")
        window.open(`${i + 1}/grid.html`)
    }
}

const links = document.getElementById('links');

for (let i = 1; i != 9; i++) {
    const element = document.createElement('li');
    const link = document.createElement('a');
    link.href = `${i}/grid.html`;
    link.innerText = `Grid ${i}`
    element.appendChild(link);
    links.appendChild(element);
}