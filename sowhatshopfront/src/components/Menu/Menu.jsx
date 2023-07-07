import React from 'react';
import './Menu.css';

function Menu() {
    const handleLinkClickProducts = () => {
        window.location.href = '/Products'; 
      };

    return (  
        <nav className="menu">
            <ul>
                <li>
                <a href="#" onClick={handleLinkClickProducts} style={
                        { textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Produtos</a>
                </li>
                <li>Contato</li>
            </ul>
        </nav>
    );
}

export default Menu;