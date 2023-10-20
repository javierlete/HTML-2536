window.addEventListener('DOMContentLoaded', () => { mostrarContactos(); });

async function mostrarContactos() {
    const respuesta = await fetch('http://localhost:3000/contactos');
    const contactos = await respuesta.json();

    contactos.forEach(contacto => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <th scope="row">${contacto.id}</th>
        <td>${contacto.nombre}</td>
        <td>${contacto.numero}</td>
        <td>${contacto.fecha}</td>
    `;

        document.querySelector('tbody').appendChild(tr);
    });
}
