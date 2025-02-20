function goBack() {
    window.history.back();
}

(function () {
    const buttons = document.querySelectorAll('[data-button-back]')

    if (!buttons) {
        return null
    }

    buttons.forEach((button) => {
        button.addEventListener('click', goBack)
    })
})()