console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'Hi im Anandhu P B';
var img = document.getElementById('madi');
var marginleft = 0;
function moveright () {
    marginleft = marginleft + 10;
    img.style.marginleft = marginleft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 100);
};