const ETIQUETAS = [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', '+/-', 0, ',', '+', 'C', '<=', '%', '='];

window.addEventListener('DOMContentLoaded', () => {
    const botonera = document.querySelector('#botonera');
    const resultado = document.querySelector('input');

    let a, b, op;

    for (let etiqueta of ETIQUETAS) {
        const boton = document.createElement('button');

        boton.type = 'button';
        boton.innerText = etiqueta;

        boton.addEventListener('click', botonClick);

        botonera.appendChild(boton);
    }
    function botonClick(evento) {
        const etiqueta = evento.target.innerText;

        switch (etiqueta) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case ',':
                resultado.value += etiqueta;
                break;
            case '%':
                resultado.value /= 100;
                break;
            case 'C':
                resultado.value = '';
                break;
            case '+':
                a = +resultado.value;
                op = '+';
                resultado.value = '';
                break;
            case '=':
                b = +resultado.value;

                switch(op) {
                    case '+':
                        resultado.value = a + b;
                        break;
                    default:
                        resultado.value = 'NO ESTA IMPLEMENTADA';
                }
        }
    }
});
