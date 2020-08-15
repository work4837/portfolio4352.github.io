const toggleClass = function(className, elem) {
    if (elem.className.indexOf(className) === -1) {
        elem.classList.add(className);
    } else {
        elem.classList.remove(className);
    }
}

// меню
let menuBtn = document.querySelector('.menu-btn'),
    menu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', activeMenu);
window.addEventListener('resize', closeMenuWhenScreenWide);

function activeMenu() {
    // изменяем вид кнопки меню по нажатию
    toggleClass('active', menuBtn);

    // изменяем положение меню 
    toggleClass('active', menu);
}

function closeMenuWhenScreenWide() {
    if (window.innerWidth > 900) {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
    }
}

let wow = new WOW(
  {
    boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
    animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
    offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
    mobile:       false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
    live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
    callback:     function(box) {
      // функция срабатывает каждый раз при старте анимации
      // аргумент box — элемент, для которого была запущена анимация
    },
    scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
  }
);
wow.init();