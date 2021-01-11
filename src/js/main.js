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