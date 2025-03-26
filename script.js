// Генератор предсказаний
const prophecies = [
    "Ертең ешкі Бейбарыстың көлеңкесінен өтеді - ұлы істер күт!",
    "Барар жеріңді білмейсің бе? Сенің тағдырыңда бір ешкі бар!",
    "Үш рет меңзегенде - бақыт келеді!",
    "Жасырын құрметтеуші саған шөп сыйлайды... бұл Грета!"
];

function generateProphecy() {
    const textElement = document.getElementById('prophecy-text');
    textElement.textContent = prophecies[Math.floor(Math.random() * prophecies.length)];
    new Audio('assets/sounds/meee1.mp3').play();
}

// Анимированная коза
let isJumping = false;

function jumpGreta() {
    if (!isJumping) {
        isJumping = true;
        const goat = document.querySelector('.goat-body');
        goat.style.transform = 'translateY(-100px)';
        setTimeout(() => {
            goat.style.transform = 'translateY(0)';
            isJumping = false;
        }, 500);
    }
}

// Инициализация Lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});

// Перемещение козы
setInterval(() => {
    const goat = document.getElementById('goat-greta');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    goat.style.transform = `translate(${x}px, ${y}px)`;
}, 30000);
