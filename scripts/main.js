// Show Menu -------------------------------------------------------------------------
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// Active and remove Menu -----------------------------------------------------------
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    navLink.forEach( n => n.classList.remove('active'));
    this.classList.add('active');
}
navLink.forEach( n => n.addEventListener('click', linkAction))