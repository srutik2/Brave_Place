const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.quertySelector('.nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}
navSlide();