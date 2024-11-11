import React from 'react'
import Image from 'next/image'
import apple from "@/app/assets/Apple.png"
import slack from "@/app/assets/Slack.png"
import microsoft from "@/app/assets/microsoft 1.png"
import goolge from '@/app/assets/Google.png'

export default function Sponsor() {
  return (
    <div className='flex h-[538px] items-center justify-center bg-white'>
    <div className='flex w-[1482px] h-[294px] items-center justify-center'>
    <div className='w-[1482px] h-[171px] items-center justify-center'>
      <h2 className='flex text-7xl items-center justify-center text-black font-bold '>
        Our Sponsors
      </h2>
      <div className='flex h-[71px] w-[1482px] items-center justify-between my-32' >
        <Image src={apple} alt='' />
        <Image src={microsoft} alt='' />
        <Image src={slack} alt='' />
        <Image src={goolge} alt='' />
      </div>
    </div>
  </div>
</div>
  )
}





