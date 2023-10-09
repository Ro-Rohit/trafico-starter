import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerTextContainer, fadeInRight, fadeInLeft } from '../variants';


const How = ({ howData }) => {
  const { title, subtitle, girlImg } = howData;
  return (
    <section className='mb-[60px] lg:mb-[160px]'>
      <motion.div
        className='mx-auto container'
        variants={staggerTextContainer}
        initial='initial'
        viewport={{ once: false, amount: 0.6 }}
        whileInView={'animate'}
      >
        <div className='flex flex-col lg:flex-row gap-x-10 items-center'>

          {/* image  */}
          <motion.div variants={fadeInRight} className='flex-1'>
            <Image src={girlImg} width={720} height={678} alt='girl image' />
          </motion.div>

          {/* text  */}
          <motion.div variants={fadeInLeft} className='flex-1 flex justify-end'>
            <div className='max-w-[455px]'>
              <h3 className='h3'>{title}</h3>
              <p className='lead'>{subtitle}</p>
            </div>
          </motion.div>

        </div>

      </motion.div>

    </section>
  )
};

export default How;
