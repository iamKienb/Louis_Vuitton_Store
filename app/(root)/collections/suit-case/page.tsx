import ProductList from '@/components/ProductList'
import Image from 'next/image'
import React from 'react'

const SuitCase = () => {
  return (
    <div className="w-full  top-0 relative ">
    <Image
      src="/M_BC_Spring_Mar.png"
      alt="banner"
      width={1000}
      height={300}
      layout="responsive"
      className="w-screen  object-cover "
    />
      <ProductList item='suit-case'/>
    <Image
      src="/Spring_Mar24.jpg"
      alt="banner"
      width={1000}
      height={300}
      layout="responsive"
      className="w-screen  object-cover "
    />
    </div>
  )
}

export default SuitCase