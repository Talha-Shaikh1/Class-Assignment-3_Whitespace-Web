import React from 'react'

export default function Resource() {
  return (
    <div className='flex items-center justify-center h-[812px] '>

          <div className='w-[714px] h-[532px] bg-[#C4DEFD]'></div>
          <div className='w-[670px] h-[411px] items-center justify-center px-10'>
            <div>
              <h2 className='text-[72px] items-center justify-center text-black font-bold my-5'>
                Customise it
                to your needs
              </h2>
            </div>
            
            <p className='text-black h-[90px] w-[670px] text-lg leading[30px] tracking-[-0.02em]'>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
            </p>

            <div className='w-[201px] h-[63px] py-5 px-10 bg-[#4F9CF9] rounded-md text-center cursor-pointer '>
              <button>Let's Go</button>
            </div>

          </div>


        </div>
  )
}


