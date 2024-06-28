let header = document.getElementById("encabezado");
let footer = document.getElementById("pie");

encabezado.innerHTML = `

<img class="logo" src="img/Inicio/logo_1.png" alt="logo">

<nav class="navegacion">
    <menu class="menu">
        <li><a href="index.html">Inicio</a></li>
        <li><a href="productos.html">Productos</a>
            <ul class="submenu">
                <li><a href="productos.html#comprar-suplementos">Suplementos</a></li>
                <li><a href="productos.html#maquinaria">Maquinaria</a></li>
            </ul>
        </li>
        <li><a href="servicios.html">Servicios</a></li>
        <li><a href="contactos.html">Contactos</a></li>
    </menu>
</nav>
    
`;


pie.innerHTML = `

<section class="paginas">
    <h3>Páginas</h3>
    <ul>
        <li><a href="index.html#inicio">Inicio</a></li>
        <li><a href="productos.html">Productos</a></li>
        <li><a href="servicios.html">Servicios</a></li>
    </ul>
</section>
<section class="contactos">
    <h3>Contacto</h3>
    <ul>
        <li>+51 980 556 048</li>
        <li>Gym-Infinity@gmail.com</li>
        <li><a href="">Av Mariscal Caceres 5496</a></li>
    </ul>
</section>
<section class="redes">
    <h3>Redes Sociales</h3>
    <ul>
        <li><a href="https://facebook.com"><i class="fa-brands fa-facebook"></i>Facebook</a></li>
        <li><a href="https://Instagram.com"><i class="fa-brands fa-instagram"></i>Instagram</a></li>
        <li><a href="https://x.com"><i class="fa-brands fa-x-twitter"></i>Twitter</a></li>
    </ul>
</section>

<p class="derechos">Gym infinity 2024 © Todos los derechos reservados</p>

`;