import React from "react";
import { Link } from "react-router-dom";
import Foodtypes from "./Foodtypes";
function Recipes(){
    return(
    <div>
        <div className="recipes-grid">
              <div className="veg1">Vegetarian recipes
                 <div className="veg2">
                <div><Link to="/Fries">Fries</Link></div>
                <div><Link to="/Soups">Soups</Link></div>
                <div><Link to="/Curries">Curries</Link></div>
                </div>
            </div>
           <div className="non-veg"> Non-vegetarian Recipes
                <div className="non-veg2">
                <div><Link to="/Fish">Fish</Link></div>
                <div><Link to="/Chicken">Chicken</Link></div>
                <div><Link to="/Prawns">Prawns</Link></div>
                </div>
            </div>
            <div className="snack1">Snacks
                <div className="snack2">
                <div><Link to="/Frankies">Frankies</Link></div>
                <div><Link to="/Chaat">Chaat</Link></div>
                   <div><Link to="/Beverages">Beverages</Link></div>
            </div>
            </div> 
       </div>
       <Foodtypes />
   </div>
              );
}
export default Recipes;
          
        
       
       
