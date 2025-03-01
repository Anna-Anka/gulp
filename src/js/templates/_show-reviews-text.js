(function () {
    const initCard = (card) => {
        const text = card.querySelector('.feedback-card__text')
        const maxLength = Number(text.getAttribute('data-text-maxlength')) ?? 430
        const button = card.querySelector('.feedback-card__more')
        let textContent = text.innerHTML
        let textContentCopy = textContent
        const textLength = text.innerHTML.length

        if (textLength > maxLength) {

            button.setAttribute('aria-expanded', false);

            const slicedText = textContent.slice(0, maxLength + 1) + '...'
            text.innerHTML = slicedText

            button.addEventListener('click', () => {
                if (button.getAttribute('aria-expanded') === 'false') {
                    button.setAttribute('aria-expanded', true)
                    text.innerHTML = textContentCopy
                    button.innerHTML = 'Скрыть'
                } else {
                    button.setAttribute('aria-expanded', false)
                    button.innerHTML = 'Читать полностью'
                    text.innerHTML = slicedText
                }
            })
        } else {
            button.classList.add('feedback-card__more--hidden');
        }
    }

    if (document.querySelector('.feedback-card')) {
        const cardsAll = document.querySelectorAll('.feedback-card');

        cardsAll.forEach(card => initCard(card))
    }
})()