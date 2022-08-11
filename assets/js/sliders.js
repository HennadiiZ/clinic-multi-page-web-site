// tabs
const tabs = document.querySelectorAll('#toggler-btn'); 
const tabsParent = document.querySelector('#slider-wrapper');  
const tabContent = document.querySelectorAll('#slider-content'); 

function hideTabContent() {

  tabContent.forEach((tab) => {
    tab.classList.add('hide');
    tab.classList.remove('show', 'fade');
  });
        
  tabs.forEach((tab,i) => {
    tab.classList.remove('active');
  });
};

function showTabContent(i = 0) {

  tabContent[i].classList.add('show', 'fade');
  tabContent[i].classList.remove('hide');

  tabs[i].classList.add('active');
};

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (e) => {

  if(e.target && e.target.classList.contains('toggler-btn')) {

    tabs.forEach((item,i) => {
        if (item == e.target) { 
            hideTabContent();
            showTabContent(i); 
        }
    });
  }
});

//-------------------------- timer for sliders
// function timer() {
//   let i = 0;

//   setInterval(() => {

//     hideTabContent();
//     showTabContent(i++);

//     if ( i > tabs.length - 1) {
//       i = 0;
//     }
//   }, 5000);
// }
// timer();