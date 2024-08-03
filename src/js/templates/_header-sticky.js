import { throttle } from '../utils/_throttle';

export const headerSticky = () => {
    const header = document.querySelector('.header');
    const nextBlock = document.querySelector('.hero');
    let headerHeight = header.offsetHeight;
    let lastScrollTop = 0;
    let height = `${headerHeight}px`;

    const updateHeightHeader = () => {
        headerHeight = header.offsetHeight;
        height = `${headerHeight}px`;
    };

    const updateHeightHeaderTrottle = throttle(updateHeightHeader);
    window.addEventListener('resize', updateHeightHeaderTrottle);

    let firstCall = true;

    const addedClass = () => {
        const scrollDistance = window.scrollY;
        if (firstCall) {
            if (scrollDistance !== 0 && lastScrollTop === 0) {
                header.classList.add('header--fixed');
                nextBlock.style.paddingTop = height;
                header.classList.remove('header--hide');
            }
        } else {
            if (scrollDistance > lastScrollTop) {
                header.classList.remove('header--fixed');
                nextBlock.style.paddingTop = height;
                header.classList.add('header--hide');

                if (scrollDistance !== 1 && lastScrollTop !== 0) {
                    header.classList.add('header--hide');
                }
            } else {
                header.classList.add('header--fixed');
                nextBlock.style.paddingTop = height;
                header.classList.remove('header--hide');
            }

            if (scrollDistance === 0) {
                header.classList.remove('header--fixed');
                nextBlock.style.paddingTop = '0';
                header.classList.remove('header--hide');
            }
        }

        lastScrollTop = scrollDistance;
        firstCall = false;
    };

    const addedClassTrottle = throttle(addedClass);
    window.addEventListener('scroll', addedClassTrottle);
};
