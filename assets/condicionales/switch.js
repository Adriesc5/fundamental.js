/*const type_payment ='cash'
switch(type_payment){
    case 'cash':
        document.writeln('Tipo de pago con efectivo')
        break;
        case 'CC':
            document.writeln('Tipo de pago con tarjeta')
            break;
            default:
            document.writeln('Sin tipo de pago')
}*/
let edad =prompt('Indica tu edad')
switch(edad){
    case '0':
        document.writeln('Acabas de nacer')
        break;
    case '18':
        document.writeln('ya eres mayor de edad')
        break;
    case '65':
            document.writeln('Edad de jubilacion')
        break;
    default:
            document.writeln('Edad no es correcta')
}