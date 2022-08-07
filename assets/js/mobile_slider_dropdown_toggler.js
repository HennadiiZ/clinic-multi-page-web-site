// mobile slider dropdown toggler

const menu = document.querySelector('.services-list');

menu.addEventListener('click', (e)=>{

    let listItem = e.target;
    if(menu.classList.contains('open'))
        menu.prepend(listItem);
    listItem.closest('ul').classList.toggle('open');
});