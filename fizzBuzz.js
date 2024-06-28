
const i = prompt('Ingrese su numero: ')

const FizzBuzz = (i)=>{
    while (i) {
        if (i % 15 == 0) {
            console.log('FizzBuzz')
            return
        } else if (i % 3 == 0) {
            console.log('Fizz')
            return
        }else if (i % 5 == 0) {
            console.log('Buzz')
            return
        } else{
            console.log(i)
            return
        }
    }

}

FizzBuzz(i)