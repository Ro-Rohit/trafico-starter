import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerAccordionContainer, fadeInLeft, fadeInRight, staggerTextContainer } from '../variants';

import Accordion from '../components/Accordion';

const Faq = ({ faqData }) => {
  const { pretitle, title, boyImg, accordions } = faqData
  return (
    <section className='min-h-[1150px] lg:bg-faq lg:bg-no-repeat lg:bg-right-top lg:pt-40 lg:pb-24 lg:mb-[160px] mb-[60px]'>
      <div className='container mx-auto'>
        {/* top  */}
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.4 }}
          className='relative flex flex-col lg:flex-row justify-center 
          lg:justify-start items-center pt-8 lg:pt-16 pb-16 lg:pb-32'
        >

          {/* text  */}
          <motion.div variants={fadeInRight} className='lg:max-w-[45%]'>
            <h3 className='h3'>{pretitle}</h3>
            <h2 className='h2 mb-6 lg:mb-12'>{title}</h2>
          </motion.div>

          {/* image  */}
          <motion.div variants={fadeInLeft} className='lg:absolute lg:-right-16 lg:-top-16'>
            <Image src={boyImg} alt='boy Img' height={700} width={498} />
          </motion.div>

        </motion.div>

        {/* accordions  */}
        <motion.div
          variants={staggerAccordionContainer}
          initial='initial'
          whileHover={'animate'}
          viewport={{ once: false, amount: 0.4 }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-[20px]'
        >
          {accordions.map((accordion, idx) => (
            <Accordion accordion={accordion} key={idx} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Faq;
