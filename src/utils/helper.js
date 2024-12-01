const searchProducts = (products, search) => {
    if (!search) return products;
    const searchProducts = products.filter((product) => product.title.toLowerCase().includes(search))
    return searchProducts
}

const filterProducts = (products, category) => {
    if (!category || category === "all") return products;
    const filteredProducts = products.filter((product) => product.category === category)
    return filteredProducts
}
export { searchProducts, filterProducts }