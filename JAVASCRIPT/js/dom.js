window.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1');

    console.log(h1);
    console.log(h1.innerText);

    h1.innerText = 'Hola Mundo';

    const lis = document.querySelectorAll('li');

    console.log(lis);

    lis.forEach(li => console.log(li.innerText));

    const nuevoLi = document.createElement('li');

    nuevoLi.innerText = 'Creado desde JavaScript';

    console.log(nuevoLi);

    const ul = document.querySelector('ul');

    ul.appendChild(nuevoLi);

    const input = document.querySelector('input');
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
        let span = document.querySelector('#mensaje');

        if (!span) {
            span = document.createElement('span');
            span.id = 'mensaje';
            button.insertAdjacentElement("afterend", span);
        }

        if (input.value) {
            span.innerText = 'Hola ' + input.value;
            input.classList.remove('error');
            span.classList.remove('error');
        } else {
            span.innerText = 'Introduce algo';
            span.classList.add('error');
            input.classList.add('error');
        }
    });
});
