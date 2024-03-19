import React from 'react'
import styles from '../style'
import { discount, robot} from '../assets'

const Hero = () => (
    <section id = "home" className={` flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:items-center`}>
            <div className="flex flex-row  py-[6px] px-4 rounded-[10px] mb-2 bg-discount-gradient">
                <p className={`${styles.paragraph} ml-2 `}>
                <span className=' text-white'>Sixth year </span>
                coderclass student</p>
            </div>
            <div className=" lg:w-3/4">
                <h1 className='xl:text-center font-poppins ss:text-[72px] text-[52px] text-white ss:leading-[100px] mt-10 leading-[75px]'>Dorus van den Akker</h1>
            </div>
            <div className='xl:text-center mt-10 md:mt-20 w-full lg:w-3/4 xl:w-1/2 text-gray-400'>
                <p>After six years in the coderclass, I have gotten extensive experience in a wide variety of different programming languages and other computer science related subjects. From 3d modeling to VR gamedevelopment to computer security.</p>
            </div>
        </div>
    </section>
)


export default Hero