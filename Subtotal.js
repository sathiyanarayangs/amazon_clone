import React from 'react'

import {useStateValue} from "./StateProvider"
import "./Subtotal.css"
function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='subTotal'>
            
            
                
                <p>
                    Subtotal({basket.length} items);
                </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox"/>This Order Contains a gift
                    </small>

   

          
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
