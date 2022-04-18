// codigo de soporte;
const e = document.getElementById("root");
const log = (s) => {
    const p = document.createElement('p');
    p.innerHTML = s;
    e.appendChild(p);
}

// ejercicios
// Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.
function bubbleSort(arr) {
    let swapped = false;
    let counter = 0;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1 - counter; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        counter++;
    } while (swapped);
    return arr;
}

log("== Bubble Sort ==")
log(`[1,2,3,4,5,6] => ${bubbleSort([1, 2, 3, 4, 5, 6])}`);
log(`[2,3,5,20, 1] => ${bubbleSort([2, 3, 5, 20, 1])}`);
log(`[9,8,6,4,3,2] => ${bubbleSort([9, 8, 6, 4, 3, 2])}`);


// Escribe una función que implemente el algoritmo 'quick-sort' para ordenar una lista de números.
function quickSort(array) {
    quickSortHelper(array, 0, array.length - 1);
    return array;
}

const quickSortHelper = (array, startIdx, endIdx) => {
    if (startIdx >= endIdx) return;
    const pivot = array[startIdx];
    let left = startIdx + 1;
    let right = endIdx;
    while (right >= left) {
        if (array[right] <= pivot && array[left] >= pivot) {
            swap(array, right, left);
        }
        if (array[left] <= pivot) {
            left++;
        }
        if (array[right] >= pivot) {
            right--;
        }
    }
    swap(array, startIdx, right);
    const leftIsSmaller = right - 1 - startIdx < endIdx - (right + 1);
    if (leftIsSmaller) {
        quickSortHelper(array, startIdx, right - 1);
        quickSortHelper(array, right + 1, endIdx);
    } else {
        quickSortHelper(array, right + 1, endIdx);
        quickSortHelper(array, startIdx, right - 1);
    }
};

const swap = (array, a, b) => {
    let tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}

log("== Quick Sort ==")
log(`[1,2,3,4,5,6] => ${quickSort([1, 2, 3, 4, 5, 6])}`);
log(`[2,3,5,20, 1] => ${quickSort([2, 3, 5, 20, 1])}`);
log(`[9,8,6,4,3,2] => ${quickSort([9, 8, 6, 4, 3, 2])}`);

// Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'
const firstNonDuplicate = (value) => {
    const counters = {

    }
    for (let i = 0; i < value.length; i++) {
        const char = value[i]
        if (char in counters) {
            counters[char].count += 1
        }
        else {
            counters[char] = {
                pos: i,
                count: 1
            }
        }
    }

    let res = { pos: Number.MAX_SAFE_INTEGER }
    let k = 0

    for (const [v, d] of Object.entries(counters)) {

        if (d.count == 1 && d.pos < res.pos) {
            res = d
            k = v
        }
    }

    return k
}


log("== CASO First Non Duplcate ==")
log(`abacddbec => ${firstNonDuplicate("abacddbec")}`);
log(`abbbc => ${firstNonDuplicate("abbbc")}`);
log(`dabc => ${firstNonDuplicate("dabc")}`);


// Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.
const reverseCopy = (arr) => {
    res = []
    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i])
    }
    return res
}

log("== CASO REVERSE (COPY) ==")
log(`[1, 2, 3] => ${reverseCopy([1, 2, 3])}`);
log(`[8, 21, 38] => ${reverseCopy([8, 21, 38])}`);
log(`[41, 92, -8] => ${reverseCopy([41, 92, -8])}`);

const reverseInPlace = (arr) => {
    let i = 0;
    let j = arr.length - 1;
    while (i !== j) {
        let t = arr[i]
        arr[i] = arr[j]
        arr[j] = t
        i++
        j--
    }
}

const revTest1 = [1, 2, 3];
const revTest2 = [8, 21, 38];
const revTest3 = [41, 92, -8];

log("== CASO REVERSE (IN PLACE) ==")
log(`[1, 2, 3] => ${reverseCopy(revTest1)}`);
log(`[8, 21, 38] => ${reverseCopy(revTest2)}`);
log(`[41, 92, -8] => ${reverseCopy(revTest3)}`);
// Usando la definición de clase de Javascript ES6, crea una clase que se llame 'Vector' que represente un vector de 3 dimensiones. La clase debe de poder sumar y restar vectores, obtener su magnitud, obtener el vector unitario, y multiplicar por un escalar.

class Vector {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }

    Add(other) {
        this.x += other.x
        this.y += other.y
        this.z += other.z

    }

    Sub(other) {
        this.x -= other.x
        this.y -= other.y
        this.z -= other.z
    }

    Norm() {
        let mag = this.Magnitud()
        this.x /= mag
        this.y /= mag
        this.z /= mag
    }

    Magnitud() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    }

    Scale(x) {
        this.x *= x
        this.y *= y
        this.z *= z
    }
}

log("== CASO Vector ==")
let v = new Vector(1, 1, 1)
v.Add(new Vector(2, 2, 2))
log(`Add (1,1,1) + (2,2,2) => (${v.x} ${v.y} ${v.z})`);

let v2 = new Vector(1, 1, 1)
v2.Sub(new Vector(2, 2, 2))
log(`Sub (1,1,1) - (2,2,2) => (${v2.x} ${v2.y} ${v2.z})`);

let v3 = new Vector(1, 1, 1)
v3.Norm()
log(`Norm (1,1,1) => (${v3.x} ${v3.y} ${v3.z})`);

v3 = new Vector(1, 1, 1)
v3.Magnitud()
log(`Magnitud (1,1,1) => (${v3.Magnitud()})`);


// Escribe una función que calcule el máximo común divisor de dos números.
const gcd = (a, b) => {
    let count = 0;
    while (a != b) {
        if (count >= 100) break;
        if (a > b) {
            let diff = a - b;
            a = diff;
        } else {
            let diff = b - a;
            b = diff;
        }
        count++;
    }
    return a;
};

log("== CASO GCD ==")
log(`(4, 2) => ${gcd(4, 2)}`);
log(`(24, 8) => ${gcd(24, 8)}`);
log(`(91, 42) => ${gcd(91, 42)}`);
// Usando ojetos de tu clase 'Vector', crea una función que reciba dos vectores, y que indique si esos vectores son ortogonales o no.

const Orthogonal = (a, b) => {
    // f * g = 0
    let r = a.x * b.x + a.y * b.y + a.z * b.z

    return r === 0

}

log("== CASO Orthogonal ==")
let vecA = new Vector(3, 3, 1)
let vecB = new Vector(1, 1, -6)
log(`(3,3,1) orth (1,1,-6) => ${Orthogonal(vecA, vecB)}`);

vecA = new Vector(1, 1, 1)
vecB = new Vector(1, 1, 1)
log(`(1,1,1) orth (1,1,1) => ${Orthogonal(vecA, vecB)}`);

vecA = new Vector(1, 1, 2)
vecB = new Vector(1, -3, 1)
log(`(1,1,2) orth (1,-3,1) => ${Orthogonal(vecA, vecB)}`);

// Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.
const hsMap = {
    a: 4,
    s: 5,
    e: 3,
    i: 1,
    o: 0,
};

const toHsChar = (c) => {
    const t = c.toLowerCase();
    if (t in hsMap) {
        return hsMap[t];
    } else {
        return c;
    }
}

const toHs = (s) => {
    let res = "";
    for (const c of s) {
        res += toHsChar(c);
    }
    return res;
};

log("== HACKER SPEAK ==")
log(`Javascript es divertido => ${toHs('Javascript es divertido')}`);
log(`Hello world! => ${toHs('Hello world!')}`);
log(`I love javascript => ${toHs('I love javascript')}`);



// Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].

const factorize = (v) => {
    factors = [1]

    for (let i = 2; i <= v; i++) {
        if (v % i == 0) {
            factors.push(i)
        }
    }

    return factors
}

log("== Factorize ==")
log(`12 => ${factorize(12)}`);
log(`50 => ${factorize(50)}`);
log(`17 => ${factorize(17)}`);


// Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]
const removeDuplicates = (arr) => {
    const set = {};
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in set) continue;
        res.push(arr[i]);
        set[arr[i]] = true;
    }
    return res;
}

log("== REMOVE DUPLICATES ==")
log(`[1, 0, 1, 1, 0, 0] => ${removeDuplicates([1, 0, 1, 1, 0, 0])}`);
log(`[2, 4, 2, 8, 4, 9, 3, 2] => ${removeDuplicates([2, 4, 2, 8, 4, 9, 3, 2])}`);
log(`[1, 1, 1, 1, 1] => ${removeDuplicates([1, 1, 1, 1, 1])}`);