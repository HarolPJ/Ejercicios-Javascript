



let numeros = parseInt(prompt('Introduce un número entero'))
let divisores = 0

if (numeros === 1) confirm('El número no es válido')
else {

    for (let i = 2; i < numeros; i++) {
        if (numeros % i == 0) {
            confirm(`${numeros} / ${i} = ${numeros / i} No es numero primo`)
            divisores++
            break
        }
    }
}

if(divisores==0) confirm(`${numeros} es un numero primo`);