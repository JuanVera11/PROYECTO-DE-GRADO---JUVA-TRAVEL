const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slider-section');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
let currentSlide = 0;

function showSlide(slideIndex) {
    if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        currentSlide = 0;
    }
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

btnLeft.addEventListener('click', prevSlide);
btnRight.addEventListener('click', nextSlide);

// Automatizar el carrusel cada 4 segundos
function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 5000); // Cambia la imagen cada 4 segundos (4000ms)
}

autoSlide(); // Inicia la automatización al cargar la página

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .8s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .10s"
    
    
}   

