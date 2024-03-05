import React from 'react'
import { Data } from '../Data'
import { Product } from '../components/Product'
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'

export const Home = () => {

    const bras = Data.filter((item, index)=>item.category === 'bra')
    const underwears = Data.filter((item)=>item.category === 'underwear')

    const braData = bras.map((bra, index)=>{
        return (
            <div className='mx-6 my-4'>
                <Product item={bra}/>
            </div>
            
        )
    })

    const underwearData = underwears.map((underwear, index)=>{
        return (
            <div className='mx-6 my-4'>
                <Product item={underwear}/>
            </div>
            
        )
    })

  return (
    <div>
        <Hero/>
        <section className='py-16'>
            <div className='container mx-auto'>
                {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                    {data}
                </div> */}
                <div className='flex flex-col my-16' id="braSection">
                    <h2 className='text-[26px] font-semibold mb-4'>Shop Bras</h2> 
                    <div className='w-full flex overflow-x-scroll justify-between lg:flex-wrap lg:overflow-x-hidden '>
                        {braData}
                    </div>
                    <Link to='/products/bra' className='mt-2 hover:text-red-500'>See more...</Link>
                </div>
                <div className='flex flex-col mb-16' id="underwearSection">
                <h2 className='text-[26px] font-semibold mb-4'>Shop Underwear</h2> 
                <div className='w-full flex overflow-x-scroll justify-between lg:flex-wrap lg:overflow-x-hidden '>
                        {underwearData}
                    </div>
                    <Link to='/products/underwear' className='mt-2 hover:text-red-500'>See more...</Link>
                </div>
            </div>
        </section>
    </div>
  )
}
