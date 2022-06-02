



let suma=0
let contador=0

while(suma<=50){
    suma += parseInt(prompt('Introduce un número entero para añadir a la suma'))
    contador++
}

confirm(`La suma total es de: ${suma}`);
confirm(`El total de números introducidos es: ${contador}`);