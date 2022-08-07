// modal
const appointmentBtns = document.querySelectorAll('.book-an-appointment-btn');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close-btn');

function modalOpen() {
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
}

function modalClose() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

appointmentBtns.forEach((btn) => {
  btn.addEventListener('click',() => {
    modalOpen();
  });
});

modalCloseBtn.addEventListener('click',() => {
  modalClose();
});

modal.addEventListener('click',(e) => {
  if (e.target.classList.contains('modal')) {
    modalClose();
  }
});

document.addEventListener('keydown',(e) => {
  if (e.code === 'Escape') {
    modalClose();
  }
});

// burger menu
const header__burger = document.querySelector('.header__burger');
const header__menu = document.querySelector('.header__menu');

header__burger.addEventListener('click', function() {
  header__burger.classList.toggle('active');
  header__menu.classList.toggle('active');
  document.body.classList.toggle('lock');
});

// dropdown
const dropdown = document.querySelectorAll('.dropdown-item');

dropdown.forEach(item => {
  item.addEventListener('click', (e) => {
    item.classList.toggle('open-dropdown');

    if (e.target.classList.contains('dropdown-select')) {
        item.classList.toggle('open-dropdown');
    }
  });

  document.addEventListener('click',(e) => {
    if (!e.target.classList.contains('dropdown-item') &&
        !e.target.classList.contains('select') &&
        !e.target.classList.contains('dropdown-select') &&
        !e.target.classList.contains('vector')
    ) {
        item.classList.remove('open-dropdown');
    }
  });
});

// header bg change on scroll
const scrollTrigger = 150;

window.addEventListener('scroll', () => {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.querySelector(".header").classList.add('header-on-scroll');
  } else {
    document.querySelector(".header").classList.remove('header-on-scroll');
  }
});

// WOW ANIMATIONS
var wow = new WOW({
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();

// MAP
function initMap() {
    const styledMapType = new google.maps.StyledMapType(
        [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ],
        { name: "Styled Map" }
    );

    // The location of Uluru
    const uluru = { lat: 25.758740, lng: -80.191560 };
    const uluru2 = { lat: 33.825459, lng: -118.385277 };
    const uluru3 = { lat: 31.968599, lng: -99.901810 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 5,
        center: uluru3,
        mapTypeControlOptions: {
            mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
        },
    });
    const image =
        "https://topdocclinic.jetsoftpro.com/assets/icons/topDoctormarker.png";
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: image,
    });

    const marker2 = new google.maps.Marker({
        position: uluru2,
        map: map,
        icon: image,
    });

    map.mapTypes.set("styled_map", styledMapType);
    map.setMapTypeId("styled_map");
}

window.initMap = initMap;
