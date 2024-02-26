import React from 'react'
import styles from '../style'
import { discount, robot} from '../assets'

const Hero = () => (
    <section id = "home" className={` flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-discount-gradient">
                <p className={`${styles.paragraph} ml-2 `}>
                <span className=' text-white'>Six year </span>
                coderclass student</p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className='flex-1 font-poppins ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>Dorus van den Akker</h1>
            </div>
        </div>
    </section>
)


export default Hero