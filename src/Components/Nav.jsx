import CryptoNav from '/src/assets/CryptoNav.png'
import CryptoHome from '/src/assets/CryptoHome.png'

import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

function Nav() {
    return(
        <>
        <nav className='flex justify-between'>
            <img src={CryptoNav} alt='CryptoHome image' className='h-12 m-6  max-[768px]:hidden'/>
            <img src={CryptoHome} alt='Crypto image' className='hidden h-10 m-6 max-[768px]:block'/>
            <div className='flex mr-12 items-center'>
                <button className='flex items-center gap-1 mr-7 bg-violet-100 text-violet-400 rounded-xl h-fit p-2 max-[768px]:text-sm'><RiMoneyDollarCircleLine className='max-[768px]:size-5' size={24}/> USD</button>
                <button className='flex items-center gap-1 bg-violet-100 text-violet-400 rounded-xl h-fit p-2 max-[768px]:text-sm'>
                    <TbWorld className='max-[768px]:size-5' size={24}/>English
                </button>
            </div>
        </nav>
        </>
    )
}

export default Nav