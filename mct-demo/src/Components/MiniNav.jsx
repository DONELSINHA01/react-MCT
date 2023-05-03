import '../AllStyles/MiniNav.css';
import { Link } from 'react-router-dom';
export default function MiniNav() {
    return (
      <div className="mini" >
        <div className="left">
          <img
            width={"20%"}
            src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/mobile.png"
            alt=""
          />
          <ul>
           <Link  to={'/'}><li>HOME</li></Link> 
           <Link  to={'/pages'}><li>PAGES</li></Link> 
           <Link  to={'/menu'}><li>MENU</li></Link> 
           <Link  to={'/events'}><li>EVENTS</li></Link> 
           <Link  to={'/landing'}><li>LANDING</li></Link> 
           
           
          </ul>




        </div>

        <div className="mbars" >
    <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i className="fa-solid fa-bars" style={{color: '#fff'}} ></i>
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link class="dropdown-item" to={'/'}>Home</Link>
    <Link class="dropdown-item" to={'/pages'}>Pages</Link>
    <Link class="dropdown-item" to={'/menu'}>Menu</Link>
    <Link class="dropdown-item" to={'/events'}>Events</Link>
    <Link class="dropdown-item" to={'/blog'}>Blog</Link>
    <Link class="dropdown-item" to={'/landing'}>Landing</Link>
    
  </div>
</div>
      
      </div>
        <div className="right">
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          <button>Order Online</button>
        </div>
      </div>
    );
  }
  