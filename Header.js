import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useStateValue } from "./StateProvider";




function Header() {
   
    const[{ basket }]=useStateValue();

    console.log(basket);


    return (
       
        <nav className="header">
            {/*amazon logo*/}
            <Link to="/">
            <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>  
            {/*search box*/}
            <div className="header__search">
                
                <input type="text" placeholder="Designed by Sathiyanarayan GS" className="header__searchInput"/>
               <button type="submit">Go</button>

                
    </div>
    
            {/*3Links*/}
            <div className="header__nav">
                {/*!st link */}
                <Link to="/" className="header__link">
                <div className="header__option">
                <span className="header__optionLineOne"> Hello Sathya</span>
                <span className="header__optionLineTwo">Sign In</span>
                </div>
                </Link>

                {/*2nd link */}
                <Link to="/" className="header__link">
                <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
                </div>
                </Link>

                {/*3rd link */}
                <Link to="/" className="header__link">
                <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
                </div>
                </Link>
                
                {/*Basket with no */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                    <FontAwesomeIcon icon = {faShoppingCart} />
                    <span className="header__optionLineTwo header__basketCount" >{basket?.length}</span>
                    
                    </div>
                </Link>


            </div>
            
               
        </nav>
    )
}

export default Header
