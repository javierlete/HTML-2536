'use strict';

// variables();
operadores();

function variables() {
    // console.log(nombre); // No se puede acceder a una variable let antes de estar declarada

    let nombre;

    console.log(nombre);
    console.log(typeof nombre);

    console.log('hola');
    console.log('adios');

    nombre = 'Javier';

    console.log(nombre);

    nombre = prompt('Introduce tu nombre');

    console.log(nombre);

    const numero = 5;

    console.log(numero);

    // numero = 6; // No se puede cambiar el valor de una const

    const respuesta = confirm('¿Estás de acuerdo?');

    console.log(respuesta, typeof respuesta);

    console.log(typeof variables);
    console.log(variables);
}

function operadores() {
    console.log(2 + 3);
    console.log(2 - 3);
    console.log(2 * 3);
    console.log(2 / 3);

    console.log(2 + 3 + 4 + (5 * 4));

    console.log(5 % 2); // Resto de la división de 5 / 2

    console.log(5 ^ 2); // 5 -> 101 
    // 2 -> 010 XOR
    // ============
    // 7 -> 111

    console.log(5 ** 2);

    console.log(Math.sqrt(16));

    const numero = '105';

    console.log(numero == 5);
    console.log(numero === 5);

    console.log(1 <= numero && numero <= 10);

    let valorQuePuedeSerIndefinido;
    const valor = valorQuePuedeSerIndefinido || 0;

    console.log(valor);

    const textoIntroducido = '5';
    const valorConvertido = +textoIntroducido;

    console.log(!isNaN(valorConvertido));
    console.log(esNumero(valorConvertido));
}

function esNumero(dato) {
    return !isNaN(dato);
}