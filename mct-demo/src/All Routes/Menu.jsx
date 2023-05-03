import React from 'react';
import '../AllStyles/Menu.css';
import MiniNav from '../Components/MiniNav';
import { useSelector } from 'react-redux';
function Menu(props) {

    const menuStore = useSelector(store=>store.pizzas.productos);


    return (
        <div className='menu'>
           <MiniNav></MiniNav>
           <div className="wallpaper" style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'0 auto'}}>
            <div>
            <h6 style={{color:'white'}}>Choose Your Favourite</h6>
            <h1 style={{fontSize:'70px',color:'white'}}>Menu Light</h1>
            </div>
           </div>

                 <div className="pizzaCards" style={{ paddingTop: '50px', paddingBottom: '50px' ,width:'100vw' ,border:'2px solid red'}}>
        {
          menuStore && menuStore.map((element) => {
            return (<div className="card">
              <div className="part-1">
                <div style={{ height: '200px' }} className="card-pizza-image">
                  <img style={{ height: '170px', width: '170px', borderRadius: '50%' }} src={element.linkImagen} alt={element.descripcion} />
                </div>
                <div className="card-pizza-content">
                  <p style={{ textAlign: 'center', color: '#B7903C', fontWeight: 'bold', fontFamily: 'sans-serif' }}>{element.nombre}</p><br />
                  <div>
                    <i class="fa-solid fa-star" style={{ color: 'gold' }}></i>&nbsp;
                    <i class="fa-solid fa-star" style={{ color: 'gold' }}></i>&nbsp;
                    <i class="fa-solid fa-star" style={{ color: 'gold' }}></i>&nbsp;
                    <i class="fa-solid fa-star" style={{ color: 'gold' }}></i>&nbsp;
                    <i class="fa-solid fa-star" style={{ color: 'gray' }}></i>
                  </div><br />
                  <p style={{ textAlign: 'center', color: 'rgb(179, 62, 44)', fontWeight: 'bold' }}>${element.precio}</p>
                </div>
              </div>
              

              

            </div>)
          })


          
        }



      </div> 
        </div>
    );
}

export default Menu;
