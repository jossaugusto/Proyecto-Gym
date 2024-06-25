const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `

<div class="logo-buscador">
    <img class="logo" src="img/Inicio/logo_1.png" alt="logo">
    <div class="buscador">
        <input type="text" name="buscador" id="buscador" placeholder="Buscar...">
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
</div>
<nav class="navegacion">
    <menu class="menu">
        <li><a href="index.html">Inicio</a></li>
        <li><a href="productos.html">Productos</a>
            <ul class="submenu">
                <li><a href="">Suplemento</a></li>
                <li><a href="">Maquinaria</a></li>
            </ul>
        </li>
        <li><a href="servicios.html">Servicios</a></li>
        <li><a href="contactos.html">Contactos</a></li>
    </menu>
</nav>
    
`;


footer.innerHTML = `

<section class="paginas">
    <h3>Páginas</h3>
    <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="productos.html">Productos</a></li>
        <li><a href="servicios.html">Servicios</a></li>
        <li><a href="contactos.html">Acerca de</a></li>
    </ul>
</section>
<section class="contactos">
    <h3>Contacto</h3>
    <ul>
        <li>calle jacinta</li>
        <li>One Piece</li>
        <li><a href="">telefono</a></li>
        <li><a href="">gmail</a></li>
    </ul>
</section>
<section class="redes">
    <h3>Redes Sociales</h3>
    <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">X</a></li>
    </ul>
</section>

<p class="derechos">Gym infinity 2024 © Todos los derechos reservados</p>

`;