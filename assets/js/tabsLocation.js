// tabs
const tabsLocation = document.querySelectorAll('#toggler-btn-location');
const tabsParentLocation = document.querySelector('#slider-wrapper-location');
const tabContentLocation = document.querySelectorAll('#slider-content-location');

function hideTabContentLocation() {

    tabContentLocation.forEach((tab) => {
        tab.classList.add('hide');
        tab.classList.remove('show', 'fade');
    });

    tabsLocation.forEach((tab,i) => {
        tab.classList.remove('active');
    });
};

function showTabContentLocation(i = 0) {

    tabContentLocation[i].classList.add('show', 'fade');
    tabContentLocation[i].classList.remove('hide');

    tabsLocation[i].classList.add('active');
};

hideTabContentLocation();
showTabContentLocation();

tabsParentLocation.addEventListener('click', (e) => {

    if(e.target && e.target.classList.contains('toggler-btn-location')) {

        tabsLocation.forEach((item,i) => {
            if (item == e.target) {
                hideTabContentLocation();
                showTabContentLocation(i);
            }
        });
    }
});

//---inner slider
//Atlanta
const prevBtn = document.querySelector('#prev-atlanta');
const nextBtn = document.querySelector('#next-atlanta');
const slidesLocation = document.querySelectorAll('#location-atlanta-slide');

const currentSpan = document.querySelector('#current'); 
const totalSpan = document.querySelector('#total');

let idx = 1;
totalSpan.innerHTML = totalSpanFunc(slidesLocation.length);

function totalSpanFunc(n){
    return (n < 10) ? '0' + n : n;
};

function showLocationSlides(n = 0) {

    (n > slidesLocation.length) && (idx = 1);
    (n < 1) && (idx = slidesLocation.length);

    slidesLocation.forEach( item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    slidesLocation[idx - 1].classList.add('show', 'fade');
    slidesLocation[idx - 1].classList.remove('hide');

    slidesLocation[idx - 1].style.display = '';

    currentSpan.innerHTML = currentSpanFunc(idx);
    
    function currentSpanFunc(n){
      return (n < 10) ? '0' + n : n;
    };
};
showLocationSlides(idx);

prevBtn.addEventListener('click', () => {
    showLocationSlides(--idx);
});
nextBtn.addEventListener('click', () => {
    showLocationSlides(++idx);
});

//Coral Gables
const prevBtnCoralGables = document.querySelector('#prev-coral-gables');
const nextBtnCoralGables = document.querySelector('#next-coral-gables');
const slidesLocationCoralGables = document.querySelectorAll('#location-coral-gables-slide');

const currentSpanCoralGables = document.querySelector('#current-coral-gables'); 
const totalSpanCoralGables = document.querySelector('#total-coral-gables');

let idxCoralGables = 1;
totalSpanCoralGables.innerHTML = totalSpanCoralGablesFunc(slidesLocationCoralGables.length);

function totalSpanCoralGablesFunc(n){
    return (n < 10) ? '0' + n : n;
};

function showLocationCoralGablesSlides(n = 0) {

    (n > slidesLocationCoralGables.length) && (idxCoralGables = 1);
    (n < 1) && (idxCoralGables = slidesLocationCoralGables.length);

    slidesLocationCoralGables.forEach( item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    slidesLocationCoralGables[idxCoralGables - 1].classList.add('show', 'fade');
    slidesLocationCoralGables[idxCoralGables - 1].classList.remove('hide');

    slidesLocationCoralGables[idxCoralGables - 1].style.display = '';

    currentSpanCoralGables.innerHTML = currentSpanCoralGablesFunc(idxCoralGables);
    
    function currentSpanCoralGablesFunc(n){
      return (n < 10) ? '0' + n : n;
    };
};
showLocationCoralGablesSlides(idxCoralGables);

prevBtnCoralGables.addEventListener('click', () => {
    showLocationCoralGablesSlides(--idxCoralGables);
});
nextBtnCoralGables.addEventListener('click', () => {
    showLocationCoralGablesSlides(++idxCoralGables);
});

// Hialeah, FL
const prevBtnHialeah = document.querySelector('#prev-hialeah');
const nextBtnHialeah = document.querySelector('#next-hialeah');
const slidesLocationHialeah = document.querySelectorAll('#location-hialeahs-slide');

const currentSpanHialeah = document.querySelector('#current-hialeah'); 
const totalSpanHialeah = document.querySelector('#total-hialeah');

let idxHialeah = 1;
totalSpanHialeah.innerHTML = totalSpanHialeahFunc(slidesLocationHialeah.length);

function totalSpanHialeahFunc(n){
    return (n < 10) ? '0' + n : n;
};

function showLocationHialeahSlides(n = 0) {

    (n > slidesLocationHialeah.length) && (idxHialeah = 1);
    (n < 1) && (idxHialeah = slidesLocationHialeah.length);

    slidesLocationHialeah.forEach( item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    slidesLocationHialeah[idxHialeah - 1].classList.add('show', 'fade');
    slidesLocationHialeah[idxHialeah - 1].classList.remove('hide');

    slidesLocationHialeah[idxHialeah - 1].style.display = '';

    currentSpanHialeah.innerHTML = currentSpanHialeahFunc(idxHialeah);
    
    function currentSpanHialeahFunc(n){
      return (n < 10) ? '0' + n : n;
    };
};
showLocationHialeahSlides(idxHialeah);

prevBtnHialeah.addEventListener('click', (e) => {
    showLocationHialeahSlides(--idxHialeah);
    console.log(e.target);
});
nextBtnHialeah.addEventListener('click', (e) => {
    showLocationHialeahSlides(++idxHialeah);
    console.log(e.target);
});

// Brickell Miami, FL
const prevBtnBrickellMiami = document.querySelector('#prev-brickell-miami');
const nextBtnBrickellMiami = document.querySelector('#next-brickell-miami');
const slidesLocationBrickellMiami = document.querySelectorAll('#location-brickell-miami-slide');

const currentSpanBrickellMiami = document.querySelector('#current-brickell-miami'); 
const totalSpanBrickellMiami = document.querySelector('#total-brickell-miami');

let idxBrickellMiami = 1;
totalSpanBrickellMiami.innerHTML = totalSpanBrickellMiamiFunc(slidesLocationBrickellMiami.length);

function totalSpanBrickellMiamiFunc(n){
    return (n < 10) ? '0' + n : n;
};

function showLocationBrickellMiamiSlides(n = 0) {

    (n > slidesLocationBrickellMiami.length) && (idxBrickellMiami = 1);
    (n < 1) && (idxBrickellMiami = slidesLocationBrickellMiami.length);

    slidesLocationBrickellMiami.forEach( item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    slidesLocationBrickellMiami[idxBrickellMiami - 1].classList.add('show', 'fade');
    slidesLocationBrickellMiami[idxBrickellMiami - 1].classList.remove('hide');

    slidesLocationBrickellMiami[idxBrickellMiami - 1].style.display = '';

    currentSpanBrickellMiami.innerHTML = currentSpanBrickellMiamiFunc(idxBrickellMiami);
    
    function currentSpanBrickellMiamiFunc(n){
      return (n < 10) ? '0' + n : n;
    };
};
showLocationBrickellMiamiSlides(idxBrickellMiami);

prevBtnBrickellMiami.addEventListener('click', (e) => {
    showLocationBrickellMiamiSlides(--idxBrickellMiami);
    console.log(e.target);
});
nextBtnBrickellMiami.addEventListener('click', (e) => {
    showLocationBrickellMiamiSlides(++idxBrickellMiami);
    console.log(e.target);
});

// North Miami, FL
const prevBtnNorthMiami = document.querySelector('#prev-north-miami');
const nextBtnNorthMiami = document.querySelector('#next-north-miami');
const slidesLocationNorthMiami = document.querySelectorAll('#location-north-miami-slide');

const currentSpanNorthMiami = document.querySelector('#current-north-miami'); 
const totalSpanNorthMiami = document.querySelector('#total-north-miami');

let idxNorthMiami = 1;
totalSpanNorthMiami.innerHTML = totalSpanNorthMiamiFunc(slidesLocationNorthMiami.length);

function totalSpanNorthMiamiFunc(n){
    return (n < 10) ? '0' + n : n;
};

function showLocationNorthMiamiSlides(n = 0) {

    (n > slidesLocationNorthMiami.length) && (idxNorthMiami = 1);
    (n < 1) && (idxNorthMiami = slidesLocationNorthMiami.length);

    slidesLocationNorthMiami.forEach( item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    slidesLocationNorthMiami[idxNorthMiami - 1].classList.add('show', 'fade');
    slidesLocationNorthMiami[idxNorthMiami - 1].classList.remove('hide');

    slidesLocationNorthMiami[idxNorthMiami - 1].style.display = '';

    currentSpanNorthMiami.innerHTML = currentSpanNorthMiamiFunc(idxNorthMiami);
    
    function currentSpanNorthMiamiFunc(n){
      return (n < 10) ? '0' + n : n;
    };
};
showLocationNorthMiamiSlides(idxNorthMiami);

prevBtnNorthMiami.addEventListener('click', (e) => {
    showLocationNorthMiamiSlides(--idxNorthMiami);
    console.log(e.target);
});
nextBtnNorthMiami.addEventListener('click', (e) => {
    showLocationNorthMiamiSlides(++idxNorthMiami);
    console.log(e.target);
});

// Redondo Beach, CA
const prevBtnRedondoBeach = document.querySelector('#prev-redondo-beach');
const nextBtnRedondoBeach = document.querySelector('#next-redondo-beach');
const slidesLocationRedondoBeach = document.querySelectorAll('#location-redondo-beach-slide');

const currentSpanRedondoBeach = document.querySelector('#current-redondo-beach'); 
const totalSpanRedondoBeach = document.querySelector('#total-redondo-beach');

let idxRedondoBeach = 1;
totalSpanRedondoBeach.innerHTML = totalSpanRedondoBeachFunc(slidesLocationRedondoBeach.length);

function totalSpanRedondoBeachFunc(n) {
    return (n < 10) ? '0' + n : n;
};

function showLocationRedondoBeachSlides(n = 0) {

    (n > slidesLocationRedondoBeach.length) && (idxRedondoBeach = 1);
    (n < 1) && (idxRedondoBeach = slidesLocationRedondoBeach.length);

    slidesLocationRedondoBeach.forEach( item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    slidesLocationRedondoBeach[idxRedondoBeach - 1].classList.add('show', 'fade');
    slidesLocationRedondoBeach[idxRedondoBeach - 1].classList.remove('hide');

    slidesLocationRedondoBeach[idxRedondoBeach - 1].style.display = '';

    currentSpanRedondoBeach.innerHTML = currentSpanRedondoBeachFunc(idxRedondoBeach);
    
    function currentSpanRedondoBeachFunc(n){
      return (n < 10) ? '0' + n : n;
    };
};
showLocationRedondoBeachSlides(idxRedondoBeach);

prevBtnRedondoBeach.addEventListener('click', (e) => {
    showLocationRedondoBeachSlides(--idxRedondoBeach);
    console.log(e.target);
});
nextBtnRedondoBeach.addEventListener('click', (e) => {
    showLocationRedondoBeachSlides(++idxRedondoBeach);
    console.log(e.target);
});


// Tucson, AZ
const prevBtnTucson = document.querySelector('#prev-tucson');
const nextBtnTucson = document.querySelector('#next-tucson');
const slidesLocationTucson = document.querySelectorAll('#location-tucson-slide');

const currentSpanTucson = document.querySelector('#current-tucson'); 
const totalSpanTucson = document.querySelector('#total-tucson');

let idxTucson = 1;
totalSpanTucson.innerHTML = totalSpanTucsonFunc(slidesLocationTucson.length);

function totalSpanTucsonFunc(n) {
    return (n < 10) ? '0' + n : n;
};

function showLocationTucsonSlides(n = 0) {

    (n > slidesLocationTucson.length) && (idxTucson = 1);
    (n < 1) && (idxTucson = slidesLocationTucson.length);

    slidesLocationTucson.forEach( item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    slidesLocationTucson[idxTucson - 1].classList.add('show', 'fade');
    slidesLocationTucson[idxTucson - 1].classList.remove('hide');

    slidesLocationTucson[idxTucson - 1].style.display = '';

    currentSpanTucson.innerHTML = currentSpanTucsonFunc(idxTucson);
    
    function currentSpanTucsonFunc(n){
      return (n < 10) ? '0' + n : n;
    };
};
showLocationTucsonSlides(idxTucson);

prevBtnTucson.addEventListener('click', (e) => {
    showLocationTucsonSlides(--idxTucson);
    console.log(e.target);
});
nextBtnTucson.addEventListener('click', (e) => {
    showLocationTucsonSlides(++idxTucson);
    console.log(e.target);
});


//-------------------------- timer for sliders
// function timer() {
//   let k = 0;

//   setInterval(() => {
//     hideTabContentLocation();
//     showTabContentLocation(k++);

//     if ( k > tabsLocation.length - 1) {
//       k = 0;
//     }

//   }, 5000);
// }
// timer();