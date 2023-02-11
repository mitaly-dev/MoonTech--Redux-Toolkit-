import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useDispatch ,useSelector} from "react-redux";
import { brandHandle, stockToggle } from "../../service/features/filterSlice";
import { useGetProductsQuery } from "../../service/api/productsApi";

const Home = () => {
  // const [products,setProducts] = useState([])
  const dispatch = useDispatch()
  const filters = useSelector((state)=>state.filter)
  const {stock,brands} = filters
  console.log(brands)
  const {data:products,isLoading,isSuccess,isError} = useGetProductsQuery()
 
  if(isLoading){
    return <p>loading....</p>
  }
  
  if(isError){
    return console.log(isError)
  }

  // useEffect(()=>{
  //   fetch('http://localhost:5000/products')
  //   .then(res=>res.json())
  //   .then(data=>setProducts(data))
  // },[])


  let content 

  if(products.length){
   content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ))
  }

  if(products.length && (stock || brands.length)){
    content = products.filter(product=>{
      if(stock){
      return product.status===true
      }else{
        return product
      }
    }).filter(product=>{
      if(brands.length){
        return brands.includes(product.brand)
      }else{
        return product
      }
    }).map((product) => (
      <ProductCard key={product.model} product={product} />
    ))
  }


  const activeClass = "text-white bg-indigo-500 border-white";

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          onClick={()=>dispatch(stockToggle())}
          className={`${stock && activeClass} border px-3 py-2 rounded-full font-semibold `}
        >
          In Stock
        </button>
        <button
        onClick={()=>dispatch(brandHandle('amd'))}
         className={`${brands.includes('amd') && activeClass} border px-3 py-2 rounded-full font-semibold `}>
          AMD
        </button>
        <button
         onClick={()=>dispatch(brandHandle('intel'))}
         className={`${brands.includes('intel') && activeClass} border px-3 py-2 rounded-full font-semibold `}>
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {
         content
        }
      </div>
    </div>
  );
};

export default Home;
