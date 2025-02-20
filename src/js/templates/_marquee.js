function marquee(selector, speed) {
    const parentSelectors = document.querySelectorAll(selector);

    if (!parentSelectors) {
        return null
    }

    parentSelectors.forEach((parentSelector) => {
        const direction = parentSelector.getAttribute('data-marquee-direction')

        const clone = parentSelector.innerHTML;
        let i = 0;
        parentSelector.insertAdjacentHTML(direction === 'right' ? 'afterBegin' : 'beforeend', clone);
        parentSelector.insertAdjacentHTML(direction === 'right' ? 'afterBegin' : 'beforeend', clone);
        const firstElement = parentSelector.children[0];

        setInterval(function () {
            firstElement.style.marginLeft = direction === 'right' ? `${i}px` : `-${i}px`;
            if (i > firstElement.clientWidth) {
                i = 0;
            }
            i = i + speed;
        }, 0);
    })
}

window.addEventListener('load', marquee('[data-marquee]', 0.2))
