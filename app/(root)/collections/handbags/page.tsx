import ProductList from '@/components/ProductList'
import Image from 'next/image'
import React from 'react'

const HandBags = () => {
  return (
    <div className="w-full  top-0 relative ">
    <Image
      src="/mar.jpeg"
      alt="mar.jpeg"
      width={1000}
      height={300}
      layout="responsive"
      className="w-screen  object-cover "
    />
    <ProductList item='bags'/>
    <Image
      src="/canoe.png"
      alt="canoe"
      width={1000}
      height={300}
      layout="responsive"
      className="w-screen  object-cover "
    />
    </div>
  )
}

export default HandBags