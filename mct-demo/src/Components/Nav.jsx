import React from 'react';
import '../AllStyles/Nav.css';
import { Link } from 'react-router-dom';
function Nav(props) {
    return (
        <nav>
           <div className="nav-content1">
            <img width={'100px'} src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/mobile.png" alt="" />
           </div>
           <div className="nav-content2">
            <ul style={{display:'flex',flexDirection:'column',justifyContent:'space-between',gap:'30px',alignItems:'center'}}>
                <Link to={'/'}><li>HOME</li></Link>
                <Link to={'/pages'}><li>PAGES</li></Link>
                <Link to={'/menu'}><li>MENU</li></Link>
                <Link to={'events'}><li>EVENTS</li></Link>
                <Link to={'/blog'}><li>BLOG</li></Link>
                <Link to={'landing'}><li>LANDING</li></Link>
            </ul>
           </div>
           <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}} className="nav-content3">
           <i class="fa-brands fa-twitter"></i>
           <i class="fa-brands fa-facebook"></i>
           <i class="fa-brands fa-instagram"></i>
           <i class="fa-brands fa-linkedin"></i>

           </div>
           <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}} className="nav-content4" >
            <span style={{width:'50px',color:'whitesmoke'}}>Order Online</span>
            </div> 
        </nav>
    );
}

export default Nav;