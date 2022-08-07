// slider blog

const prev = document.querySelectorAll('#slider-prev');
const next = document.querySelectorAll('#slider-next');
const slides = document.querySelectorAll('.news-item');
let index = 1;

function showSlides(n = 0) {

    (n > slides.length) && (index = 1);
    (n < 1) && (index = slides.length);

    slides.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
        console.log(item);
    });

    slides[index - 1].classList.add('show', 'fade');
    slides[index - 1].classList.remove('hide');
};

showSlides(index);

prev.forEach( item => {
  item.addEventListener('click', () => {
    showSlides(--index);
    console.log('prev!');
  }); 
})

next.forEach( item => {
  item.addEventListener('click', () => {
    showSlides(++index);
    console.log('next!');
  });
})
