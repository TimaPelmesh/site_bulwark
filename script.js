document.addEventListener('DOMContentLoaded', function() {
    // Получаем кнопку прокрутки наверх
    const scrollTopButton = document.getElementById('scroll-top');
    
    // Управление кнопкой прокрутки наверх
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });
    
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Проверяем, является ли устройство iOS и добавляем специальные фиксы
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
        document.documentElement.classList.add('ios-device');
        
        const iOSStyle = document.createElement('style');
        iOSStyle.textContent = `
            .ios-device * {
                -webkit-appearance: none;
            }
        `;
        document.head.appendChild(iOSStyle);
    }
}); 