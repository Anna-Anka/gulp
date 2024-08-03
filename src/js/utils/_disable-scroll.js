import vars from '../_vars';

export const disableScroll = () => {
    const pagePosition = window.scrollY;
    const paddingOffset = `${(window.innerWidth - vars.bodyEl.offsetWidth)}px`;
    const fixBlocks = document.querySelectorAll('.fixed-block');
    if (fixBlocks) {
        fixBlocks.forEach((el) => {
            const fixBlock = el;
            fixBlock.style.paddingRight = paddingOffset;
        });
    }
    vars.htmlEl.style.scrollBehavior = 'none';
    vars.bodyEl.style.paddingRight = paddingOffset;
    vars.bodyEl.classList.add('disable-scroll');
    vars.bodyEl.dataset.position = pagePosition;
    vars.bodyEl.style.top = `-${pagePosition}px`;
};
