window.onload = function() {
    const logo = document.querySelector('.left img');

    function girarLogo() {
        logo.classList.add('girar');

        logo.addEventListener('animationend', () => {
            logo.classList.remove('girar');
        }, { once: true });
    }

    girarLogo();

    logo.addEventListener('mouseover', girarLogo);
};