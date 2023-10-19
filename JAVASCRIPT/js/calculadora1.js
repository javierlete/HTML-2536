window.addEventListener('DOMContentLoaded', () => {
    const inputA = document.querySelector('#a');
    const inputB = document.querySelector('#b');
    const selectOp = document.querySelector('#op');
    // const btnIgual = document.querySelector('#igual');
    // const spanResultado = document.querySelector('#resultado');
    const inputResultado = document.querySelector('#resultado');

    const form = document.querySelector('form');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const a = +inputA.value;
        const b = parseFloat(inputB.value);
        const op = selectOp.value;

        let resultado;

        switch(op) {
            case '+':
                resultado = a + b;
                break;
            case '-':
                resultado = a - b;
                break;
            case '*':
                resultado = a * b;
                break;
            case '/':
                resultado = a / b;
                break;
            default:
                resultado = 'No tengo la operación ' + op;
                selectOp.setCustomValidity('No existe esta operación');
                form.reportValidity();
        }

        // spanResultado.innerText = resultado;
        inputResultado.value = resultado;
    });

    selectOp.addEventListener('change', () => {
        selectOp.setCustomValidity('');
    });
});