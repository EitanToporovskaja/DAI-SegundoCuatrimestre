import React from 'react';
import {style} from "./style.jsx";
import Link from 'next/link.js';
import './styles.css';
const NavBar= ()=>{
    return(
        <nav style={style.nav}>

            <ul style={style.ul}>
                <li className='li' style={style.li}><Link style={style.a} href ="/">a</Link> </li>
                <li className='li' style={style.li}><Link style={style.a} href ="/a">b</Link> </li>
                <li className='li' style={style.li}><Link style={style.a} href ="/b">c</Link> </li>
                <li className='li' style={style.li}><Link style={style.a} href ="/c">d</Link> </li>
                
            </ul>
    </nav>  
    );

    
}
export default NavBar;