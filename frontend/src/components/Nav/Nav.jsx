import React from 'react';
import "./nav.css";
import logo from '../../assets/10_ans.svg'
import logo_ace from '../../assets/ace.svg'

const Nav = () => {
    return (
        <nav>
            <div class="nav">
                <div class="logo">
                    <img src={logo_ace} alt="" srcset="" />
                </div>
                <div class="line"></div>
                <div class="logo">
                    <img src={logo} alt="" srcset="" />
                </div>
            </div>
            <p class="ace">APOTHEOSE 2024 </p>
        </nav>
    )
}

export default Nav