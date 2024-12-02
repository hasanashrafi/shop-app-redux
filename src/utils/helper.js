const searchProducts = (products, search) => {
    if (!search) return products;
    return products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
}

const filterProducts = (products, category) => {
    if (!category || category === "all") return products;
    return products.filter((product) => product.category === category)
}

const sumProducts = (products) => {
    const itemsCounter = products.
        reduce((counter, product) => counter + product.quantity, 0)
    const total = products.
        reduce((total, product) => total + product.price * product.quantity, 0)
        .toFixed(2)
   
    return { itemsCounter, total }
}

export { searchProducts, filterProducts, sumProducts }