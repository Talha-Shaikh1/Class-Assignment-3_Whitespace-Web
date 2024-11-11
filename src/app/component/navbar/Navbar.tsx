import Link from 'next/link'
import logo from '@/app/assets/Logo.png'
import Image from 'next/image'


export default function Navbar(){
    return(
        <nav className="fixed top-0 left-0 w-full h-[92px] bg-[#043873] flex items-center justify-around">

        <div>
          <Image src={logo} alt='' />
        </div>


        <ul className="hidden md:flex space-x-8 text-[18px] text-white font-medium ">
          <li><Link href="#">Products</Link></li>
          <li><Link href="#">Solutions</Link></li>
          <li><Link href="#">Resources</Link></li>
          <li><Link href="#">Pricing</Link></li>
          
        </ul>

        <div className='bg-[#FFE492] text-[18px] h-[60px] w-[126px] font-medium flex text-center justify-center items-center rounded-xl cursor-pointer'>
          <button>Login</button>
        </div>
      </nav>

    )
}