import React, {useState, useEffect} from 'react'
import "./style/AddProduct.css"
import axios from "axios"
import { showAddProd } from '../servieses/ProductService'
import { addProduct } from '../servieses/ProductService'


function AddProduct() {

    useEffect(() => {
        showProdparam()
    }, [])

    const [categories, setCategories] = useState([])
    const [suppliers, setSuppliers] = useState([])
    const [state, setState] = useState({
            name: "",
            count: "",
            price: "",
            description: "",
            img: "",
            categoryId: "",
            // suppliersId:[]
    })

    const changeValue = (e) => {
        const target = e.target
        // if(target.name === "suppliersId"){
        //    setState(() => {
        //     return{
        //         ...state,
        //         ...state.suppliersId,
        //         [target.name]: target.value
        //     }
        //    })
        // }

        if(target.name === "img"){
            setState(() => {
                return{
                    ...state,
                    [target.name]: target.files[0]
                }
            })
        }
        else{
        setState(() => {
            return{
                ...state,
                [target.name]: target.value
            }
        })
        }
      
    }

    const showProdparam = () => {
        showAddProd()
        .then(r => {
            setCategories(r.data.data)
            setSuppliers(r.data.c)
        })

    }

    const add = () =>{
        console.log(state)
        let formData = new FormData()
        formData.append("name", state.name)
        formData.append("count", state.count)
        formData.append("price", state.price)
        formData.append("description", state.description)
        formData.append("img", state.img)
        formData.append("categoryId", state.categoryId)
        // state.suppliersId.forEach((a) => {
        //     formData.append("suppliersId", a);
        //   });
        addProduct(formData)
        .then(r => {
            console.log(r)
            // this.state.inp = {
            //     name: "",
            //     count: "",
            //     price: "",
            //     description: "",
            //     img: "",
            //     categoryId: "",
            //     suppliersId:[]
            // }
        })
    }

    return (
        <div className = "card-center">
            <div className = "w-25 p-4 alert-primary">
                <h1 className = "text-primary">Add Product</h1>
                <input className = "form-control" value = {state.name} onChange = {changeValue} name = "name" placeholder =  "Enter Product Name" type = "text" />
                <input className = "form-control" value = {state.count} onChange = {changeValue} name = "count" placeholder =  "Enter Product Count" type = "text" />
                <input className = "form-control" value = {state.price} onChange = {changeValue} name = "price" placeholder =  "Enter Product Price" type = "text" />
                <input className = "form-control" value = {state.description} onChange = {changeValue} name = "description" placeholder =  "Enter Product description" type = "text" />
                <input className = "form-control" name = "img" onChange = {changeValue} placeholder =  "Upload Product Image" type = "file" />
               
                <select className = "form-control" name = "categoryId" value = {state.categoryId} onChange = {changeValue}>
                        {
                            categories.map(elem => (
                                <option key = {elem.id} value = {elem.id}>{elem.name}</option>
                            ))
                        }
                </select>
               
                <button className = "btn btn-primary w-25" onClick = {add}>Add</button>
            </div>
        </div>
    )
}

export default AddProduct
