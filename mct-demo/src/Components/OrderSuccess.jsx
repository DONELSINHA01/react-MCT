import React from 'react';
import scooter from '../AllStyles/pizza-scooter.PNG';
import '../AllStyles/OrderSuccess.css';
import { Link } from 'react-router-dom';
function OrderSuccess(props) {
    return (
        <div className='myScooter'>
            <div class="container">
                <img src={scooter} alt="Pizza Delivery Scooter"/>
                <div class="road"></div>
            </div>

            <div>
            <Link to={'/'}><button>Back to Home Page</button></Link>
            </div>

        </div>
    );
}

export default OrderSuccess;