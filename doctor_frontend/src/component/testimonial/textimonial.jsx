import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/avatar-icon.png";
import { HiStar } from "react-icons/hi";

const Textimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetwean={30}
        slidesPerview={1}
        pagination={{ clickable: true }}
        breackpoints={{
          640: {
            slidesPerview: 1,
            spaceBetwean: 0,
          },
          760: {
            slidesPerview: 2,
            spaceBetwean: 20,
          },
          1024: {
            slidesPerview: 3,
            spaceBetwean: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="patientAvatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhihur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />{" "}
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4">
              word-class care for veryone. our health system offers unmatched
              expert health care
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="patientAvatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhihur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />{" "}
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4">
              word-class care for veryone. our health system offers unmatched
              expert health care
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="patientAvatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhihur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />{" "}
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4">
              word-class care for veryone. our health system offers unmatched
              expert health care
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Textimonial;
