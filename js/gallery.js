// Supongamos que tienes la cantidad de archivos JPG en la carpeta 1cac almacenada en una variable llamada 'cantidadArchivos'

// Obtener el contenedor donde se insertarán las tarjetas
const contenedor = document.getElementById('contenedor-tarjetas');
const elementoConClaseTitle = document.querySelector('.title');
const elementoConClaseCant = document.querySelector('.cant');

cantidadArchivos = parseInt(elementoConClaseCant.id);
console.log(cantidadArchivos);
// Bucle para generar las tarjetas según la cantidad de archivos
for (let i = 1; i <= cantidadArchivos; i++) {
    // Generar el código HTML de la tarjeta
    const codigoHTML = `
        <div class='card'>
            <div class='card-image-wrapper'>
                <img src='./img/galeria/projects/${elementoConClaseTitle.id}/0${elementoConClaseTitle.id}-${i}.jpg'>
            </div>
        </div>
    `;
    
    // Insertar la tarjeta en el contenedor
    contenedor.innerHTML += codigoHTML;
}
