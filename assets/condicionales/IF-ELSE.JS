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
/*let saldo = 1000;
let retiro = prompt('Cuanto deseas retirar?')
var disponible = saldo > retiro ? "Si cuentas con el dinero suficiente" : "No cuentas con el dinero suficiente";
document.write(disponible)
const dinero = 10000
let retirar = prompt('Cuanto deseas retirar?')
if( retirar<=dinero){
    document.writeln('No cuentas con dinero suficiente para retirar')
}else if( retirar>2000 && retirar <= 5000){
    document.writeln('Se puede realizar el retiro')
}else if( retirar>= 5000){
    writeln('No se permite reti')
}*/

let calificacion = prompt('Cual es tu calificacion')
if(calificacion <= 5.9){
document.writeln('Estas reprobado')
}else if( calificacion >=6 && calificacion <=8){
    document.writeln('Aprobado con condicional')
}else if( calificacion >8 && calificacion <=10){
    document.writeln('Estas aprobado')
}else if( calificacion>10){
    document.writeln('Calificacion no valida')
}else if (typeof calificacion!== Number){
    document.writeln('No es numero')
}
