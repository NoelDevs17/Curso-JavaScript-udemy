
/*
var nombre;

var prueba  = function (n){
    return "Hola " + n
}
nombre = "Pablo";

console.log(prueba(nombre));
// argumentos nulos

var a;
a = null;
var valorNulo = function(a){
    return a;
}
console.log(valorNulo(a));
 

//Argumentos por defectos

var sumar = function(a,b, c = 2){
    return (a + b) * c;
}

console.log(sumar(10,4,4));

// Plantillas de cadenas (template string)

var nombre = "Noel";
console.log(`El nombre es:  ${nombre}`);

var a = 5;
var b = 10;

console.log(`La suma es: ${a + b}`); 
*/

// Ejercicio 4

var calcularScore = function(nombre, pos, neg){
    var porPos = (pos / 100) * 100;
    var porNeg = (neg / 100) * 100;

    if(porPos > 90){
        return nombre + (' Tiene el Score A');
    }else if(porPos >= 70){
        return nombre + "El escore es de B";
    }else if(porPos >= 45){
        return nombre + "El escore es de C"
    }else{
        return nombre + "El escore es de F"
    }
}

var resultado = calcularScore("Noel", 97,80);
console.log(resultado);