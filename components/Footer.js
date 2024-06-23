import Image from "next/image";

import Link from "next/link";
import { motion } from 'framer-motion';
import { staggerFooterContainer, footerTruckAnim, fadeInUp, } from '../variants';

import { CgArrowLongRight } from 'react-icons/cg';

const Footer = ({ footerData }) => {
  const { truckImg, hillImg, text, logo, links, form } = footerData
  return (
    <footer className="bg-darkblue text-white lg:bg-transparent lg:bg-footer lg:bg-no-repeat
      lg:bg-left-bottom lg:min-h-[738px] pt-12 lg:pt-0 relative"
    >
      <motion.div
        className="container mx-auto lg:min-h-[738px] flex flex-col justify-between"
        variants={staggerFooterContainer}
        initial='initial'
        viewport={{ once: false, amount: 0.1 }}
        whileInView={'animate'}
      >
        {/* truck img  */}
        <motion.div variants={footerTruckAnim} className="absolute lg:flex -top-24 -left-[6.8%]">
          <Image src={truckImg} alt="truckImg" width={430} height={210} />
        </motion.div>

        {/* hill img  */}
        <div className="absolute lg:flex z-10 top-[22px] left-0">
          <Image src={hillImg} alt="hill Img" width={137} height={92} />
        </div>

        {/* text form  */}
        <motion.div variants={fadeInUp} className="flex flex-col lg:flex-row lg:pr-[95px] pt-20 md:pt-0 lg:gap-x-[95px] gap-y-10 lg:gap-y-0 items-center">

          <div className="text-white flex-1 border-l-[10px] border-accent py-4 lg:mt-24">
            <p className="max-w-[330px] text-[20px] leading-[30px] ml-[40px]">{text}</p>
          </div>


          <form action="" className="w-full max-w-[500px] bg-white flex-1 rounded-[10px]
           lg:order-2 flex flex-col px-[35px] lg:px-[75px] py-[25px] lg:py-[52px] space-y-[40px] 
           drop-shadow-primary"
          >
            <div className="flex flex-col">
              <label className="font-light text-black mb-[10px]" htmlFor="name">{form.labelName}</label>
              <input className="input" type="text" placeholder={form.placeholderName} />
            </div>

            <div className="flex flex-col">
              <label className="font-light text-black mb-[10px]" htmlFor="email">{form.labelEmail}</label>
              <input className="input" type="email" placeholder={form.placeholderEmail} />
            </div>


            <button
              className="btn self-start hover:bg-accent-hover transition-all"
              type="submit"
            >
              {form.btnText}
              <CgArrowLongRight className="text-[28px]" />
            </button>
          </form>
        </motion.div>

        {/* Logo & Links  */}
        <motion.div variants={fadeInUp} className="py-[120px] flex flex-col lg:flex-row justify-between lg:pr-24 ">
          {/* logo  */}
          <div className="mb-6 mx-auto lg:mb-0 lg:mx-0">
            <Link href={'/'}>
              <a>
                <Image src={logo} alt="logo" width={170} height={41} />
              </a>
            </Link>
          </div>


          <ul className="flex flex-col items-center gap-y-6 lg:flex-row">
            {links.map((item, idx) => (
              <li className="text-white font-light hover:text-accent transition-all" key={idx}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
