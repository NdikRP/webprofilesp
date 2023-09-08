document.getElementById('navbarToggler').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    var toggler = this;

    // Tambahkan transisi opacity ke menu
    menu.style.transition = 'opacity 0.3s ease-in-out';

    // Toggle class "active" pada menu
    menu.classList.toggle('active');

    // Toggle class "active" pada toggler
    toggler.classList.toggle('active');

    // Atur opacity menu berdasarkan class "active"
    if (menu.classList.contains('active')) {
        menu.style.opacity = '1';
    } else {
        menu.style.opacity = '0';
    }
});

document.getElementById('connectButton').addEventListener('click', function () {
    // Ganti URL berikut dengan tautan profil LinkedIn Anda
    var linkedinProfileURL = 'https://www.linkedin.com/in/andhika-rizky/';

    // Buka tautan LinkedIn dalam jendela/tab baru
    window.open(linkedinProfileURL, '_blank');
});

