function updateFlip(element, newValue) {
    const top = element.querySelector('.top');
    const bottom = element.querySelector('.bottom');

    if (top.textContent !== newValue) {
        // Устанавливаем новое значение
        bottom.textContent = newValue;

        // Добавляем класс анимации
        element.classList.add('new');

        // Ждём завершения анимации
        setTimeout(() => {
            top.textContent = newValue;
            element.classList.remove('new');
        }, 500);
    }
}

function updateCountdown() {
    const targetDate = new Date('December 22, 2024 15:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        updateFlip(document.getElementById('days'), String(days).padStart(2, '0'));
        updateFlip(document.getElementById('hours'), String(hours).padStart(2, '0'));
        updateFlip(document.getElementById('minutes'), String(minutes).padStart(2, '0'));
        updateFlip(document.getElementById('seconds'), String(seconds).padStart(2, '0'));
    }
}

setInterval(updateCountdown, 1000);
