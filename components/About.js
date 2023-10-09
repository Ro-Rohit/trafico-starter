import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerTextContainer, fadeInUp, fadeInDown } from '../variants';

const About = ({ aboutData }) => {
  const { title, subtitle, text, boyImg } = aboutData
  return (
    <section className='mb-[60px] lg:mb-[160px]'>
      <div className='mx-auto container'>
        <motion.div
          className='flex  flex-col lg:flex-row gap-x-[20px]'
          variants={staggerTextContainer}
          initial='initial'
          viewport={{ once: false, amount: 0.6 }}
          whileInView={'animate'}
        >
          {/* text  */}
          <motion.div variants={fadeInDown} className='flex-1 mt-[74px]'
          >
            <h3 className='h3'>{title}</h3>
            <p className='lead max-w-[470px] mb-[70px]'>{subtitle}</p>

            {/* text */}
            <div className='bg-accent/10  border-l-[10px] border-accent max-w-[570px] h-[160px] flex justify-center items-center mb-8 lg:mb-0'
            >
              <p className='text-[20px] lg:text-[24px] lg:leading-[32px] font-medium max-w-[320px] lg:max-w-[460px] leading-normal'>{text}</p>
            </div>
          </motion.div>

          {/* image  */}
          <motion.div variants={fadeInUp} className='flex-1'>
            <Image src={boyImg} width={575} alt='BoyImg' height={400} />
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
};

export default About;
