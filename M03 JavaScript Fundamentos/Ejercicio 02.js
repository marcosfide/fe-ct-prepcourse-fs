/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string
}

devolverString('esto es un string')

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var resultadoSuma = x + y
   return resultadoSuma
}

suma(5, 6)

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var resultadoResta = x - y
   return resultadoResta
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var resultadoDivision = x / y
   return resultadoDivision
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var resultadoMultiplicacion = x * y
   return resultadoMultiplicacion
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var restoDivision = x % y
   return restoDivision
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
