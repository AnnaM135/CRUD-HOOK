import React, {useContext} from 'react'
import { CartContext } from './CartContext'

function Cart() {

   const [cart, setCart] = useContext(CartContext)
   
   const totalSum = cart.reduce((acc, curr) => acc + curr.price, 0)

    return (
        <div className = "w-25 p-4 m-auto alert-warning">
            <snan>ITEMS IN CART : {cart.length}</snan>
            <br />
            <snan>TOTAL PRICE : {totalSum}</snan>
        </div>
    )
}

export default Cart
