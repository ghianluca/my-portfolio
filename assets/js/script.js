const originalTitle = document.title;

window.addEventListener('blur', () => {
    document.title = 'Volta aqui 😢';
});
window.addEventListener('focus', () => {
    document.title = originalTitle;
});

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('appHeader');

    const logoHeader = document.createElement('label');
    logoHeader.textContent = 'Ghianluca';

    appHeader.appendChild(logoHeader);
});

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('appFooter');

    const paragraphFooter = document.createElement('p');
    paragraphFooter.textContent = '© 2024 Todos os direitos reservados.';

    appFooter.appendChild(paragraphFooter);
});