// ---------  mobile slider dropdown toggler

const menu = document.querySelector('.services-list');

menu.addEventListener('click', (e)=>{

    let listItem = e.target;
    if(menu.classList.contains('open'))
        menu.prepend(listItem);
    listItem.closest('ul').classList.toggle('open');
});

const items = document.querySelectorAll('.pic'); 

function filterSelect(element) {
    let el = element.textContent.split(" ")[0].split(",")[0];

    compareAndShow(items, el);
    
    each('.view', function(e) {
        e.classList.remove('view');
        e.classList.add('active');
        console.log(e);
    });
};

function compareAndShow(arr, element) {
    arr.forEach( item => {

        item.classList.add('hide');
        item.classList.remove('show');

        if (item.classList.contains(element)) {
            item.classList.add('show');
            item.classList.remove('hide');
        }
    });
};

function each(el, callback) {
    let allDivs = document.querySelectorAll(el),
        alltoArr = Array.prototype.slice.call(allDivs);
    Array.prototype.forEach.call(alltoArr, function(selector, index) {
        if (callback) return callback(selector);
    });
};

each('.services-list li', function(el) { 
    el.addEventListener('click', function(e) {
        e.preventDefault();
        filterSelect(el);
    });
});
