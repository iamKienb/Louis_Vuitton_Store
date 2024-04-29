import Gallery from '@/components/Gallery'
import ProductInfo from '@/components/ProductInfo'
import { getProduct } from '@/lib/actions/actions'
import React from 'react'

const ProductDetails = async({params}: {params:{id:string}}) => {
    const product = await getProduct(params.id)
  return (
    <div className='flex justify-between items-start   max-md:flex-col max-md:items-center'>
        <Gallery productMedia = {product.media} />
        <ProductInfo productInfo ={product}/>
    </div>
  )
}

export default ProductDetails