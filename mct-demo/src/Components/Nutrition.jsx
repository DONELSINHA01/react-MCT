import React from 'react';

function Nutrition(props) {
    return (
        <div>
            
            <table style={{width:"330px"}}>
                      <tr>
                        <td style={{ color:'brown',fontWeight:'bolder'}}>Calories</td>
                        <td>-------------------------</td>
                        <td style={{ color:'brown',fontWeight:'bolder'}}>880 kcal</td>

                      </tr>
                      <tr>
                        <td style={{ color:'brown',fontWeight:'bolder'}}>Carbohydrates</td>
                        <td>-------------------------</td>
                        <td style={{ color:'brown',fontWeight:'bolder'}}>20 g</td>
                      </tr>
                      <tr>
                        <td style={{ color:'brown',fontWeight:'bolder'}}>Squirrels</td>
                        <td>-------------------------</td>
                        <td style={{ color:'brown',fontWeight:'bolder'}}>30 g</td>
                      </tr>
                      <tr>
                        <td style={{ color:'brown',fontWeight:'bolder'}}>Fats</td>
                        <td>-------------------------</td>
                        <td style={{ color:'brown',fontWeight:'bolder'}}>50 g</td>
                      </tr>
                    </table>
        </div>
    );
}

export default Nutrition;