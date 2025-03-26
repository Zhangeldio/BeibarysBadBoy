// Галерея инициализация
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});

// Форма обратной связи
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Хабарлама жіберілді! Рахмет!');
    this.reset();
});
// Коза-компаньон
let isJumping = false;

function jumpGreta() {
    if (!isJumping) {
        isJumping = true;
        const goat = document.querySelector('.goat-body');
        goat.classList.add('goat-jump');
        
        // Добавляем звук "Меее" (нужен аудиофайл)
        const meSound = new Audio('sounds/meee.mp3');
        meSound.play();

        setTimeout(() => {
            goat.classList.remove('goat-jump');
            isJumping = false;
        }, 800);
    }
}

// Коза ходит по экрану каждые 30 секунд
setInterval(() => {
    const goat = document.getElementById('goat-greta');
    const xPos = Math.random() * (window.innerWidth - 100);
    const yPos = Math.random() * (window.innerHeight - 100);
    
    goat.style.transform = `translate(${xPos}px, ${yPos}px)`;
}, 30000);

// Начальная позиция
document.addEventListener('DOMContentLoaded', () => {
    const goat = document.getElementById('goat-greta');
    goat.style.transform = 'translate(-50px, 50px)';
});