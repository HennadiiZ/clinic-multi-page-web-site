// slider testimonials
const prev = document.querySelector('#slider-prev');
const next = document.querySelector('#slider-next');
const slides = document.querySelectorAll('#testimonials-slide');
let index = 1;

function showSlides(n = 0) {

    (n > slides.length) && (index = 1);
    (n < 1) && (index = slides.length);

    slides.forEach( item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    slides[index - 1].classList.add('show', 'fade');
    slides[index - 1].classList.remove('hide');

};
showSlides(index);

prev.addEventListener('click', () => {
    showSlides(--index);
});
next.addEventListener('click', () => {
    showSlides(++index);
});