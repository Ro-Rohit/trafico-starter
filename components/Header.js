
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import Nav from './Nav'
import NavMobile from './NavMobile'

import { HiMenu } from 'react-icons/hi'

const Header = ({ headerData, navData }) => {
  const [onScroll, setOnScroll] = useState(false)
  const [navMobile, setNavMobile] = useState(true)

  const { logoImgV1, logoImgV2, btnText } = headerData;
  const handleScroll = () => {
    window.scrollY > 50 ? setOnScroll(true) : setOnScroll(false);

  }

  useEffect(() => {
    const scrollListener = window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener(scrollListener, handleScroll);
  }, [])


  return (
    <header className={`${onScroll ? 'bg-white p-3 rounded-md drop-shadow-primary' : 'py-[40px]'} fixed w-full left-0 right-0 mx-auto max-w-[90vw] lg:max-w-[1120px] 
       flex justify-between items-center transition-all duration-500`}
    >
      <Link href={'/'}>
        <a><Image src={`${onScroll ? logoImgV2 : logoImgV1}`} alt="logo" width={onScroll ? 100 : 212} height={50} /></a>
      </Link>

      {/* nav &button wrapper initially hidden --on small screen  */}
      <div className="hidden lg:flex gap-x-[96px]">
        <Nav navData={navData} onScroll={onScroll} />
        <button className="btn">{btnText}</button>
      </div>

      {/* nav &button wrapper initially hidden --on small screen  */}
      <div onClick={() => setNavMobile(!navMobile)} className="lg:hidden cursor-pointer ">
        <HiMenu className='text-4xl text-accent-hover' />
      </div>

      <div className={`${navMobile ? 'max-h-[154px]' : 'max-h-0'}
        lg:hidden absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl transition-all`}
      >
        <NavMobile navData={navData} />

      </div>




    </header>
  );
};

export default Header;
