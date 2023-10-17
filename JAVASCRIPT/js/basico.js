'use strict';

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

function conversiones() {
    // Conversión de texto a número
    const a = parseFloat(prompt('Dime un número')); //parseInt para número entero, parseFloat para número con decimales
    const b = +prompt('Dime otro número');

    alert(typeof a);
    alert(typeof b);

    // Conversión a texto '' + numero
    alert('La suma es ' + (a + b));
}

function arrays() {
    const arr = Array(3);

    arr[0] = 5;
    arr[1] = 7;
    arr[2] = 8;

    arr[3] = 7;
    arr[7] = 12;
    arr[9] = 'askldjflkajdfs';

    arr['casa'] = 'house';
    arr.perro = 'dog';

    arr.push('Nuevo');

    console.log(arr, arr.length);

    console.log(arr[9], arr['perro'], arr.casa);

    for(let clave in arr) {
        console.log(clave, arr[clave]);
    }

    for(let valor of arr) {
        console.log(valor);
    }
}

function diccionario() {
    const dic = [];

    dic.casa = 'house';
    dic.perro = 'dog';

    const clave = prompt('Dime la palabra a traducir');

    alert(dic[clave] || 'No tengo traducción');

    for(let clave in dic) { // Recorre todos los índices que existen sean numéricos o no
        console.log(clave, dic[clave]);
    }

    for(let valor of dic) { // Recorre los índices numéricos desde 0 hasta la longitud del array - 1
        console.log(valor);
    }
}

function objetos() {
    const obj = Object();

    obj.nombre = 'Javier';
    obj['apellidos'] = 'Lete';

    obj.hoyos = [2, 5, 3, 6, 7, 9];

    console.log(obj);

    const persona = { nombre: 'Javier', apellidos: 'Lete', hoyos: [2, 5, 3, 6, 7, 9] };

    persona.profesion = 'profesor';

    console.log(persona);

    console.log(persona.hoyos[2]);
}

function estructurasDeControl() {
    const ok = confirm('¿Estás de acuerdo?');

    if (ok) {
        console.log('Aceptado');
    } else {
        console.log('Rechazado');
    }

    const sino = prompt('Dime sí o no (s/n)'); //.toLowerCase();

    if (sino === 's' || sino === 'S') {
        console.log('Si');
    } else if (sino === 'n' || sino === 'N') {
        console.log('No');
    } else {
        console.log('No entiendo');
    }

    switch (sino) {
        case 'S':
        case 's':
            console.log('Si');
            break;
        case 'N':
        case 'n':
            console.log('No');
            break;
        default:
            console.log('No entiendo');
            break;
    }

    let c = 1;

    while (c <= 10) {
        console.log(c);
        c++;
    }

    c = 1;

    do {
        console.log(c);
        c++;
    } while (c <= 10);

    for(let i = 1; i <= 10; i++) {
        console.log(i);
    }

    const arr = [2, 5, 7, 98, 90, 8, 65, 4, 3, 4, 6, 7];

    for(let i = 0; i < arr.length; i++) {
        console.log(i, arr[i]);

        if(arr[i] > 50) {
            console.log('Encontrado');
            break;
        }
    }

    for(let clave in arr) {
        console.log(clave, arr[clave]);
    }

    for(let valor of arr) {
        console.log(valor);
    }
}

function adivinaElNumero() {
    // Elegir número a adivinar
    const adivinar = Math.floor((Math.random() * 100) + 1);

    let numero;

    do {
        // "Dime un número"
        numero = parseInt(prompt('Dime un número'));

        if(adivinar < numero) {
            // Es menor
            alert('Es menor');
        } else if(adivinar > numero) {
            // Es mayor
            alert('Es mayor');
        } else {
            // "FELICIDADES, HAS ACERTADO"
            alert('Felicidades, has acertado');
        }

    } while(numero != adivinar); // adivinar != numero

}

// variables();
// operadores();
// conversiones();
// arrays();
// diccionario();
// objetos();
// estructurasDeControl();
adivinaElNumero();