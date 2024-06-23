
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

const Slider = ({ clients }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      slidesOffsetBefore={60}
      grabCursor={true}
      className="testimonialSlider"


    >
      {
        clients.map((client, idx) => {
          const { name, image, message } = client;

          return (
            <SwiperSlide key={idx}>
              <div className="bg-white h-[360px] drop-shadow-primary rounded-[10px]
               px-[50px] pt-[60px] pb-[40px] flex flex-col justify-between">
                <p className="font-light leading-[30px] ">{message}</p>
                <div className="flex items-center space-x-5">
                  <Image src={image} alt="icon" height={60} width={60} />
                  <span className="font-semibold">{name}</span>
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default Slider;
