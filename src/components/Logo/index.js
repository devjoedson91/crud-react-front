import React from "react";
import logo from '../../assets/images/logo-react.png';
import './styles.css';

export default function Logo() {

    return (

        <aside className="logo">

            <a href="/" className="logo">
                <img src={logo} alt="logo" />
            </a>

        </aside>

    );

}