import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';
import Menu from '../Menu/Menu';
import './Header.css';

function Header(){
    return(
        <header className="header">
            <div className="container">
                <Menu/>
                <SearchBar/>
                <CartButton/>
            </div>
        </header>
    );
}

export default Header;