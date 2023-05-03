import React from 'react';
import '../AllStyles/Order.css'
import { height } from '@mui/system';
import { Link } from 'react-router-dom';
function Order(props) {
    return (
        <div className='order-page'>
           
     <div class="card" style={{ maxWidth: "500px" }}>
      <div style={{width:'100%',backgroundColor:'#FA8072',color:'white'}}>
    <h2><b>Welcome to the Italian Pizza</b></h2>
    <small> <i>We deliver pizza within 40 min max. If not your pizza is on us ..</i> </small><br/><br/><br/>
    </div>
  <div class="card-body">
    
    
  <form >
              <div class="form-group">
                <label for="email"><b>Email address</b></label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email" required
                />
              </div>
              <div class="form-group">
                <label for="phone"><b>Phone number</b></label>
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  placeholder="Enter phone number" required
                />
              </div>
              <div class="form-group">
                <label for="phone"><b>Pizza Slices</b></label>
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  placeholder="Number of slices" required
                />
              </div>
             
              <div class="form-group">
                <p><b>Pizza size</b></p> 
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="size"
                    id="8inch"
                    value="8-inch" 
                  />
                  <label class="form-check-label" for="8inch">
                    8-inch
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="size"
                    id="10inch"
                    value="10-inch" 
                  />
                  <label class="form-check-label" for="10inch">
                    10-inch
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="size"
                    id="12inch"
                    value="12-inch"
                  />
                  <label class="form-check-label" for="12inch">
                    12-inch
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="size"
                    id="14inch"
                    value="14-inch"
                  />
                  <label class="form-check-label" for="14inch">
                    14-inch
                  </label>
                </div>
              </div>

              <p><b>Toppins</b></p>
              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" id="terms" />
                <label class="form-check-label" for="terms">
                 Peperoni 
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" id="terms" />
                <label class="form-check-label" for="terms">
                  Onions 
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" id="terms" />
                <label class="form-check-label" for="terms">
                  Muahroom 
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" id="terms" />
                <label class="form-check-label" for="terms">
                 Sausage 
                </label>
              </div><br/><br/>


              <div class="form-check ">
                <input type="checkbox" class="form-check-input" id="terms" required/>
                <label class="form-check-label" for="terms">
                  I agree to the terms and conditions
                </label>
              </div> <br/>
             
               <Link to={'/orderSuccess'}>
              <button type="submit" class="btn btn-primary btn-lg custom-button">
                Order Now
              </button>
              </Link>

            </form>
  </div>
</div>
     
        </div>
    );
}

export default Order;
