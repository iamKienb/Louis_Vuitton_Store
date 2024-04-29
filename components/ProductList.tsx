import { getProducts } from '@/lib/actions/actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductCard from './ProductCard'
interface ProductList {
  item:string
}
const ProductList:React.FC<ProductList> = async({item}) => {
    const products = await getProducts(item)

  return (
    <div className='flex flex-wrap md:grid md:grid-cols-4 bg-zinc-50 '>
      {!products ||products.length ===0 ? <p className="text-3xl">No collection found</p>
      : products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product}/>
      ))}
        
    </div>
  )
}



export default ProductList