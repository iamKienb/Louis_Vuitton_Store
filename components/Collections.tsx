
import { getCollections, getProducts } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Collections = async () => {

  const collections = await getCollections()
  
  return (
    <div className="flex items-center justify-center gap-6">
      
      {!collections ||collections.length ===0 ? <p className="text-3xl">No collection found</p>
      : collections.map((collection: CollectionType) => (
        <Link href={`/collections/${collection.path}`} key={collection._id}>
          <Image
            key={collection._id}
            src={collection.image}
            alt={collection.title}
            width={500}
            height={600}
            className=" cursor-pointer object-cover h-[600px] w-[581px] mt-10 "
          />
          <div className="pt-5 pb-14  flex flex-col gap-3">
            <p className="">{collection.title}</p>
            <p>{collection.description}</p>
          </div>
        </Link>

      ))}
    </div>
  );
};

export default Collections;
