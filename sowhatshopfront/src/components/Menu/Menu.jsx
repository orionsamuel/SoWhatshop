import React from 'react';
import './Menu.css';

function Menu() {
    const handleLinkClickProducts = () => {
        window.location.href = '/Products'; 
    };

    const handleLinkClickContact  = () => {
        window.location.href = '/Contact'; 
    };

    return (  
        <nav className="menu">
            <ul>
                <li>
                <a href="#" onClick={handleLinkClickProducts} style={
                        { textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Produtos</a>
                </li>
                <li>
                <a href="#" onClick={handleLinkClickContact} style={
                        { textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Contatos</a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;