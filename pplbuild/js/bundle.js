document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria (){
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 8; i++) {
        const imagen = document.createElement('img');
        imagen.src = `pplbuild/img/thumbs/${i}.webp`;
        imagen.dataset.imagenId = i;

        // AÑADIR LA FUNCION DE AMPLIAR IMAGEN
        imagen.onclick = imagenAmpliada;

        const listaImagenes = document.createElement('li');
        listaImagenes.appendChild(imagen);

       galeria.appendChild(listaImagenes);
        
    }
}

function imagenAmpliada(e){
    // VARIABLE PARA SELECCIONAR LA IMAGEN CLICKEADA
    const imagenIdSeleccionada = parseInt(e.target.dataset.imagenId);

    // CREAMOS LA IMAGEN GRANDE
    const imagen = document.createElement('img');
    imagen.src = `pplbuild/img/${imagenIdSeleccionada}.webp`;

    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    overlay.onclick = function(){
        overlay.remove();               // PARA CERRAR LA IMAGEN DANDO CLICK FUERA
    }

    // BOTON PARA CERRAR LA IMAGEN
    const botonCerrarImagen = document.createElement('p');
    botonCerrarImagen.textContent = 'X';
    botonCerrarImagen.classList.add('btn-cerrar');

    // FUNCIONALIDAD DEL BOTON
    botonCerrarImagen.onclick = function(){
        overlay.remove();
    }

    overlay.appendChild(botonCerrarImagen);

    // MOSTRAR EN HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}
document.addEventListener('DOMContentLoaded', function(){
    scrollNav();

    navegacionFija();
});

function navegacionFija(){
    const barra = document.querySelector('.site-header');

    // REGISTRAR-CREAR EL INTERSECTION OBSERVER
    const observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        } else{
            barra.classList.add('fijo');
        }
    });

    // ELEMENTO A OBSERVAR
    observer.observe(document.querySelector('.contenido-principal'));
}

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(function(enlace){
        enlace.addEventListener('click',function(e){
            e.preventDefault();

            const scrollSeccion = document.querySelector(e.target.attributes.href.value);

            scrollSeccion.scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
}