/*localStorage.setItem('nombreUsuario','Noel ');
localStorage.setItem('estadoEmocional', 'Cansado');
console.log(localStorage.getItem('nombreUsuario'));
*/
//localStorage.removeItem('estadoEmocional');

/////////Notacion JSON//////////



const usuario = {
    nombre: 'Noel',
    edad: '22'
}

const useJSON = localStorage.getItem('usuario');
const usuario2 = JSON.parse(useJSON);
console.log(`${usuario2.nombre} ${usuario2.edad}`);


