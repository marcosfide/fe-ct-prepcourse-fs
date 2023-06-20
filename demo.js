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

function saludo (nombre, apellido) {
    console.log(arguments);
}

saludo('Auri', 'Sandoval');