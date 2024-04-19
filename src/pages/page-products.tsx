import axios from 'axios'

//const options = {
//  method: 'POST',
//  url: 'https://interview.t-alpha.com.br/api/products/create-product',
//  headers: {
//    'Content-Type': 'application/json',
//    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzEzNDgxMTU3fQ.qMDfsqFymTuw7WTAMhmmOoxpXsYrBiHdTeMYmmwYuIg'
//  },
//  
//  data: {
//    name: 'TV 55" 4K Full HD',
//    description: 'Televisão com cores vibrantes',
//    price: 3000,
//    stock: 10
//  }
//};

import { NewProduct } from '../components/products/new-product'
import { Product } from '../components/products/product';
import { useEffect, useState } from 'react';


interface ProductsNode{
  id:string,
  
}

export function PageProducts() {

//try {
//  
//  async function a(){
//      const {data} = await axios.request(options);
//      console.log(data)
//  }
//  a()
//} catch (error) {
//  console.error(error);
//}

  const token = localStorage.getItem('token') 

  if(!token){
    window.location.href = "/login"
  }
  const [] = useState()
  useEffect(()=> {} , [])
  return (
    <>
    <div className="text-slate-50  antialiased px-5 md:px-3 ">
      <div className="mx-auto max-w-6xl my-12 space-y-6">

        <form className="w-full ">
          <input
            className="w-full bg-transparent text-3xl tracking-tighter outline-none placeholder:text-slate-500"
            type="text"
            placeholder="Buscar produto..."
          />
        </form>

        <div className="h-px bg-slate-700" />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 auto-rows-[250px]">

            <NewProduct/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
      </div>
    </div>
    </>
  );
}
