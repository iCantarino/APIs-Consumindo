var impressao = document.getElementById('output')


const gerarClima = () => {
    var cidade = document.getElementById('pesquisarCidade').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            const temperatura = data.main.temp
            const country = data.sys.country

            impressao.innerHTML = `Cidade - ${cidade} [${country}]` + "<br/>"

            impressao.innerHTML += `Temperatura atual - ${temperatura}C°`+ "<br/>"
        })
}
