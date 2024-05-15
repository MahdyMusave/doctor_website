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
    </>
  );
};

export default Home;
