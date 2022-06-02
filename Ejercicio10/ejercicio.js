

 



const colores = ["azul", "amarillo", "rojo", "verde", "rosa"]

const color = prompt('Introduce un color').toLowerCase()

if(colores.indexOf(color) !== -1){
    confirm('Tu color se encuentra en el array');
}else{
    confirm('Tu color no está definido');
}