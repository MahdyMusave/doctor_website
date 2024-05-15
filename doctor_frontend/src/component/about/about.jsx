import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCarding from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="container">
      <div className="flex justify-between gap-[50px] lg-gap-[130px] xl:gap-0 flex-col lg:flex-row">
        {/**===============about img ============**/}
        <div className="relative w-3/4 lg:w-1/2 xl:w-[720px] z-10 order-2 lg:order-1">
          <img src={aboutImg} alt="aboutImg" />
          <div
            className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%]
          md:right-[-7%] lg:right-[14%]
          "
          >
            <img src={aboutCarding} alt="aboutImg" />
          </div>
        </div>
        {/**===============about content============**/}
        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ">
          <h2 className="heading">Proud to be one of the nations best</h2>
          <p className="text__para">
            For 30 years in a row, U.S News & Word Report has recognized us one
            of the best publist hospitals in the nation and #1 in texas.lorem
            ipsum dolor sit amet comsectetur, adipisicing elit Quas,memo
          </p>
          <p className="text__para mt-[30px]">
            our best is something we strive for each day,caring for our
            patients-not looking back at what we accomplished but towards what
            we can do tomorrow . Providing the best.lorem ipsum dolor sit
            amet,consectetur adipisicing elit.Aliquid,modi
          </p>
          <Link to="/">
            <button className="btn">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
