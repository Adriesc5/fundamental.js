//Manejo de numeros
//En JS todos los numeros se crean igual 
/* cancelado todo
let number_1 =20
let number_2 = 30
let number_3 = 40.2
let number_4 = 50.1
//Suma
resultado = number_1 + number_4
//Resta
resultado = number_1 - number_2
//Multiplicacion
resultado = number_2 * number_3
//Division
resultado = number_1 /  number_3

let pi = Math.PI

pi = Math.round(pi)
console.log(pi)

resultado1 = Math.pow(3,8)
console.log(resultado1)
*/
let p1 = prompt('Cual es el costo de la primer prenda?')
let p2 = prompt('Cual es el costo de la segunda prenda?')
let p3 = prompt('Cual es el costo de la tercer prenda?')
let suma =parseInt(p1)+parseInt(p2)+parseInt(p3)
document.write('<h1>El costo de las 3 prendas es:</h1>'+suma)
document.write('</br>')
let descuento = .20
let subtotal = suma - (suma*descuento)
document.write('<h2>El subtotal con un descuento del 20% es:</h2>'+subtotal)
document.write('</br>')
let iva = .16
let pt = subtotal + (subtotal*iva)
document.write('<h3>El precio total de las prendas con IVA, seria:</h3>'+pt)
document.write('</br>')
