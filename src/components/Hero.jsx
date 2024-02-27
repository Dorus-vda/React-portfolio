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
            <div className="flex flex-row justify-between items-center w-full lg:w-3/4">
                <h1 className='flex-1 font-poppins ss:text-[72px] text-[52px] text-white ss:leading-[100px] mt-10 leading-[75px]'>Dorus van den Akker</h1>
            </div>
            <div className=' mt-10 md:mt-20 w-full lg:w-3/4 xl:w-1/2 text-gray-400'>
                <p>Lorem ipsum dolor sit amet. Et nisi quidem aut consequatur repellendus sed placeat dolor ea corporis quis! Hic quis repellat ut ipsum quasi ea facere necessitatibus id similique illum est maiores dolorem. In repellendus possimus non incidunt dolorem aut esse modi. Ut quasi nihil vel voluptatibus voluptatum quo quam nostrum sed architecto numquam aut obcaecati consequuntur in facere doloribus qui voluptas harum.Eos unde omnis ut laboriosam quos sed reiciendis neque et enim quod 33 veritatis asperiores. Qui modi sint est illo nesciunt sit accusamus culpa.Eum quidem perferendis non reiciendis ipsam a odio quibusdam? Ea incidunt animi vel molestiae reiciendis non similique ipsa qui quos consequatur ad ullam reiciendis nam dicta quas!</p>
            </div>
        </div>
    </section>
)


export default Hero