import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import '../AllStyles/Home.css';

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DialogBox from "./DialogBox";

import Nav from "./Nav";



export default function Home() {


  const [firstCount, setFristCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  const state = useSelector(state => state.pizzas.productos)
  const [open, setOpen] = useState(false);


  const [quickView, setQuickView] = useState({});

  console.log(state);

  const dispatch = useDispatch();
  useEffect(() => {
    const url = 'https://pizzaallapala.p.rapidapi.com/productos';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f77e75f587msh1f56e8b289713b7p1b6d6ajsn4aaa12b88659',
        'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
      }
    };

    try {

      fetch(url, options)
        .then(res => res.json())
        .then(data => {
          console.log('hello');
          dispatch({
            type: 'allPizza',
            pizzas: data
          });
        })

    } catch (error) {
      console.error(error);
    }
  }, []);


  return (
    <div className="myHome">
      {/* <MiniNav/>   */}
      <div className={"bars"}>
        <div class="dropdown show">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa-solid fa-bars" style={{ color: '#fff' }} ></i>
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

      <Nav />
      <div className='homeContent' >
        <div className="homes" style={{ display: 'flex' }}>

          <div className="main-page">
            <div className="pan">
              <div className="form">
                <h1 className="form-head">DELEVERY TO THE</h1>
                <h1 className="form-head head2">DOORSTEP</h1>
                <div className="form-text">
                  <p>{">"}</p>
                  <p>Choose your ingredients</p>
                </div>
                <div className="form-text">
                  <p>{">"}</p>
                  <p>Get free delivery 24/7</p>
                </div>
                <div className="form-text">
                  <p>{">"}</p>
                  <p>Special gift coupons</p>
                </div>
                
                <div className="subscribe-email">
                  <input type="text" name="" id="" placeholder="Email"/>
                  <button>SUBSCRIBE</button>
                </div>
              </div>
              <div style={{ width: '50%' }} className="bigger-pizza">
                <img width='80%' src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h4-rev-img-1.png" alt="" />
              </div>


            </div>
            <div className="left-image">
              <img width='100%' height='100%' src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/11/Trougao.png" alt="" />
              <img width={'36%'} src="https://th.bing.com/th/id/OIP.gfhJaSaiq73ur0liPuFJnAHaHa?pid=ImgDet&w=2519&h=2519&rs=1" alt="" className="natural-product" />
            </div>

          </div>
        </div>
        <div className="pizzaCards" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
          {
            state && state.map((element) => {
              return (
              <>
              <div className="Pcard">
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
                <div className="part2-hiddenButtons" style={{ paddingTop: '30px' }}>
                  <button className="hidden-buttons" style={{ width: '45%', height: '40px', background: '#D2401E', color: '#fff' }}>WishList</button>&nbsp;&nbsp;
                  <button onClick={() => {
                    setOpen(true);
                    setQuickView(element);
                  }} className="hidden-buttons" style={{ width: '45%', height: '40px' }}>Quick View</button>
                </div>
              </div>
              </>)
            })    
          }
          <DialogBox image={quickView.linkImagen} name={quickView.nombre} price={quickView.precio} open={open} setOpen={setOpen}/>
        </div>

      </div>
    </div>
  )

}
