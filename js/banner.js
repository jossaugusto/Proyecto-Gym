let c=0;

function carrusel(){
    let imagen = document.getElementById("banner");

    c++;

    if(c>3) c=1;

    imagen.style.opacity = 0;

    setTimeout(function transicion() {
        imagen.setAttribute("src", "img/Inicio/banner" + c + ".jpg");
        imagen.style.opacity = 1;
    }, 500);
    
    setTimeout(carrusel, 3.5 * 1000);
}

carrusel()