import { BiCategory } from 'react-icons/bi';
import { useProducts } from '../context/ProductContext';
import MiddleItems from '../modules/MiddleItems';
import ProductsCard from '../modules/ProductsCard';
import AnimatedScrollComponent from '../modules/Scroll';
import Loader from './Loader';
import { GiBigDiamondRing, GiClothes, GiLoincloth } from 'react-icons/gi';
import { MdLaptopChromebook } from 'react-icons/md';
import { useEffect, useState } from 'react';
import SearchBar from '../modules/SearchBar';
import { CiSearch } from 'react-icons/ci';
import { LuSearchCheck } from 'react-icons/lu';
import { filterProducts, searchProducts } from '../utils/helper';
import { useSearchParams } from 'react-router-dom';

function Products() {
  const [display, setDisplay] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const products = useProducts();

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({})
  const [searchBox, setSearchBox] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setDisplay(products);
  }, [products]);

  useEffect(() => {
    setSearchParams(query)
    let finalProducts = searchProducts(products, query.search)
    finalProducts = filterProducts(finalProducts, query.category)

    setDisplay(finalProducts)
  }, [query]);


  const categories = [
    { id: 1, name: 'All', icon: <BiCategory /> },
    { id: 2, name: "Men's Clothing", icon: <GiLoincloth /> },
    { id: 3, name: "Women's Clothing", icon: <GiClothes /> },
    { id: 4, name: 'Electronics', icon: <MdLaptopChromebook /> },
    { id: 5, name: 'jewelery', icon: <GiBigDiamondRing /> },
  ];

  const searchHandler = () => {
    setQuery((query) => ({ ...query, search }))
  }



  const categoryHandler = (category) => {
    setSelectedCategory(category.id);
    setQuery(query => ({ ...query, category: category.name.toLowerCase() }));
  };

  console.log(search)

  return (
    <div className='min-h-screen max-w-7xl mx-auto'>
      {/* <div className='invisible'>
        <SearchBar search={search} setSearch={setSearch} searchHandler={searchHandler} />
      </div> */}

      <div className='flex items-center ml-2 justify-center my-4'>
          {
            searchBox ? (
              <LuSearchCheck className='size-6 sm:size-8 cursor-pointer text-dark mr-1'
                onClick={searchHandler} />
            ) : (
              <CiSearch className='size-6 sm:size-8 cursor-pointer text-dark mr-1'
                onClick={() => setSearchBox(!searchBox)} />
            )
          }

          <input
            onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
            value={search}
            type='text'
            placeholder='Search'
            className={` border duration-300 transition-transform ease-in-out  rounded-xl h-[32px] px-2 py-0.5  text-dark outline-none border-[#620f99] transform ${searchBox ? 'scale-100' : 'scale-0'}`}
          />

        </div>

      <div className='w-full text-dark p-2  flex justify-center my-5'>
        <ul className='grid grid-cols-2 gap-3 md:flex md:items-center md:justify-around md:gap-x-3'>
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => categoryHandler(category)}
              className={` justify-center cursor-pointer flex items-center gap-x-1 rounded-xl p-2 ${selectedCategory === category.id ? 'bg-[#6C2BD9] text-background' : 'bg-[#f8f6fa] text-dark'}`}
            >
              {category.icon}
              {category.name}
            </li>
          ))}
        </ul>
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