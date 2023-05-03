import React from 'react';
import '../AllStyles/Order.css'
import { height } from '@mui/system';
import { Link } from 'react-router-dom';
function Order(props) {
    return (
        <div className='order-page'>
            <div className="order-form">
            <div className="order-form-head" style={{backgroundColor:'burlywood',height:'65px'}}>
                <h2>WELCOME TO ITALIAN PIZZA!</h2>
                <small>We deliver pizza in 40 minutes max. If not - Pizza's on us!</small>
            </div>
            <div style={{textAlign:'left'}} className="order-form-fields">
               <p>Email</p>
               <input style={{width:'60%',height:'30px', border:'none'}} type="text" /> <br /><br />

               <p>Phone</p>
                <div className="input-field" >

                    <input placeholder='Area' style={{width:'20%' ,height:'30px',border:'none',boxShadow:'0 0 2px gainsboro'}} type="text" />&nbsp;&nbsp;
                  
                    <input placeholder='Local' style={{width:'20%' ,height:'30px',border:'none',boxShadow:'0 0 2px gainsboro'}} type="text" />&nbsp;&nbsp;
                    <input placeholder='Local' style={{width:'20%' ,height:'30px',border:'none',boxShadow:'0 0 2px gainsboro'}} type="text" />
                </div><br />
                <p>Number of slices</p>
                <input type="text" style={{width:'60%',height:'30px'}} /> <br /><br />
                <div className='radio'>
                <p>Pizza Size</p>
                <input type="radio" name="r" id="" />&nbsp;<label>8-inch</label>&nbsp;
                <input type="radio" name="r" id="" />&nbsp;<label>10-inch</label>&nbsp;
                <input type="radio" name="r" id="" />&nbsp;<label>12-inch</label>&nbsp;
                <input type="radio" name="r" id="" />&nbsp;<label>14-inch</label>&nbsp;
                </div><br />
                <div className='radio'>
                <p>Toppins</p>
                <input type="checkbox" name="r" id="" />&nbsp;<label>8-inch</label>&nbsp;
                <input type="checkbox" name="r" id="" />&nbsp;<label>10-inch</label>&nbsp;
                <input type="checkbox" name="r" id="" />&nbsp;<label>12-inch</label>&nbsp;
                <input type="checkbox" name="r" id="" />&nbsp;<label>14-inch</label>&nbsp;
                </div><br />

                <span style={{color:"red"}}>*</span><input type="checkbox" name="" id="" />&nbsp;<label htmlFor="">I agree to the TERMS AND CONDITIONS</label>
            </div>
            </div>
            <Link to='/orderSuccess'>
            <button className='order-button' style={{background:'brown',color:'white'}}>Order Now</button>
            </Link>

        </div>
    );
}

export default Order;