import React from "react";
import { faqs } from "../../assets/data/faqs";
import FlagItem from "./flagItem";

const FlagList = () => {
  return (
    <div>
      {faqs.map((item, index) => (
        <FlagItem key={index} faqs={item} />
      ))}
    </div>
  );
};

export default FlagList;
