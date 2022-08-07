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

//-------------------------- timer for sliders
function timer() {
  let k = 0;

  setInterval(() => {
    hideTabContentLocation();
    showTabContentLocation(k++);

    if ( k > tabsLocation.length - 1) {
      k = 0;
    }

  }, 5000);
}
timer();