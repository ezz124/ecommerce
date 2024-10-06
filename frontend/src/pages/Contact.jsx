import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-5'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Tel:01070504808 <br /> Email:abdalmoezabdelrady@gmail.com</p>
          
          <div className='flex gap-2'>
            <a href="https://www.facebook.com/profile.php?id=100095128067458&locale=ar_AR" target="_blank" rel="noopener noreferrer">
              <img className='w-9' src={facebook} alt="" />
            </a>
            <a href="https://www.instagram.com/creative_store08/" target="_blank" rel="noopener noreferrer">
              <img className='w-9' src={instagram} alt="" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=201070504808&text&type=phone_number&app_absent=0"target="_blank" rel="noopener noreferrer">
              <img className='w-9' src={whatsapp} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
