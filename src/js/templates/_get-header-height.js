import { throttle } from '../utils/index.js';

(function () {
    const header = document.querySelector('.header')
    if (!header) {
        return null
    }

    const changeHeaderHeight = () => {
        document.querySelector(':root').style.setProperty('--header-height', `${header.offsetHeight}px`);
    }

    changeHeaderHeight()

    const changeHeaderHeightThrottle = throttle(changeHeaderHeight)
    window.addEventListener('resize', changeHeaderHeightThrottle)
})()