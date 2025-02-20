import { throttle } from '../utils/_throttle.js'

const initItem = (item, animatedItems) => {
    const rect = item.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Проверяем, находится ли элемент в пределах области видимости
    if (rect.top < windowHeight && rect.bottom > 0 && !animatedItems.has(item)) {
        // Добавляем элемент в анимированные
        animatedItems.add(item);

        // Устанавливаем начальную непрозрачность
        item.style.opacity = "1";

        // Заменяем текст, разбивая его по словам
        const text = item.getAttribute('data-show-text').trim()
        item.innerHTML = text.split(/\s+/).map(function (word) {
            return "<span>" + word + "</span>";
        }).join(" ");

        const spans = item.getElementsByTagName("span");

        for (let i = 0; i < spans.length; i++) {
            spans[i].style.animationDelay = i * 300 + "ms";
            spans[i].setAttribute('aria-hidden', 'true');
            // Измените значение задержки по вашему усмотрению
        }
    }
}

const animateItems = (items, animatedItems) => {
    items.forEach((item) => initItem(item, animatedItems));
}

(function () {
    const items = document.querySelectorAll('[data-show-text]')

    if (!items.length) {
        return null
    }

    const animatedItems = new Set();
    const animateItemsThrottled = throttle(() => animateItems(items, animatedItems)); // 100ms лимит
    window.addEventListener('scroll', animateItemsThrottled);

    animateItems(items, animatedItems);
})();