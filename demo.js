// for
/* 
for(var i = 0; i < "hola".length; i++){
    console.log("hola"[i]);
}
 */
//while
/* 
var contador = 1;
 while (contador < 6) {
    console.log('contador es: '+ contador);
    contador++;
 }
 */

 // do while
/* 
var count = 1;
do {
    console.log('count es: ' + count);
    count++;
}
while(count<8);
 */
// switch
/* 
switch(expresion){
    case a: bloque de codigo
    break

}
 */
/* 
function diaSemana(dia) {
    switch(dia){
        case 'lunes':
            console.log('Hoy es lunes');
            break;
        case 'martes':
            console.log('Hoy es martes');
            break;
        case 'miercoles':
            console.log('Hoy es miercoles');
            break;
        case 'jueves':
            console.log('Hoy es jueves');
            break;
        case 'viernes':
            console.log('Hoy es viernes');
            break;
        case 'sabado':
            console.log('Hoy es sabado');
            break;
    }
}
console.log(diaSemana('sabado'));
 */

// arrays

var comidas = ['Pizza','Hamburguesa','Hot Dog','Lasagna'];

/*
var comidaFavorita = comidas[1];
console.log(comidaFavorita);

for (var i=0; i< comidas.length; i++){
    console.log(comidas[i]);
}
// for ..of
for (comida of comidas){
    console.log(comida);
}
 */

// METODOS PARA ARRAYS
/* 
//agregar al final
comidas.push('sandwich', 'empanada', 4, 'hola');
console.log(comidas);
//quitar el ultimo
comidas.pop();
console.log(comidas);
//agregar al principio
comidas.unshift('buñuelo','pan','milanesa');
console.log(comidas);
//quitar el primero
comidas.shift();
console.log(comidas);
//reemplazar el elemento de un indice especifico
comidas[1] = 'Platano';
console.log(comidas);
 */

// .forEach() recorre un array
//recibe una funcion que se va a encargar de realizar algo determinado
/* 
var autos = ['ford', 'chevrolet', 'Toyota', 'tesla'];
console.log(autos);

function mostrarNombres(elemento){
    console.log(elemento);
}
autos.forEach(mostrarNombres);
console.log(autos);
 */
// .map() sirve para aplicar una funcion a un arreglo, y crear otro arreglo nuevo en base al resultado
//recibe una funcion que se va a encargar de realizar algo determinado
/* 
var numeros = [1, 2, 3, 4, 5];
console.log(numeros);

function multi(elemento) {
    return elemento * 3;
}
var triple = numeros.map(multi);
console.log(triple);
 */

// .reduce ejecutara un buccle en un arreglo con la intencion de reducir cada elemento en un elemento que se devuelve
//recibe una funcion que se va a encargar de realizar algo determinado

/* 
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumatoria (acc, elemento){
    return acc + elemento;
}
var suma = numeros.reduce(sumatoria);

console.log(suma);
 */

// Objeto Argument

// function saludo (nombre, apellido) {
//     console.log(arguments);
// }

// saludo('Auri', 'Sandoval');


////             OBJETOS          ////

var usuario = {
    nombre: 'Andres',
    password: 'hola1234',
    edad: 26,
    online: true,
    amigos: ['Maria', 'Jose', 'Luis']
};

// Formas de acceder a los elementos:
//notacion de punto .   -->  objeto.propiedad
// console.log(usuario.nombre, usuario.edad);
//notacion de corchete []  -->  objeto['propiedad']
// console.log(usuario['amigos'],usuario['online']);


// Asignando y modificando valores del objeto

usuario.pais = 'Colombia';
usuario['identificacion'] = 314324123;
usuario.edad = 28;

var profesion = 'developer';

usuario.profesion = profesion;

usuario['5hola123'] = true;

function agregarProfesion(profesion, valor) {
    usuario[profesion] = valor;
}

// Eliminar propiedades de un objeto  delete 

delete usuario['5hola123'];
// delete usuario.amigos;


// Metodos de los Objetos

usuario.decirHola = function(name) {
    return 'Hola ' + name;
}
// console.log(usuario);
// console.log(usuario.decirHola('Lucas'));

// objeto.hasOwnProperty('propiedad') //sirve para preguntar si existe o no una propiedad en un objeto

// console.log(usuario.hasOwnProperty('pais'));


// console.log(Object.keys(usuario)); // traemos todas la propiedades del objeto

// console.log(Object.values(usuario));  //traemos todos los valores del objeto

// usuario.amigos.push('joel');
// console.log(usuario.amigos);
// console.log(usuario.amigos.length)


// bucle for ... in

// for (var clave in usuario) {
//     if (clave === 'nombre')
//     console.log(usuario[clave]);
// };


//      this.propiedad   -- nos sirve para traer una propiedad que se encuentra dentro del objeto

usuario.decirHola = function() {
    return 'Hola ' + this.nombre + ' tienes ' + this.edad;
}

console.log(usuario.decirHola());

