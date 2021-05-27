import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import { showCategory } from '../servieses/ProductService'



function NavBar() {

  useEffect(() => {
    show()
  }, [])

  const [categoryName, setCategoryName] = useState([])
  const show = () => {
    showCategory().then(r => {
      setCategoryName(r.data)
    })
  }
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark ">
            
            <Link to="/" className="navlink">Home</Link>
              {
                categoryName.map(elem => (
                  <Link to = {`/products/menu/${elem.id}`}>{elem.name}</Link>
                ))
              }

            <nav className="navbar navbar-light bg-black">
            <div className="container-fluid">
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button >
              </form>
            </div>
          </nav>
            
            

          </nav>   
        </div>
    )
}

export default NavBar
