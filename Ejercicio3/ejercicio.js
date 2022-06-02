



let numero = parseInt(prompt('Introduce el número entero hasta el cual desees ver la lista de impares y pares'))

for(let i=1; i<=numero; i++){
    if(i%2==0){
        confirm(`El numero ${i}  es par`);
    }else{
        confirm(`El numero ${i}  es impar`);
    }
}