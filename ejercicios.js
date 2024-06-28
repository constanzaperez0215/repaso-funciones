// crear funcion de suma
const suma = (num1,num2) => {
    let suma = num1+num2
    return suma
}

console.log(suma(5,12))

//crear saludo personalizado

const saludo = (nombre) => {
    console.log(`Hola ${nombre}, te extrañé mucho`)
}

saludo('Claudia')

//calcular el area de un rectangulo

const alto = prompt('Para calcular el área de tu rectangulo, ingresa el alto: ')
const ancho = prompt('Para calcular el área de tu rectangulo, ingresa el ancho: ')

const area = (alto, ancho) => {
    let area = alto * ancho
    console.log(`El área de tu rectangulo es de ${area}`)
}

area(alto, ancho)

//calcular si un numero es par

const esPar = (num) => {
    if (num % 2 === 0) {
        console.log(`El ${num} es par`)
    } else if(num % 2 === 1) {
        console.log(`El ${num} es impar`)
    } else {
        console.log(`El ${num} es decimal`)
    }
}

esPar(prompt('Ingresa tu numero para saber si es par: '))

//encontrar el numero mayor

const numeros = [1,2,3,15,60,8,80]

const mayor = (array) => {
    return Math.max(...array);
}

console.log(mayor(numeros));


//invertir una cadena

const invertir = (frase) => {
    return frase.split('').reverse().join('')
}
const frase = prompt('Ingresa una frase para invertir: ')

console.log(invertir(frase))