import React, {useReducer,useState,} from 'react'
import {BrowserRouter,Route} from "react-router-dom"
import AddCategory from './components/AddCategory'
import AddProduct from './components/AddProduct'
import Cart from './components/Cart'
import { CartProvider } from './components/CartContext'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Phones from './components/Phones'
import Product from './components/Product'
import ProductItem from './components/ProductItem'
import './components/style/App.css'

function App() {
  return (
    <BrowserRouter>
                <NavBar />   
    <CartProvider>
                <Route path="/" exact component={Home}/>
                {/* <Route path="/phones" exact component={Phones}/> */}
                <Route path="/products/menu/:id" exact component={Product}/>
                {/* <Route path="/products/:id"  component={ProductItem}/> */}
                <Route path = "/admin/add" component = {AddProduct} />
                <Route path = "/admin/category/add" component = {AddCategory} />
                <Route />
                <Cart />
    </CartProvider>
      </BrowserRouter>

  )
}




export default App;
