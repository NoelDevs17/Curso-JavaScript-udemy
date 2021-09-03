//Seccion arreglos 

/* var nombres = ["Noel","Noelia","Eridania"];
var apellidos = new Array("Ortiz", "Ortiz", "Sanchez");

console.log(`El nombre es: ${nombres[2]} ${'Y su apellido es: '} ${apellidos[2]}`);
*/
// alert(nombres[1] + " " + apellidos[1])

//operaciones con arreglos

 /* var frutas = ['Pera', 'Manzana','uva', 'sandia'];
console.log(frutas);

/*for(i=0; i<=frutas.length - 2;i++){
    console.log(frutas[i]);
} */
/*
frutas.forEach(function(elemento, indice, array){
console.log(elemento, indice);

});
*/
// aumentar o agregarle elemento a un array
/*
frutas.push('Naranja');
console.log(frutas);

frutas.unshift('Mango');
console.log(frutas);

frutas.pop();
console.log(frutas);

frutas.shift();
console.log(frutas);

var pos = frutas.indexOf('manzana');
console.log(pos);

*/

// arreglo con elementos de diferentes tipos

/* var persona = ['Pablo', 'Vasquez',34,'8099955291',1.75];

console.log(persona); */

//objetos literales 
/*
var persona = {

    nombre: 'Pablo',
    apellido: 'Vasquez',
    gustos: ['Beisbol', 'Manga', 'Musica'],
    trabajo: 'Entrenador fisico',
    esCasado: true, 
}

console.log(persona.gustos);
console.log(persona['esCasado']);
*/
// objetos con la sintaxis object
/*
var persona2 = new Object();
persona2.nombre = 'Noel';
persona2.apellido = 'Ortiz';
persona2['Trabajo'] = 'Web Developer';

console.log(persona2); */

//Objetos y Metodos

var persona = {
// propiedades
    nombre: 'Pablo',
    apellido: 'Vasquez',
    gustos: ['Beisbol', 'Manga', 'Musica'],
    trabajo: 'Entrenador fisico',
    esCasado: true,
    yearNacimiento: 1995,
// metodo
    calcularEdad: function(){
        return 2021 - this.yearNacimiento;
    }
};
console.log(persona);
var edad = persona.calcularEdad();
console.log(edad);