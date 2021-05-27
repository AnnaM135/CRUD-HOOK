// import React, {useState} from 'react'

// export const CardContext = React.createContext()

// export const CartProvider = (props) => {
//     const [cart, setCart] = useState([])
//     return(
//         <CardContext.Provider value={[cart, setCart]}>
//             {props.children}
//         </CardContext.Provider>
//     )
// }


import React, {useState} from 'react'

export const CartContext = React.createContext()

export const CartProvider = (props) =>{
    const [cart, setCart] = useState([])
    return (
            <CartContext.Provider value = {[cart, setCart]}>
                {props.children}
            </CartContext.Provider>
    )
    
}

