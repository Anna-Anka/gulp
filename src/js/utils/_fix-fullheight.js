import { throttle } from './_throttle';

export const fixFullheight = () => {
    const fullScreens = document.querySelectorAll('[data-fullscreen]');
    if (fullScreens.length) {
        const fixHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        const fixHeightThrottle = throttle(fixHeight);
        fixHeightThrottle();
        window.addEventListener('resize', fixHeightThrottle);
    }
};
