// for

for(var i = 0; i < "hola".length; i++){
    console.log("hola"[i]);
}

//while

var contador = 1;
 while (contador < 6) {
    console.log('contador es: '+ contador);
    contador++;
 }


 // do while

var count = 1;
do {
    console.log('count es: ' + count);
    count++;
}
while(count<8);

// switch
/* 
switch(expresion){
    case a: bloque de codigo
    break

}
 */

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


// arrays

var comidas = ['Pizza','Hamburguesa','Hot Dog','Lasagna'];
console.log(comidas);

var comidaFavorita = comidas[1];
console.log(comidaFavorita);

for (var i=0; i< comidas.length; i++){
    console.log(comidas[i]);
}
// for ..of
for (comida of comidas){
    console.log(comida);
}