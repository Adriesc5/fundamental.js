/*let score = 7
if (score> 8){
    document.write('Alumno aprobado con: '+score)
} else {
    document.writeln('Alumno reprobado con '+ score)
}
document.write('<br>')
let num =100
if(num=='100'){
    document.writeln('SON IGUALES')
} else {

}

//Dos formas de hacer todo

1)
let saldo = 2500
let retiro = prompt('Cuanto deseas retirar?')
if(retiro>saldo){document.writeln('No cuentas con dinero suficiente, pobre')
}else{document.writeln('El retiro esta disponible')}
Se trabajo un ejercicio con una cuenta de banco*/
//ESTRUCTURA
//condicion ? expr1 : expr2
//2)
let saldo = 1000;
let retiro = prompt('Cuanto deseas retirar?')
var disponible = saldo > retiro ? "Si cuentas con el dinero suficiente" : "No cuentas con el dinero suficiente";
document.write(disponible)
