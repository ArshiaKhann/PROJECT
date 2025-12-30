import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Campus-Only Marketplace</p>
        <p className=' text-gray-400'>Connect and trade with students from your own college or nearby campuses.</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Simple & Secure</p>
        <p className=' text-gray-400'>Easy listings, direct communication, and a safe student-verified environment.</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Community Support</p>
        <p className=' text-gray-400'>We help students with listings, issues, and safe transactions.</p>
      </div>

    </div>
  )
}

export default OurPolicy
