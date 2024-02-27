import {useState} from 'react'

import { close, menu} from '../assets'
import { navLinks } from '../constants'
import { Popoutmenu } from './Popoutmenu';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src="src/assets/dlogoremovebg.png" alt="portfolio logo" className='h-[32px] animate-[spin_2s_linear_infinite]'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}  text-white`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <Popoutmenu></Popoutmenu>
      </div>
    </nav>
  )
}
export default Navbar