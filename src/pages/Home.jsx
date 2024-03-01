import React from 'react'
import { Data } from '../Data'
import { Product } from '../components/Product'

export const Home = () => {

    const data = Data.map((item, index)=>{
        return (
            <Product item={item}/>
        )
    })
  return (
    <div>
        <section className='py-16'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                    {data}
                </div>
            </div>
        </section>
    </div>
  )
}
