



const numeros = [8,45,15,30,60]
let pares = []
let impares = []

for(const numeros of numeros){
    let random = Math.round(Math.random() * 10 + 1)
    const resultado = numeros * random

    console.log(`${numeros} x ${random} = ${resultado}`);
    if(resultado % 2 == 0){
        pares.push(resultado)
    }else{
        impares.push(resultado)
    }
}

confirm("Pares\n"+pares);
confirm("Impares\n"+impares);