let numeros = [1,2,3,4,5]
numeros.push(6)
numeros.splice(0,1)

console.log(numeros)


// Descripción: Dado un array de números, crea un nuevo array con el cuadrado de cada número. Luego, filtra los números que son mayores a 10.

const numeros2 = [1,2,3,4,5,6,7,8,9,10]
const nuevosNumeros = []

numeros2.map((n) => {
    nuevosNumeros.push(n*n)
})

let mayor10 = nuevosNumeros.filter(e => e >10)

console.log(nuevosNumeros)
console.log(mayor10)


// Descripción: Dado un array de números, encuentra la suma de todos los elementos.

const numeros3 = [1,2,3,4,5,6,7,8,9,10]
let suma = 0;

numeros3.forEach((n) => {
    suma += n;
});

console.log(suma);