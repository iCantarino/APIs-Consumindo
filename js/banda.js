var divPesquisa = document.querySelector('#researchOutput p');
var data;

fetch('json/info.json')
  .then(res => res.json())
  .then(result => {
    data = result.bandas;
    console.log(data);
  });

function toggleBoxCard() {
  var newBox = document.createElement('div');
  newBox.classList.toggle('boxcard-base');
  newBox.id = 'boxToggle';

  var cardBox1 = document.createElement('div');
  cardBox1.id = 'cardOne';
  newBox.classList.toggle('boxcard-content');
  
  document.body.insertAdjacentHTML("afterbegin", newBox);

  var cardBox2 = document.createElement('div');
  cardBox2.id = 'cardTwo';
  newBox.classList.toggle('boxcard-content');

  document.body.insertAdjacentHTML("afterbegin", newBox);
}

function interfaceBand() {
  var researchText = document.getElementById("researcher").value;

  document.getElementById("intro").innerHTML = "";
  document.getElementById("researchOutput").style.visibility = "visible";
  document.getElementById("btn-return").style.visibility = "visible";
  document.body.style.backgroundSize = "auto";

  switch (researchText) {
    case 'Nirvana':
      document.body.style.backgroundImage = "url('./imgs/giphy.gif')";

      var newDiv = document.createElement('div');
      newDiv.classList.toggle('songlist');

      var newAudio = document.createElement('audio');
      newAudio.id = 'audio-one';
      newAudio.controls = 'controls';
      newAudio.src = 'audios/nir/comeasyouare.mp3';
      newAudio.type = 'audio/mpeg';
      newAudio.style.marginTop = '8%';
      
      var newAudio2 = document.createElement('audio');
      newAudio2.id = 'audio-two';
      newAudio2.controls = 'controls';
      newAudio2.src = 'audios/nir/liketeenspirit.mp3';
      newAudio2.type = 'audio/mpeg';
      newAudio2.style.marginTop = '8%';

      newDiv.appendChild(newAudio);
      newDiv.appendChild(newAudio2);
      var currentDiv = document.getElementById("div1");
      document.body.insertAdjacentElement("beforeend", newDiv)
      break;
    case 'Linkin Park':
      document.body.style.backgroundImage = "url('./imgs/lpwebp.webp')";
    
      var newDiv = document.createElement('div');
      newDiv.classList.toggle('songlist');

      var newAudio = document.createElement('audio');
      newAudio.id = 'audio-one';
      newAudio.controls = 'controls';
      newAudio.src = 'audios/lp/numb.mp3';
      newAudio.type = 'audio/mpeg';
      newAudio.style.marginTop = '8%';
      
      var newAudio2 = document.createElement('audio');
      newAudio2.id = 'audio-two';
      newAudio2.controls = 'controls';
      newAudio2.src = 'audios/lp/intheend.mp3';
      newAudio2.type = 'audio/mpeg';
      newAudio2.style.marginTop = '8%';

      newDiv.appendChild(newAudio);
      newDiv.appendChild(newAudio2);
      var currentDiv = document.getElementById("div1");
      document.body.insertAdjacentElement("beforeend", newDiv)
      break;
    case 'Tame Impala':
      document.body.style.backgroundImage = "url('./imgs/tamgiphy.webp')";
    
      var newDiv = document.createElement('div');
      newDiv.classList.toggle('songlist');

      var newAudio = document.createElement('audio');
      newAudio.id = 'audio-one';
      newAudio.controls = 'controls';
      newAudio.src = 'audios/tp/imchanging.mp3';
      newAudio.type = 'audio/mpeg';
      newAudio.style.marginTop = '8%';
      
      var newAudio2 = document.createElement('audio');
      newAudio2.id = 'audio-two';
      newAudio2.controls = 'controls';
      newAudio2.src = 'audios/tp/thelessiknow.mp3';
      newAudio2.type = 'audio/mpeg';
      newAudio2.style.marginTop = '8%';

      newDiv.appendChild(newAudio);
      newDiv.appendChild(newAudio2);
      var currentDiv = document.getElementById("div1");
      document.body.insertAdjacentElement("beforeend", newDiv)
      break;
    default:
      console.log('erro, banda nao existente');
  }
}

function researchFunction() {
  var researchText = document.getElementById("researcher").value;

  switch (researchText) {
    case 'Nirvana':
      interfaceBand();
      divPesquisa.innerHTML += "<u>nome</u>" + "<br/><br/>" + data[0].nome + "<br/><br/>";
      divPesquisa.innerHTML += "<u>gênero</u>" + "<br/><br/>" + data[0].genero + "<br/><br/>";
      divPesquisa.innerHTML += "<u>vocalista</u>" + "<br/><br/>" + data[0].integrantes + "<br/><br/>";
      divPesquisa.innerHTML += "<img src='imgs/nirvana.png' alt='Minha Figura'>" + "<br/>";
      break;
    case 'Linkin Park':
      interfaceBand();
      divPesquisa.innerHTML += "<u>nome</u>" + "<br/><br/>" + data[1].nome + "<br/><br/>";
      divPesquisa.innerHTML += "<u>gênero</u>" + "<br/><br/>"  + data[1].genero + "<br/><br/>";
      divPesquisa.innerHTML += "<u>vocalista</u>" + "<br/><br/>" + data[1].integrantes + "<br/><br/>";
      divPesquisa.innerHTML += "<img src='imgs/linkinpark.png' alt='Minha Figura'>" + "<br/>";
      break;
    case 'Tame Impala':
      interfaceBand();
      divPesquisa.innerHTML += "<u>nome</u>" + "<br/><br/>" + data[2].nome + "<br/><br/>";
      divPesquisa.innerHTML += "<u>gênero</u>" + "<br/><br/>" + data[2].genero + "<br/><br/>";
      divPesquisa.innerHTML += "<u>vocalista</u>" + "<br/><br/>" + data[2].integrantes + "<br/>";
      divPesquisa.innerHTML += "<img src='imgs/tameim.png' alt='Minha Figura'>" + "<br/>";
      break;
    default:
      alert('Banda não encontrada, procure por outra')
  }
} 