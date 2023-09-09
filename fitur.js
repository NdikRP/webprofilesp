document.getElementById('navbarToggler').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    var toggler = this;

    menu.style.transition = 'opacity 0.3s ease-in-out';

    menu.classList.toggle('active');

    toggler.classList.toggle('active');

    if (menu.classList.contains('active')) {
        menu.style.opacity = '1';
    } else {
        menu.style.opacity = '0';
    }
});

document.getElementById('connectButton').addEventListener('click', function () {
    var linkedinProfileURL = 'https://www.linkedin.com/in/andhika-rizky/';
    window.open(linkedinProfileURL, '_blank');
});

