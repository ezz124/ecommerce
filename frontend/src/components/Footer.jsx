import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe dolorum, odit assumenda vitae libero voluptas. Placeat facere reiciendis natus quibusdam quasi labore eos aperiam ad sapiente? Aliquam sit laudantium aliquid. 
            </p>
        </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gar-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gar-600'>
                        <li>01100157439</li>
                        <li>abdalmoez@gmail.com</li>
                    </ul>
                </div>
      </div>

          <div>
               <hr />
               <p className='py-5 text-sm text-center'>Designed and developed by Ezz abdalrady @2024</p>
          </div>

    </div>
  )
}

export default Footer
