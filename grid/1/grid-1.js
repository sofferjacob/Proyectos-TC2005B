const colors = ['red', 'orange', 'yellow', 'green', 'pink', 'cyan'];

const cells = document.getElementsByTagName("div");

for (let i = 1; i <= 6; i++) {
    cells[i - 1].style.backgroundColor = colors[i - 1],
        cells[i - 1].style.height = 'calc(50vh - 20px)',
        cells[i - 1].style.width = 'calc(33vw - 20px)',
        cells[i - 1].style.gridColumnStart = i % 3,
        cells[i - 1].style.gridColumnEnd = i % 3,
        cells[i - 1].style.gridRowStart = i >= 4 ? 2 : 1,
        cells[i - 1].style.gridRowEnd = i >= 4 ? 2 : 1
}