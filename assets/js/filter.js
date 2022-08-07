const menu = document.querySelector('.menur');

menu.addEventListener('click', (e)=>{

    let listItem = e.target;

    if(menu.classList.contains('open'))
        menu.prepend(listItem);

    listItem.closest('ul').classList.toggle('open');

})

// animate divs on start
var items = document.querySelectorAll('.filter-sections .card');
animate(items);

// filter on click
each('.filter-links li a', function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        filterLinks(el);
    });
});

// filter on click
each('.filter-link li', function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        filterSelect(el);
    });
});

// filter links functions
function filterLinks(element) {
    let activeItem = document.querySelectorAll('.filter-links .active');
    // get text
    var el = element.textContent.split(" ")[0].split(",")[0];
    // convert to lowercase
    var linksTolowerCase = el.toLowerCase();
    // if all remove all elements
    if (el === 'All') {
        // first show all view class
        each('.view', function(e) {
            e.classList.remove('view');

        });
        // no show init animation
        animate(items);
    } else {
        // if not click all remove all elements
        each('.view', function(e) {
            e.classList.remove('view');
            e.classList.add('active');
        });
    }
    console.log(activeItem);
    activeItem[0].classList.remove('active');
    element.classList.add('active');
    // show animation for current elements
    animate(document.querySelectorAll('.' + linksTolowerCase));
};

// filter links functions
function filterSelect(element) {
    var el = element.textContent.split(" ")[0].split(",")[0];
    // convert to lowercase
    var linksTolowerCase = el.toLowerCase();
    // if all remove all elements
    if (el === 'All') {
        // first show all view class
        each('.view', function(e) {
            e.classList.remove('view');

        });
        // no show init animation
        animate(items);
    } else {
        // if not click all remove all elements
        console.log(element);
        each('.view', function(e) {
            e.classList.remove('view');
            e.classList.add('active');
        });
    }
    // show animation for current elements
    animate(document.querySelectorAll('.' + linksTolowerCase));
};

// forech arrays
function each(el, callback) {
    var allDivs = document.querySelectorAll(el),
        alltoArr = Array.prototype.slice.call(allDivs);
    Array.prototype.forEach.call(alltoArr, function(selector, index) {
        if (callback) return callback(selector);
    });
};
// animate function
function animate(item) {
    (function show(counter) {
        setTimeout(function() {
            item[counter].classList.add('view');
            counter++;
            if (counter < item.length) show(counter);
        },50);
    })(0);
};
