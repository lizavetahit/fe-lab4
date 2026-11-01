/* Завдання 1 */


var colorsVideo = [
    { bg: '#0000ff', color: '#ffffff' },
    { bg: '#ffe08a', color: '#1a237e' }
];
var colorsDance = [
    { bg: '#22ee33', color: '#000000' },
    { bg: '#4a148c', color: '#c8e6c9' }
];
var videoClicks = 0;
var danceClicks = 0;


var video = document.getElementById('hobby-video');
video.addEventListener('click', function () {
    var c = colorsVideo[videoClicks % 2];
    video.style.backgroundColor = c.bg;
    video.style.color = c.color;
    videoClicks++;
});


var dance = document.querySelector('.hobby-dance');
dance.addEventListener('click', function () {
    var c = colorsDance[danceClicks % 2];
    dance.style.backgroundColor = c.bg;
    dance.style.color = c.color;
    danceClicks++;
});


/* Завдання 2 */

var photoLink = document.getElementById('photo-link');
var STEP = 50;      // на скільки пікселів змінюється ширина
var MIN_WIDTH = 100;
var MAX_WIDTH = 1000;
var START_WIDTH = 600;


function getImage() {
    return document.getElementById('city-img');
}


document.getElementById('btn-add').addEventListener('click', function () {
    if (getImage() !== null) {
        return;
    }
    var img = document.createElement('img');
    img.src = 'images/rome.jpg';
    img.alt = 'Колізей у Римі';
    img.id = 'city-img';
    img.width = START_WIDTH;
    photoLink.appendChild(img);
});


document.getElementById('btn-increase').addEventListener('click', function () {
    var img = getImage();
    if (img !== null && img.width + STEP <= MAX_WIDTH) {
        img.width = img.width + STEP;
    }
});


document.getElementById('btn-decrease').addEventListener('click', function () {
    var img = getImage();
    if (img !== null && img.width - STEP >= MIN_WIDTH) {
        img.width = img.width - STEP;
    }
});


document.getElementById('btn-delete').addEventListener('click', function () {
    var img = getImage();
    if (img !== null) {
        img.remove();
    }
});
