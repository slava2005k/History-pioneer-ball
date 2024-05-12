document.addEventListener('DOMContentLoaded', function() {
    const menuToggleBtn = document.querySelector('.open-menu-btn');
    const menu = document.querySelector('.menu');

    menuToggleBtn.addEventListener('click', function() {
        menu.classList.toggle('show-menu');
    });


    var menuText = document.querySelector('.reminder');
    setTimeout(function() {
        menuText.style.display = 'none';
    }, 3500);
});