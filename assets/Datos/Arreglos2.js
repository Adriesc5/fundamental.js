/*let currencies = ['MXN','USD','EUR','CAD']
console.log(currencies);

//Conocer el tamano de un arreglo lenght

let size = currencies.length;

//Si queiro acceder a la ultima posicion del arreglo

let last =currencies[currencies.length - 1]
console.log(last);

//Agregar un nuevo valor en el arreglo

let new_currency = currencies.push('JPY');
console.log({new_currency, currencies});

//Vimos el punto lenght y el push, siempre lo arregla al final

let add_init = currencies.unshift('NZD');
//EL unshift lo agrega al principio 
//Borra la ultima pocision pop
let delete_last_pos =currencies.pop();

//Borrar el valor de una pocision especifica

let delete_esp_pos =currencies.splice(1,2);
//Pocision indice de una moneda
let currency_pos = currencies.indexOf('EUR')
console.log({currency_pos,currencies});*/
//Se crea ejercicio que nos pida tres numeros en pantalla

let arr = [];
let v1 = prompt('que valor deseas agregar primero?')
arr.push(v1);

let v2 = prompt('')
arr.push(v2);

let v3 = prompt('')
arr.push(v3);
let suma = parseInt(v1) + parseInt(v2) + parseInt(v3);
document.write('<h1>el primer valor es:</h1>'+arr[0]);
document.write('<h2>el ultimo valor es:</h2>'+arr[2]);
document.write('<h3>la suma es:</h3>'+suma);
