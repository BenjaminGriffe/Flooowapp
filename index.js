document.addEventListener('DOMContentLoaded', function() {  
    let button = document.querySelector('.shownav');
    let menu = document.querySelector('.menu-burger');

    button.addEventListener('click', function() {
        menu.classList.toggle('visible');
    });
});
