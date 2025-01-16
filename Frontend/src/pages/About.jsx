import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetter from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, possimus dolore! Sunt officiis quas earum sed voluptatum nisi debitis, consectetur neque quam vero nihil dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nisi!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere unde doloribus cumque, sequi accusamus eaque vero, inventore iusto, quisquam reiciendis velit iste quas porro error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nisi!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vitae suscipit possimus accusamus neque aspernatur qui unde labore, illo nisi.</p>
        </div>
      </div>

      <div className=' text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row twxt-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti magnam recusandae temporibus tempora odio vel veniam a corrupti assumenda!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'> 
        <b>Convenience:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti magnam recusandae temporibus tempora odio vel</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'> 
        <b>Exceptional Customer Serivce:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti magnam recusandae temporibus tempora odio vel</p>
        </div>
      </div>

      <NewsLetter />

    </div>
  )
}

export default About