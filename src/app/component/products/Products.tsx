import Image from "next/image"
import pic from '@/app/assets/img.png'

export default function Products(){
    return(
        <div className='h-[1588px] text-white items-center justify-center py-[140px]'>
        <div className='flex items-center justify-center'>
          <div className='w-[672px] h-[411px] items-center justify-center'>
            <h2 className='w-[672px] h-[174px] text-[72px] items-center justify-center text-black font-bold leading[87.14px] tracking-[-0.02em]'>
              Project Management
            </h2>
            <p className='text-black my-12 h-[90px] w-[672px] text-lg leading[30px] tracking-[-0.02em]'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>

            <div className='w-[201px] h-[63px] py-5 px-10 bg-[#4F9CF9] rounded-md text-center cursor-pointer mt-12'>
              <button>Get Started</button>
            </div>

          </div>
          <div className='w-[748px] h-[547px] bg-[#C4DEFD]'></div>

        </div>

        <div className='flex items-center justify-center mt-32'>

          <Image src={pic} alt="pic" width={748} height={545} />
          <div className='w-[670px] h-[294px] items-center justify-center px-10'>
            <h2 className='w-[672px] h-[87px] text-[72px] items-center justify-center text-black font-bold leading[87.14px] tracking-[-0.02em] my-5'>
              Work together
            </h2>
            <p className='text-black h-[90px] w-[670px] text-lg leading[30px] tracking-[-0.02em]'>With whitepace, share your notes with your colleagues and collaborate on them.
              You can also publish a note to the internet and share the URL with others.
            </p>

            <div className='w-[201px] h-[63px] py-5 px-10 bg-[#4F9CF9] rounded-md text-center cursor-pointer '>
              <button>Get Started</button>
            </div>

          </div>


        </div>

      </div>
    )
}