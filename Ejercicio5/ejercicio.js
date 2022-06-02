


let numero = parseInt(prompt('Introduce un número entero'))
let resultado=1

for(let i = numero; i>1; i--){
    resultado *= i
}

confirm(`El factorial de ${numero} es ${resultado}`)