const searchProducts = (products, search) => {
    if (!search) return products;
    return products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
}

const filterProducts = (products, category) => {
    if (!category || category === "all") return products;
    return products.filter((product) => product.category === category)
}

<<<<<<< HEAD
const sumProducts = (products) => {
    const itemsCounter = products.
        reduce((counter, product) => counter + product.quantity, 0)
    const total = products.
        reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)

    return { itemsCounter, total }
}

=======
>>>>>>> cddf8b4fc17b64e7e073c5864ec72dc76dfeed1d
const productQuantity = (state, id) => {
    const index = state.selectedItems.findIndex((item) => item.id === id)
    if (index === -1) {
        return 0
    } else {
        return state.selectedItems[index].quantity
    }
}

const sumPrice = (product) => {
    return product.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);

}

const sumQuantity = (product) => {
    return product.reduce((counter, product) => counter + product.quantity, 0);
}

export {
    searchProducts,
    filterProducts,
    sumPrice,
    sumQuantity,
    productQuantity
}