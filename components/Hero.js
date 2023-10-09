import Header from './Header';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, boyAnim, girlAnim, heroTruckAnim, fadeInDown } from '../variants';

import { CgArrowLongRight } from 'react-icons/cg';

const Hero = ({ heroData, headerData, navData }) => {

  const { title, boyImg, girlImg, truckImg, btnText } = heroData;
  return (
    <section className='bg-hero bg-no-repeat bg-left-top min-h-[800px] lg:min-h-[950px] lg:mb-80'>
      <motion.div
        variants={staggerContainer}
        initial='initial'
        animate='animate'
        className="container mx-auto relative min-h-[800px] lg:min-h-[950px]"
      >
        {/* header  */}
        <motion.div className='fixed z-20 top-0' variants={fadeInDown}>
          <Header headerData={headerData} navData={navData} />
        </motion.div>

        {/* title  */}
        <motion.h1 variants={fadeInDown} className='h1 max-w-[740px] text-white pt-[12rem] mb-[60px]'>{title}</motion.h1>

        {/* Button  */}
        <motion.button variants={fadeInDown} whileHover={{ scale: 1.05 }} className='btn '>
          {btnText}
          <CgArrowLongRight className='text-[30px]' />
        </motion.button>

        {/* girlImg  */}
        <motion.div variants={girlAnim} className='hidden lg:flex absolute bottom-0 '>
          <Image src={girlImg} alt='girl image' height={495} width={206} />
        </motion.div>

        {/* truck img  */}
        <motion.div variants={heroTruckAnim} className='hidden lg:flex absolute -bottom-[25%] -left-[30%]'>
          <Image src={truckImg} alt='truck image' height={395} width={811} />
        </motion.div>


        {/* boy img  */}
        <motion.div variants={boyAnim} className='hidden lg:flex absolute right-[380px] bottom-0 '>
          <Image src={boyImg} alt='boy image' height={495} width={206} />
        </motion.div>


      </motion.div>

    </section>
  )
};

export default Hero;
