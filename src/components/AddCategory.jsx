import React, {useState} from 'react'
import { addCategory } from '../servieses/ProductService'

function AddCategory() {
    const [categoryName, setName] = useState({
        name : ""
    })

    const change = (e) => {
        const target = e.target
        setName(() => {
            return{
                ...categoryName,
                [target.name]: target.value
            }
        })
    }

    const add = () => {
        addCategory(categoryName).then(r => {
            console.log(r.data)
        })
    }

    return (
        <div className = "w-50 p-4 alert-primary">
            <input className = "form-control" name = "name" value = {categoryName.name} onChange = {change}/>
            <button onClick = {add}>Add</button>
        </div>
    )
}

export default AddCategory
