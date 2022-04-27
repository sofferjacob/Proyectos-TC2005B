const grids = document.getElementsByTagName("iframe");

console.log(grids)

for (let i = 0; i < grids.length; i++) {
    grids[i].contentDocument.body.onclick = (e) => {
        console.log("click")
        window.open(`${i + 1}/grid.html`)
    }
}

const test = document.getElementById("test");
test.onclick = (e) => {
    console.log("click")
    window.open(`${i + 1}/grid.html`)
}