import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

//Need to add more socials and contact info and style the footer.
export const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
        <div className='flex justify-center'>
            <p className='text-white text-center'>
                <FaInstagram/>
            </p>
            <p className='text-white text-center'>
                <FaFacebookF/>
            </p>
        </div>
    </footer>
  )
}
