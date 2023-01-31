//Imprimir los numeros del 0 al 10
/*let i
for (i=1;i<=10;i++){
    document.write(i)
    document.write('</br>')
}*/
/*const enterprises = ['TESLA','AMAZON','MICROSOFT','META']
console.warn('FRO TRADITIONAL')
for(let i=0;i< enterprises.length;i++){
    console.log(enterprises[i])
}
console.warn('FOR IN')
for(let i in enterprises){
    console.log(enterprises[i])
}
console.warn('FOR OF')
for(let enterprise of enterprises){
    console.log(enterprise)
}*///haciendolo sin arreglo
let i
/*for(i=1;i<=6;i++){
    document.write('<h'+i+'>'+'Encabezado de nivel '+i+'</h'+i+'>')
}*///haciendolo con arreglo 
let nombre =['nivel 1','nivel 2','nivel 3','nivel 4','nivel 5','nivel 6']

for(i=1;i<=6;i++){
    document.write('<h'+i+'>Encabezado de '+nombre[i-1]+'</h'+i+'>')
}
