import React, { Component } from 'react'
import './style/Phones.css'

export class Phones extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            phones:[
                
                    {
                        id:1,
                        name:"Iphone 12",
                        image:"./images/iphone12.jpg",
                        count:"15",
                        price:"200$"
                      },
              
                      {
                        id:2,
                        name:"Samsung S 20",
                        image:"./images/samsungs20.jpg",
                        count:"10",
                        price:"180$"
                      },
              
                      {
                        id:3,
                        name:"Xiaomi Mi 10",
                        image:"./images/xiaomi.jpg",
                        count:"10",
                        price:"120$"
                      }
                
            ]
       }
   }
   
    render() {
        return (
            <div  className="divcent" >
               {
                   this.state.phones.map((a,b)=>{
                       return(
                           <div key={b}>
                                <h2 style={{marginTop:"50px"}}>{a.name}</h2>
                                  <img src={a.image} className="" alt="Cinque Terre"  alt="..." style={{width:"250px",height:"200px",}} ></img>
                                <p>Quantity: {a.count}</p>
                                <p>Price:{a.price}</p>
                                <button type="button" className="btn btn-primary">

                                   
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                                </svg>
                                </button>
                           </div>

                           
                       )
                   })
               }

            </div>
        )
    }
}

export default Phones
