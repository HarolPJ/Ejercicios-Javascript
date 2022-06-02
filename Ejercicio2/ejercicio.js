

let figura = prompt('Introducir el nombre de la figura geómetrica, a la cual le desea calcular el área: triangulo, rectangulo o circulo')

let base;
let altura;
let radio;

switch(figura){
    case 'triangulo':
        base=prompt('Introduce la base del triángulo (Recuerde las unidades de medida)')
        altura=prompt('Introduce la altura del triángulo (Recuerde las unidades de medida)')
        confirm(`El área del triángulo es ${(base*altura)/2}`);
        break
    case 'rectangulo':
        base=prompt('Introduce la base del rectángulo (Recuerde las unidades de medida)')
        altura=prompt('Introduce la altura del rectángulo (Recuerde las unidades de medida)')
        confirm(`El área del rectángulo es ${base*altura}`);
        break
    case 'circulo':
        radio=prompt('Introduce el radio del círculo')
        confirm(`El área del círculo es ${Math.PI * Math.pow(radio,2)}`);
        break
    default: confirm('La figura geométrica no es válida');
}