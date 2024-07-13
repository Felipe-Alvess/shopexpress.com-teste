// função abrir menu

function openMenu(){
    if (openn.style.display == 'flex') {
        openn.style.display = 'none'
    } else {
        openn.style.display = 'flex'
    }
}

// função abrir menu

const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');
let idx = 0;

// slide Carrossel

function carrossel(){
idx++;
if(idx > img.length - 1){
idx = 0
}
imgs.style.transform = `translateX(${-idx * 100}%)`
}
setInterval(carrossel, 5000);
// slide Carrossel

// slide Carrossel 768px
const imgsss = document.getElementById('imgg');
const imggg = document.querySelectorAll('#imggg img');
let idxxx = 0;

function carrossell(){
idxxx++;
if(idxxx > imggg.length - 1){
idxxx = 0
}
imgsss.style.transform = `translateX(${-idxxx * 800}px)`
}
setInterval(carrossell, 4000);
// slide Carrossel 768px

// slide Carrossel 468px
const imgss = document.getElementById('imgg');
const imgg = document.querySelectorAll('#imgg img');
let idxx = 0;

function carrossell(){
idxx++;
if(idxx > imgg.length - 1){
idxx = 0
}
imgss.style.transform = `translateX(${-idxx * 410}px)`
}
setInterval(carrossell, 4000);
// slide Carrossel 468px

// TypingText
new TypeIt('#typingText',{
speed: 200,
loop: false,
})
.type('',{delay:(5000)})
.type('Produtos mais vistos',{delay:(4000)})
.go();
// TypingText

// SearchBar

document.getElementById('search').addEventListener('keyup', function() {
let searchQuery = this.value.toLowerCase();
let items = document.querySelectorAll('#searchItem li');

items.forEach(function(item){
let text = item.textContent.toLowerCase();
if(text.includes(searchQuery)){
item.style.display = '';
}else{
item.style.display = 'none'
}
});
});

// SearchBar

// alternando entre links

function clickOffer(){
if(Ofertas.style.display == 'flex') {
Ofertas.style.display = 'none'
}else{
Ofertas.style.display = 'flex'}

if(Smartphones.style.display = 'flex'){
Smartphones.style.display = 'none'}

if(Television.style.display = 'flex'){
Television.style.display = 'none'}
}

function clickSmartphones(){
if(Smartphones.style.display == 'flex') {
Smartphones.style.display = 'none'
}else{
Smartphones.style.display = 'flex'}

if(Ofertas.style.display = 'flex'){
Ofertas.style.display = 'none'}

if(Television.style.display = 'flex'){
Television.style.display = 'none'}

if(typingText.style.display = 'flex'){
typingText.style.display = 'none'}
}

function clickTelevision(){
if (Television.style.display == 'flex') {
Television.style.display = 'none'
}else{
Television.style.display = 'flex'}

if(Ofertas.style.display = 'flex'){
Ofertas.style.display = 'none'}

if(Smartphones.style.display = 'flex'){
Smartphones.style.display = 'none'}

if(typingText.style.display = 'flex'){
    typingText.style.display = 'none'}
}

// alternando entre links

// Adicionando valor ao carrinho

document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('itemList');
    const cartCount = document.getElementById('cartCount');
    cartButton.addEventListener('click', () => {
        let currentCount = parseInt(cartCount.textContent, 10);
        cartCount.textContent = currentCount + 1;
    });

    const cartButtonn = document.getElementById('itemListt');
    cartButtonn.addEventListener('click', () => {
        let currentCount = parseInt(cartCount.textContent, 10);
        cartCount.textContent = currentCount + 1;
    });

    const cartButtonnn = document.getElementById('itemListtt');
    cartButtonnn.addEventListener('click', () => {
        let currentCount = parseInt(cartCount.textContent, 10);
        cartCount.textContent = currentCount + 1;
    });
});




// Adicionando valor ao carrinho