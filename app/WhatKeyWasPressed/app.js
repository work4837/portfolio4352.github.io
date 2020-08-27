document.addEventListener('keyup', showKey);

function showKey(e) {
    var keyName = e.key,
    text = document.querySelector('.press__text');
    text.innerHTML = 'Вы нажали на клавишу';

    keyName = checkEventKey(e);

    makeSound();

    changeKeyName(keyName);
}

var checkEventKey = function(event) {
    var key;

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        key = event.key.toUpperCase();
    } else if (event.keyCode === 32) {
        key = 'Пробел';
    } else if (event.keyCode === 37) {
        key = '&#x2190';
    } else if (event.keyCode === 38) {
        key = '&#x2191';
    } else if (event.keyCode === 39) {
        key = '&#x2192';
    } else if (event.keyCode === 40) {
        key = '&#x2193';
    } 


    if (key === undefined) {
        return event.key;
    }

    return key;
};

var changeKeyName = function(keyName) {
    var key = document.querySelector('.press__key');

    key.innerHTML = keyName;
    key.style.display = 'inline-block';
};

var makeSound = function() {
    var sound = document.querySelector('.press__sound');
    sound.play();
};