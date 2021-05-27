import React, {useEffect, useState, useContext} from 'react'
import axios from "axios"
import { CartContext } from './CartContext'
import { showItem } from '../servieses/ProductService'


function ProductItem( {match} ) {

    useEffect(() => {
        fetchItem()
    }, [])
    const [item, setItem] = useState([])
    const [element, setElement] = useState({})
    const [cart, setCart] = useContext(CartContext)

    const fetchItem = () => {
        let id = match.params.id
        showItem(id).then(r => {
            setElement(r.data.data)
        })
    }
    const addToCart = () => {
        const prod = {name: element.name, count: element.count, price: element.price}
        setCart(current => [...current, prod])
    }
    return (
        <div class="container">
            <div class="card" style={{width: "400px"}}>
                <img class="card-img-top" src={`http://localhost:8000/images/${element.img}`} alt="Card image" style={{width: "100%"}} />
                <div class="card-body">
                <h4 class="card-title">{element.name}</h4>
                <p class="card-text"><p>{element.count}</p></p>
                <p class="card-text"><p>{element.price}</p></p>
                <button onClick = {addToCart} className = "btn btn-success">Add to cart</button>
                </div>
            </div>
            <br />
        </div>
    )
}

export default ProductItem
