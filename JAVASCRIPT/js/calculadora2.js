const ETIQUETAS = ['sqrt', '', '', '', 7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', '+/-', 0, ',', '+', 'C', '<=', '%', '='];

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
                escribirResultadoNumerico(leerResultado() / 100);
                break;
            case 'sqrt':
                escribirResultadoNumerico(Math.sqrt(leerResultado()));
                break;
            case 'C':
                vaciarResultado();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                operacionPulsada(etiqueta);
                break;
            case '+/-':
                escribirResultadoNumerico(-leerResultado());
                break;
            case '<=':
                resultado.value = resultado.value.substring(0, resultado.value.length - 1);
                break;
            case '=':
                b = leerResultado();

                switch (op) {
                    case '+':
                        escribirResultadoNumerico(a + b);
                        break;
                    case '-':
                        escribirResultadoNumerico(a - b);
                        break;
                    case '*':
                        escribirResultadoNumerico(a * b);
                        break;
                    case '/':
                        escribirResultadoNumerico(a / b);
                        break;
                    default:
                        resultado.value = 'NO ESTA IMPLEMENTADA';
                }
        }
    }

    function escribirResultadoNumerico(dato) {
        resultado.value = dato.toLocaleString('es', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 9,
            useGrouping: true
        });
    }

    function operacionPulsada(operacion) {
        if(resultado.value !== '') {
            a = leerResultado();
        }
        
        op = operacion;

        console.log('guardando', 'a', a, 'op', op);

        vaciarResultado();
    }

    function leerResultado() {
        return +resultado.value.replace('.', '').replace(',', '.');
    }

    function vaciarResultado() {
        resultado.value = '';
    }
});
