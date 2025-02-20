import { throttle } from '../utils/_throttle.js'

(function () {
    function setDynamicHeight() {
        const vh = window.innerHeight * 0.01; // 1% от высоты окна
        document.documentElement.style.setProperty('--dvh', `${vh}px`);
    }

    setDynamicHeight();

    const setDynamicHeightThrottle = throttle(setDynamicHeight)

    window.addEventListener('resize', setDynamicHeightThrottle);
    window.addEventListener('orientationchange', setDynamicHeightThrottle);
})()