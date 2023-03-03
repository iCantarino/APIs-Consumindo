const url = 'https://economia.awesomeapi.com.br/json/last/'
const coins = 'USD-BRL,BRL-USD,EUR-BRL,BRL-EUR,USD-EUR,EUR-USD'

var primeiraMoeda = document.getElementById('idMoeda')
var labelPrimeira = document.getElementById('moedaUm')
var num1 = document.getElementById('valueMoeda1')

var segundaMoeda = document.getElementById('idMoeda2')
var labelSegunda = document.getElementById('moedaDois')

var ultimaDiv = document.getElementById('output')
var subUltimaDiv = document.getElementById('outputContent')

const checaNome = () => {
    switch (primeiraMoeda.value) {
        case 'USD':
            labelPrimeira.innerHTML = "Dólar Americano"
            break;
        case 'BRL':
            labelPrimeira.innerHTML = "Real Brasileiro"
            break;
        case 'EUR':
            labelPrimeira.innerHTML = "Euro"
            break;
        default:
            console.log('oops');
    }
    switch (segundaMoeda.value) {
        case 'USD':
            labelSegunda.innerHTML = "Dólar Americano"
            break;
        case 'BRL':
            labelSegunda.innerHTML = "Real Brasileiro"
            break;
        case 'EUR':
            labelSegunda.innerHTML = "Euro"
            break;
        default:
            console.log('oops2');
    }
}

const sC = () => {
    switch (segundaMoeda.value) {
        case 'USD':
            return '$'
            break;
        case 'BRL':
            return 'R$'
            break;
        case 'EUR':
            return '€'
            break;
        default:
            console.log('oi')
    }
}

const conversor = () => {
    fetch(url + coins)
        .then(function(response){
            return response.json();
        })
        .then(data => {
            const dolarReal = data.USDBRL;
            const realDolar = data.BRLUSD;
            const euroReal = data.EURBRL;
            const realEuro = data.BRLEUR;
            const dolarEuro = data.USDEUR;
            const euroDolar = data.EURUSD;

            checaNome();
            
            if(isNaN(parseFloat(num1.value))){
                num1.value = 0;
            }
            if(primeiraMoeda.value == segundaMoeda.value) {
                ultimaDiv.innerHTML = `1 ${primeiraMoeda.value} igual a 1.00 ${segundaMoeda.value}`
                subUltimaDiv.innerHTML = sC() + `${num1.value},00`
            }
            if(primeiraMoeda.value == "USD" && segundaMoeda.value == "BRL") {
                ultimaDiv.innerHTML = `1 ${dolarReal.code} igual a ` + parseFloat(dolarReal.bid).toLocaleString('pt-br') + ` ${dolarReal.codein}`;
                var result = parseFloat(num1.value) * parseFloat(dolarReal.bid);
                subUltimaDiv.innerHTML = "R$"+result.toFixed(2)
            }
            if(primeiraMoeda.value == "BRL" && segundaMoeda.value == "USD") {
                ultimaDiv.innerHTML = `1 ${realDolar.code} igual a ` + parseFloat(realDolar.bid).toLocaleString('pt-br') + ` ${realDolar.codein}`;
                result = parseFloat(num1.value) * parseFloat(realDolar.bid)
                subUltimaDiv.innerHTML = "$"+result.toFixed(2)
            }
            if(primeiraMoeda.value == "EUR" && segundaMoeda.value == "BRL") {
                ultimaDiv.innerHTML = `1 ${euroReal.code} igual a ` + parseFloat(euroReal.bid).toLocaleString('pt-br') + ` ${euroReal.codein}`;
                result = parseFloat(num1.value) * parseFloat(euroReal.bid)
                subUltimaDiv.innerHTML = "R$"+result.toFixed(2)
            }
            if(primeiraMoeda.value == "BRL" && segundaMoeda.value == "EUR") {
                ultimaDiv.innerHTML = `1 ${realEuro.code} igual a ` + parseFloat(realEuro.bid).toLocaleString('pt-br') + ` ${realEuro.codein}`;
                result = parseFloat(num1.value) * parseFloat(realEuro.bid)
                subUltimaDiv.innerHTML = "€"+result.toFixed(2)
            } 
            if(primeiraMoeda.value == "EUR" && segundaMoeda.value == "USD") {
                ultimaDiv.innerHTML = `1 ${euroDolar.code} igual a ` + parseFloat(euroDolar.bid).toLocaleString('pt-br') + ` ${euroDolar.codein}`;
                result = parseFloat(num1.value) * parseFloat(euroDolar.bid)
                subUltimaDiv.innerHTML = "$"+result.toFixed(2)
            }
            if(primeiraMoeda.value == "USD" && segundaMoeda.value == "EUR") {
                ultimaDiv.innerHTML = `1 ${dolarEuro.code} igual a ` + parseFloat(dolarEuro.bid).toLocaleString('pt-br') + ` ${dolarEuro.codein}`;
                result = parseFloat(num1.value) * parseFloat(dolarEuro.bid)
                subUltimaDiv.innerHTML = "€"+result.toFixed(2)
            }
            
        })
}
