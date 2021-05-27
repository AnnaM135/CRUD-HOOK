import React, {useEffect, useState, useContext} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import './style/Phones.css'
import swal from 'sweetalert';
import {del, showProducts} from "../servieses/ProductService"
import { CartContext } from './CartContext'


function Product({ match }) {
    
    let u = match.params.id            
    const [items, setItems] = useState([])
    let [types, setTypes] = useState([])
    const [cart, setCart] = useContext(CartContext)

    useEffect(() =>{
        fetchItems()
    }, [])
//
    const fetchItems = () => {
         showProducts().then(r => {
            setItems(r.data)
            items.map(elem => {
                setTypes([elem.category.name])
            })
            types = types.filter((c, index) => {
                return types.indexOf(c) === index
            })
        })
    }
    console.log(types)
//
    const deleteItem = (id) => {
        del(id).then(r => {           
           swal("DELETED!")           
            let newItem =  items.filter(elem => elem.id != id)
                setItems(newItem)
        })  
    }

    const addToCart = (item) => {
        const prod = {name: item.name, count: item.count, price: item.price}
       setCart(current => [...current, prod])
    }

    

    return (
        
        <div className="divcent" >
        
 
            {

                items.map(item => (
                    <div class = "blocks" key={item.id}>
                         <div className="" alt="Cinque Terre"  alt="..."  >
                             <img src = {`http://localhost:8000/images/${item.img}`} style={{width:"250px",height:"200px", margin: "10px"}}/>
                         </div>
                         <Link to = {`/products/${item.id}`}><h2 style={{marginTop:"50px"}}>{item.name}</h2></Link>
                         <p>Quantity: {item.count}</p>
                         <p>Price:{item.price}</p>
                          <p>{item.category.name}</p>
                                        
                         <button className = "btn btn-danger" onClick = {() => deleteItem(item.id)}>
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                         </button>
                         <button onClick = {() => addToCart(item)} className = "btn btn-success">Add to cart</button>

                    </div>
                ))
            }
            
        </div>
    )
}

export default Product
