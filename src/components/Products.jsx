import { useEffect, useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { useSearchParams } from 'react-router-dom';

import AnimatedScrollComponent from '../modules/Scroll';
import ProductsCard from '../modules/ProductsCard';
import SearchBar from '../modules/SearchBar';
import Loader from './Loader';
import TopBar from '../modules/TopBar';

import { filterProducts, searchProducts } from '../utils/helper';
import Slideshow from './Slider';


function Products() {
  const products = useProducts();

  const [display, setDisplay] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({})
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setDisplay(products);
  }, [products]);

  useEffect(() => {
    setSearchParams(query)
    setSearch(query.search || "")

    let finalProducts = searchProducts(products, query.search)
    finalProducts = filterProducts(finalProducts, query.category)

    setDisplay(finalProducts)
  }, [query]);


  return (
    <div className='min-h-screen max-w-7xl mx-auto'>
      <Slideshow />
      <div className='flex  flex-col items-center md:flex-row md:w-full text-dark p-2 justify-center my-5'>
        <div className=' m-2 flex items-center justify-center  p-2'>
          <SearchBar
            search={search}
            setSearch={setSearch}
            setQuery={setQuery} />
        </div>
        <TopBar
          setQuery={setQuery}
        />
      </div>

      <div className='flex items-center flex-wrap justify-around gap-x-3 gap-y-3 my-10'>
        {!display.length && <Loader />}
        {display && display.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
      <AnimatedScrollComponent />
    </div>
  );
}

export default Products;