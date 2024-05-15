import React from "react";
import heroImg from "../assets/images/hero-img01.png";
import heroImg2 from "../assets/images/hero-img02.png";
import heroImg3 from "../assets/images/hero-img03.png";
import icon1 from "../assets/images/icon01.png";
import icon2 from "../assets/images/icon02.png";
import icon3 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";
import About from "../component/about/about";
import ServicesList from "../component/services/ServicesList";
import featureImg from "./../assets/images/feature-img.png";
import vedioImg from "../assets/images/video-icon.png";
import avatarImg from "../assets/images/avatar-icon.png";
import DoctorList from "../component/doctors/doctorList";
import flagImg from "../assets/images/faq-img.png";
import FlagList from "../component/flag/flagList";
const Home = () => {
  return (
    <>
      {/* ====== herro section ===== */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap[90px] items-center justify-between">
            {/*==========hero content ========*/}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healtly, longer life
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                </p>
                <button className="btn">Request an Appoinment</button>
              </div>
              {/*======= hero counter ========= */}

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    20 +
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">years of Experience</p>
                </div>
              </div>
            </div>
            {/* ====== herro section ===== */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg} alt="heroImg-doctor1" />
              </div>
              <div className="mt-[30px]">
                <img
                  className="w-full mb-3"
                  src={heroImg2}
                  alt="heroImg-doctor2"
                />
                <img className="w-full" src={heroImg3} alt="heroImg-doctor2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== herro section  end ===== */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              word-class care for everyone. our health system offers
              umatched,expert health from the lab to the client
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon2} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] text-center">
                  word-class care for everyone. our health system offers
                  umatched
                </p>
                <Link
                  to="/doctors"
                  className="w-[45px] h-[44px] rounded-full border border-solid 
                  border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group
                   hover:bg-primaryColor hover:border-none"
                >
                  <FiArrowRightCircle className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon3} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] text-center">
                  word-class care for everyone. our health system offers
                  umatched
                </p>
                <Link
                  to="/doctors"
                  className="w-[45px] h-[44px] rounded-full border border-solid 
                  border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group
                   hover:bg-primaryColor hover:border-none"
                >
                  <FiArrowRightCircle className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon1} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] text-center">
                  word-class care for everyone. our health system offers
                  umatched
                </p>
                <Link
                  to="/doctors"
                  className="w-[45px] h-[44px] rounded-full border border-solid 
                  border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group
                   hover:bg-primaryColor hover:border-none"
                >
                  <FiArrowRightCircle className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== about setion start ===== */}

      <About />
      {/* ====== about setion end ===== */}

      {/* ====== servise setion start ===== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto mt-[40px]">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text-para text-center">
              word-class care for everyone.Our health system offers
              unmatched,expert health care
            </p>
          </div>
          <ServicesList />
        </div>
      </section>
      {/* ====== servise setion end ===== */}
      {/* ====== feature setion  ===== */}
      <section className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* =========== feature content ============ */}
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Get virtual treatment <br /> anyTime
            </h2>
            <ul className="pl-4">
              <li className="text__para">
                1. schedule the appointment directly
              </li>
              <li className="text__para">
                2. Search for your physician here, and content their office
              </li>
              <li className="text__para">
                3. view our physiciams who are accepting new patients, use the
                online scheduling tool to select an appointment time
              </li>
            </ul>{" "}
            <Link to="/">
              <button className="btn">learn More</button>
            </Link>
          </div>
          {/* ===========feature img =========== */}
          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} alt="featureImg" />
            <div
              className="w-[150px] lg:w-[240px] bg-white absolute bottom-[50px] left-0
             mb:bottom-[100px] md:left-[108px] z-20 p-2 pb-3 lg:pt-4 lg:pt-4 lg:pb-[26px] rounded-[10px]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:text-headingColor font-[600]">
                    tUe, 24
                  </p>
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:text-headingColor font-[400]">
                    10:00 AM
                  </p>
                </div>
                <span className="w-[30px] h-5 lg:w-[34] lg:h-[34px] flex items-center justify-center bg-yellowColor  rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                  <img src={vedioImg} alt="vedioImg" />
                </span>
              </div>
              <div
                className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px]
               lg:leading-4 text-irisBlueColor font=[500] mt-2 lg:mt-4 rounded-full"
              >
                Counsultation
              </div>
              <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                <img src={avatarImg} alt="vedioImg" />
                <h4 className="text-[10px] leading-3 lg:text-[10px] lg:leading-[22px] font-[700] text-headingColor">
                  Wayne Collins
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== feature setion end ===== */}
      {/* ====== our great setion  ===== */}
      <session className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our great services</h2>
          <p className="text__para text-center">
            word-class care for everyOne.our health system offers unmatched,
            expert health care
          </p>
        </div>
        <DoctorList />
      </session>
      {/* ====== feature setion end ===== */}
      {/* ====== faq session   ===== */}
      <session>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={flagImg} alt="flagImg" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>
              <FlagList />
            </div>
          </div>
        </div>
      </session>
      {/* ==============testimonia============ */}
      <section>
        <div className="container mt-[40px]">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> what our patient say</h2>
            <p className="text__para text-center">
              word-class care for veryone. our health system offers unmatched
              expert health care
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
