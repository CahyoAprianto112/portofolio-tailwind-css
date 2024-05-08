// Navbar Fixed
// ketika window scrool jalankan function ini
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    // cek scroll position
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}



// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});
