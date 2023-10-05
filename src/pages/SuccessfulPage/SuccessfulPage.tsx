import React from 'react'
import Successful from '../../assets/success.png'
import './SuccessfulPage.css'
const SuccessfulPage = () => {
  return (
    <div className='w-full'>
        <div className=' flex justify-center items-center flex-col'>
            <img src={Successful} alt="" className='w-[280px] h-[250px] flex-shrink-0' />

            <h1 className='mt-4 text-[#243a5e] font-[400] text-[40px] successful'>Registration Successful!</h1>

            <button className='mt-8 mb-6 w-[224px] h-[45px] items-center bg-[#3c6aac] rounded border border-[#3c6aac] text-[#FFF] text-[16px] font-[500] leading-normal '>Download App</button>
            
        
            <p className='pagesuccess'><a href="http:#" className=' text-[#3c6aac] text[16px] font-[500] sm:mt-20'>Back to homepage</a></p>

        </div>
    </div>
  )
}

export default SuccessfulPage