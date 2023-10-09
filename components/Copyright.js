import Link from "next/link";
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { fadeInUp, } from '../variants';

const Copyright = () => {
  return (
    <motion.div
      className="h-[140px]  mb-20"
      variants={fadeInUp}
      initial='initial'
      viewport={{ once: false, amount: 0.1 }}
      whileInView={'animate'}
    >
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full lg:pr-24">
          <p>Copyright &copy; 2022</p>

          <div className="flex gap-x-[30px]">
            <Link href="#">
              <a>
                <div className="w-9 h-9 bg-accent hover:bg-accent-hover
                 text-white rounded-full flex justify-center items-center transition"
                >
                  <FaYoutube className="text-lg" />
                </div>
              </a>
            </Link>
            <Link href="#">
              <a>
                <div className="w-9 h-9 bg-accent hover:bg-accent-hover
                 text-white rounded-full flex justify-center items-center transition"
                >
                  <FaInstagram className="text-lg" />
                </div>
              </a>
            </Link>
            <Link href="#">
              <a>
                <div className="w-9 h-9 bg-accent hover:bg-accent-hover
                 text-white rounded-full flex justify-center items-center transition"
                >
                  <FaGithub className="text-lg" />
                </div>
              </a>
            </Link>
          </div>
        </div>

      </div>

    </motion.div>
  );
};

export default Copyright;
