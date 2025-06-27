document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            // Previne o comportamento padrão do link
            event.preventDefault();
            
            // Obtém o seletor do href e verifica se ele é válido
            const targetSelector = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetSelector);
            
            if (targetElement) {
                // Rola suavemente até o elemento alvo
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
