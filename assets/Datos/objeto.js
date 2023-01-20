let invoice = { 
    number: '1',
    client: 'LIVINGLAB',
    currency:'USD',
    coords:{
        lat: 42.0,
        lon: -108.1
    },
    services:['LAPTOPS','COFEE','GAS','INTERNET'],
    location: {cp:'31100', address:'AV AMERICAS'},
    subtotal: 500,
    IVA: 80
            }
console.log(invoice)
//Podemos acceder a metodos de diferente maneras
console.log('Cliente',invoice.client);
console.log('Cliente',invoice['client']);
console.log('Latitud',invoice.coords.lat);
//Cacula el ultimo servicio que le ofrecimos a la empresa
console.log('Ultimo servicio:',
invoice.services[invoice.services.length -1]);

document.writeln(invoice.coords.lat)
document.writeln('<br>')

document.writeln(invoice.services[invoice.services.length -1]);
document.write(invoice.services[invoice.services.length -1]);

delete invoice.IVA;
invoice.info ='valor'
invoice.pedos='caca'



