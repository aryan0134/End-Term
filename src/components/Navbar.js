import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './NavbarData';
import './Navbar.css';
import logo from '../Playstation/logo.png';
import menu from '../Playstation/menu.png';

function Navbar() {
  const [toggle,setToggle] =  useState(0);
  function click(){
    if(toggle==0){
        setToggle(1);
    }
    else{
        setToggle(0);
    }
  }
  return (
    <>  
        <nav className="navbar">
            <img src={logo} className='logo' />
            {toggle==1 ?
            <ul>
                {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                })}
            </ul> : 
            <ul className='menulist1'>
            {SidebarData.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
            })}
        </ul> }
            <img src={menu} className='menu-icon' onClick={click}/>
        </nav>
    </>
  )
}

export default Navbar