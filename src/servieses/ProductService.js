import http from "../http"

export const showProducts = () => {
    return http.get("/products")
}

export const showItem = (id) => {
    return http.get(`/products/product/${id}`)
}

export const del = (id) => {
    return http.get(`/products/delete/${id}`)
}

export const showAddProd = () => {
    return http.get("/products/add")
}

export const addProduct = (data) => {
    return http.post("/products/add", data)
}

export const addCategory = (data) => {
    return http.post("/categories/add", data)
}

export const showCategory = () => {
    return http.get("/categories")
}