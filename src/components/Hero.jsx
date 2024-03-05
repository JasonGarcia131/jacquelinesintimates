import React from 'react'
import { Link } from 'react-router-dom'
import hero from "../assets/hero.jpg"

export const Hero = () => {
  return (
    <section className='bg-pink-200 h-[800px] bg-no-repeat bg-cover bg-center py-24 bg-hero'>
        <div className='container mx-auto flex justify-around h-full'>
            <div className='flex flex-col justify-center'>
                {/* <div className='font-semibold flex items-center uppercase'>
                    <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
                    New Trend
                </div> */}
                <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
                    SPRING SEASONAL SALES <br/>
                    <span className='font-semibold'>WOMENS</span>
                    </h1>
                    <a href="#braSection" className='self-start uppercase font-semibold border-b-2 border-primary'>
                        Shop Now
                    </a>
            </div>
            <div className='hidden w-[450px] lg:block'>
                <img src={hero} className='h-full rounded-lg' alt="lingerie"/>
            </div>
        </div>
    </section>
  )
}
