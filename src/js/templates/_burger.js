import { disableScroll } from '../utils/_disable-scroll';
import { enableScroll } from '../utils/_enable-scroll';

export const burger = () => {
    const burgerButton = document.querySelector('[data-burger-button]');
    const menu = document.querySelector('[data-menu]');
    const menuLinks = document.querySelectorAll('[data-menu-link]');
    const overlay = document.querySelector('[data-menu-overlay]');

    const checkClass = () => {
        if (burgerButton.classList.contains('burger-button--active')) {
            burgerButton.setAttribute('aria-expanded', 'true');
            burgerButton.setAttribute('aria-label', 'закрыть меню');
            disableScroll();
        } else {
            burgerButton.setAttribute('aria-expanded', 'false');
            burgerButton.setAttribute('aria-label', 'открыть меню');
            enableScroll();
        }
    };

    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('burger-button--active');
        menu.classList.toggle('burger-menu--active');
        overlay.classList.toggle('overlay--active');
        checkClass();
    });

    overlay.addEventListener('click', () => {
        burgerButton.classList.remove('burger-button--active');
        menu.classList.remove('burger-menu--active');
        overlay.classList.remove('overlay--active');
        checkClass();
    });

    menuLinks.forEach((el) => {
        el.addEventListener('click', () => {
            burgerButton.classList.remove('burgerbutton-button--active');
            menu.classList.remove('burgerbutton-menu--active');
            overlay.classList.remove('overlay--active');
            enableScroll();
        });
    });
};
