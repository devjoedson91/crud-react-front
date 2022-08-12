import React from "react";
import './styles.css';
import Icons from '../Icons';

export default function Nav() {

    return (

        <aside className="menu-area">
            <nav className="menu">
                <a href="/">
                    <Icons type="home"/> Inicio
                </a>
                <a href="/users">
                    <Icons type="users"/> Usuarios
                </a>
            </nav>
        </aside>

    );

}