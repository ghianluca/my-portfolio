document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

const originalTitle = document.title;

window.addEventListener('blur', () => {
    document.title = 'Ghianluca 😢';
});
window.addEventListener('focus', () => {
    document.title = originalTitle;
});

document.addEventListener('DOMContentLoaded', () => {
    const appHeader = document.getElementById('appHeader');

    const logoHeader = document.createElement('img');
    logoHeader.src = '/assets/images/logo-coderix.svg';

    appHeader.appendChild(logoHeader);
});


document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('homeLeft');

    const subTitle = document.createElement('h3');
    subTitle.textContent = 'Olá, eu sou';

    const principalTitle = document.createElement('h1');
    principalTitle.textContent = 'GHIANLUCA';

    const secondTitle = document.createElement('h2');
    secondTitle.textContent = 'SOFTWARE ENGINEER';

    const intro = document.createElement('p');
    intro.textContent = 'Gosto de desenvolver sistemas eficientes e de alta escalabilidade, e sou fascinado em resolver problemas de forma criativa.';

    const iconsContainer = document.createElement('div');
    iconsContainer.style.display = 'flex';
    iconsContainer.style.marginTop = '20px';
    iconsContainer.style.gap = '10px';

    const iconLinks = [
        { href: 'https://www.linkedin.com/in/ghianluca/', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(88, 163, 153, 1);transform: ;msFilter:;"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg>', alt: 'LinkedIn' },
        { href: 'https://github.com/ghianluca', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(88, 163, 153, 1);transform: ;msFilter:;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>', alt: 'GitHub' },
        { href: 'https://www.instagram.com/ghianribeiro/?next=%2F', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(88, 163, 153, 1);transform: ;msFilter:;"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg>', alt: 'Instagram' }
    ];

    iconLinks.forEach(iconLink => {
        const link = document.createElement('a');
        link.href = iconLink.href;
        link.target = '_blank';
        link.innerHTML = iconLink.svg;
        link.setAttribute('aria-label', iconLink.alt);
        iconsContainer.appendChild(link);
    });

    homeLeft.appendChild(subTitle);
    homeLeft.appendChild(principalTitle);
    homeLeft.appendChild(secondTitle);
    homeLeft.appendChild(intro);
    homeLeft.appendChild(iconsContainer);
});

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('aboutLeft');

    const subTitleAbout = document.createElement('h2');
    subTitleAbout.textContent = 'SOBRE MIM';

    const introAbout = document.createElement('p');
    introAbout.textContent = 'Olá, eu sou Ghianluca Ribeiro, tenho 23 anos e faço faculdade de Ciência da Computação, além de um curso de especialização em Backend Java na EBAC. Gosto muito de desenvolver soluções complexas e escaláveis. Sou fundador da Coderix, um grupo de desenvolvimento de software que transforma ideias em soluções digitais para melhorar a vida dos nossos usuários.';

    const buttonAbout = document.createElement('button');
    buttonAbout.textContent = 'ENTRE EM CONTATO';

    aboutLeft.appendChild(subTitleAbout);
    aboutLeft.appendChild(introAbout);
    aboutLeft.appendChild(buttonAbout);
});

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('appFooter');

    const paragraphFooter = document.createElement('p');
    paragraphFooter.textContent = '© 2024 Todos os direitos reservados.';

    appFooter.appendChild(paragraphFooter);
});