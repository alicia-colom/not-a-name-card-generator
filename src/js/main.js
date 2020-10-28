/* eslint-disable indent */

'use strict';

// Objeto DATA:

let data = {
  name: 'Nombre Apellido',
  job: 'Front-end developer',
  phone: '#',
  email: '#',
  linkedin: '#',
  github: '#',
  photo: 'url(../images/NAN-card-photo-default.jpg)',
  palette: 1,
};

// Colapsables
// constantes de header (cada uno funciona por separado), arrow (no usado aun) y content (cada uno funciona por separado)
const header1 = document.querySelector('.js-header1');
const header2 = document.querySelector('.js-header2');
const header3 = document.querySelector('.js-header3');
// const arrow = document.querySelector('.js-arrow');
const content1 = document.querySelector('.js-content1');
const content2 = document.querySelector('.js-content2');
const content3 = document.querySelector('.js-content3');

// funcion para el colapsable de diseña
function collapse1() {
  content1.classList.toggle('collapsed');
  // si diseña NO contiene la clase .collapsed, se le añade a los otros dos apartados
  if (!content1.classList.contains('collapsed')) {
    content2.classList.add('collapsed');
    content3.classList.add('collapsed');
  }
}
// añadimos llamador de evento a el header de diseña
header1.addEventListener('click', collapse1);

// repetimos lo mismo, para rellena
function collapse2() {
  content2.classList.toggle('collapsed');
  if (!content2.classList.contains('collapsed')) {
    content1.classList.add('collapsed');
    content3.classList.add('collapsed');
  }
}
header2.addEventListener('click', collapse2);

// y para comparte
function collapse3() {
  content3.classList.toggle('collapsed');
  if (!content3.classList.contains('collapsed')) {
    content1.classList.add('collapsed');
    content2.classList.add('collapsed');
  }
}
header3.addEventListener('click', collapse3);

// END Colapsable

// Selector de color

const stick = document.querySelector('.js-stick');
const previewName = document.querySelector('.js-preview-name');
const iconList = document.querySelectorAll('.js-icon');
const paletteCold = document.querySelector('.js-option1');
const paletteWarm = document.querySelector('.js-option2');
const paletteMild = document.querySelector('.js-option3');
const paletteColdValue = parseInt(paletteCold.value);
const paletteWarmValue = parseInt(paletteWarm.value);
const paletteMildValue = parseInt(paletteMild.value);

function selectPaletteCold() {
  data.palette = paletteColdValue;
  paintPalette();
}
function selectPaletteWarm() {
  data.palette = paletteWarmValue;
  paintPalette();
}
function selectPaletteMild() {
  data.palette = paletteMildValue;
  paintPalette();
}
function paintPalette() {
  if (data.palette === 1) {
    stick.classList.add('stick-border-cold');
    stick.classList.remove('stick-border-mild');
    stick.classList.remove('stick-border-warm');
    previewName.classList.add('name-cold');
    previewName.classList.remove('name-mild');
    previewName.classList.remove('name-warm');
    for (const eachIcon of iconList) {
      eachIcon.classList.add('icon-cold');
      eachIcon.classList.remove('icon-mild');
      eachIcon.classList.remove('icon-warm');
    }
  } else if (data.palette === 2) {
    stick.classList.remove('stick-border-cold');
    stick.classList.remove('stick-border-mild');
    stick.classList.add('stick-border-warm');
    previewName.classList.remove('name-cold');
    previewName.classList.remove('name-mild');
    previewName.classList.add('name-warm');
    for (const eachIcon of iconList) {
      eachIcon.classList.remove('icon-cold');
      eachIcon.classList.remove('icon-mild');
      eachIcon.classList.add('icon-warm');
    }
  } else if (data.palette === 3) {
    stick.classList.remove('stick-border-cold');
    stick.classList.add('stick-border-mild');
    stick.classList.remove('stick-border-warm');
    previewName.classList.remove('name-cold');
    previewName.classList.add('name-mild');
    previewName.classList.remove('name-warm');
    for (const eachIcon of iconList) {
      eachIcon.classList.remove('icon-cold');
      eachIcon.classList.add('icon-mild');
      eachIcon.classList.remove('icon-warm');
    }
  }
  storeData();
}
paletteCold.addEventListener('click', selectPaletteCold);
paletteWarm.addEventListener('click', selectPaletteWarm);
paletteMild.addEventListener('click', selectPaletteMild);

// END Selector de color

// Text input
const inputList = document.querySelectorAll('.js-field');

// Constantes con valores de DATA de inicio:
const previewText = document.querySelectorAll('.js-preview-text');
console.log(previewText);
const nameInit = previewText[0].innerHTML;
console.log('Esto es nameInit ' + nameInit);
const jobInit = previewText[1].innerHTML;
console.log('Esto es jobInit ' + jobInit);
const previewHref = document.querySelectorAll('.js-preview-href');
console.log(previewHref);
const hrefInit = '#';

// Función de carga de datos al iniciar el navegador:
chargeData();

// Función para recoger valores introducidos en los inputs:
function getInfo(event) {
  data[event.currentTarget.id] = event.currentTarget.value;
  paint();
  storeData();
}

for (const eachElement of inputList) {
  eachElement.addEventListener('keyup', getInfo);
}

// Función para pintar en la tarjeta de PREVIEW:
function paint() {
  previewText[0].innerHTML = data.name || nameInit;
  previewText[1].innerHTML = data.job || jobInit;
  previewHref[0].href = 'tel:' + data.phone || hrefInit;
  previewHref[1].href = 'mailto:' + data.email || hrefInit;
  previewHref[2].href = 'https://' + data.linkedin || hrefInit;
  previewHref[3].href = 'https://github.com/' + data.github || hrefInit;
  profileImage.style.backgroundImage =
    `url(${data.photo})` || 'url(../images/NAN-card-photo-default.jpg)';
}

// END Text input

// Reset
const btnReset = document.querySelector('.js-reset');

function handleReset() {
	console.log('reset');
	data.name = nameInit;
	data.job = jobInit;
	data.phone = hrefInit;
	data.email = hrefInit;
	data.linkedin = hrefInit;
	data.github = hrefInit;
	data.photo = '../images/NAN-card-photo-default.jpg';
	data.palette = 1;
	console.log(data);
	for (const input of inputList) {
		input.value = '';
	}
	// profileImage.style.backgroundImage =
	// 	'url(https://i.picasion.com/pic90/c5111e71a51b403560ec5dc5e27fdae1.gif)';
	// profilePreview.style.backgroundImage =
	// 	'url(https://i.picasion.com/pic90/c5111e71a51b403560ec5dc5e27fdae1.gif)';
	paintPalette();
	paint();
	storeData();
}

btnReset.addEventListener('click', handleReset);

// END Reset

// Local Storage
function storeData() {
  console.log('guarda');
  const jsonData = JSON.stringify(data);
  localStorage.setItem('filledData', jsonData);
  console.log(jsonData);
}

function chargeData() {
  console.log('carga');
  const storedData = localStorage.getItem('filledData');
  console.log(storedData);
  const lastData = JSON.parse(storedData);
  if (lastData !== null) {
    data = lastData;
  }
  console.log(lastData);
  paintPalette();
  paint();
}

// END Local Storage

// card generator

// constante selectora del boton CREAR TARJETA
const submitButton = document.querySelector('.js-submit');
// constante selectora del ELEMENTO html con la URL
const responseURL = document.querySelector('.js-response');
// constante selectora del formulario completo
const form = document.querySelector('.js-form');

//
function sendData() {
  sendRequest(data);
}

// Función para envío de datos a la API
function sendRequest() {
  console.log('entro en funcion antes de fetch');
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const hiddenBox = document.querySelector('.js-share-url');
const inactiveButton = document.querySelector('.js-share');

function showURL(result) {
  if (result.success) {
    responseURL.innerHTML = result.cardURL;
    responseURL.href = result.cardURL;
    hiddenBox.classList.remove('hidden');
    inactiveButton.classList.add('inactive');
    submitButton.removeEventListener('click', sendRequest);
  } else {
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}
submitButton.addEventListener('click', sendRequest);

// END card generator

// twitter

// END twitter
