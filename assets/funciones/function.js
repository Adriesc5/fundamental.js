/*function sqaure(number){
    return number * number;
}
document.write(square(2))
*
//Funciones con saludar
function saludar(){
    document.write('Saludar')
}
//podemos poner el parametro para que nos lo imprima
function saludar_nombre(nombre, paterno){
    console.log(arguments)
    document.writeln('</br>')
    document.writeln('Hola '+ nombre + ' '+ paterno +', como estas?')
    document.writeln('</br>')
}
saludar_nombre('Adrian','Escobedo')

let saludar_flecha = (nombre) =>{
    document.writeln('Salduar desde la funcion flecha '+nombre)
}

saludar_flecha('Adrian')
let fecha = new Date();//formato tipo fecha
let hora = fecha.getHours()
*/
function valida_hora(hora){
    if(hora<=5){
        document.writeln('Buenos madrugadas')
    }else if(hora > 5 && hora < 12){
        document.writeln('Buenos dias')
    }else if(hora >12 && hora < 20){
        document.writeln('Buenos noches') 
    }
}
valida_hora();