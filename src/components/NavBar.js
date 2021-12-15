import React from 'react';

//componente a exportar
const NavBar = () => {
    return (
        <div>
          <ul id="nav">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
    );
}


//exportando el componente deseado
export default NavBar;