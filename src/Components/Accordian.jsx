import { useState } from "react";
import { FAQ } from "../utils/constants";
import Footer from "./Footer";

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-purple-50">
      <div className="w-2/3 mx-auto select-none">
        <div className="mt-20 mb-10 text-purple-950">
          <h1 className="text-6xl arsenal-sc-bold text-center mt-10">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="right mb-36">
          {FAQ.map((faq, i) => (
            <div key={i}>
              <div
                onClick={() => handleAccordion(i)}
                className="bg-purple-100 p-7 m-5 rounded-xl cursor-pointer"
              >
                <div className="flex justify-between ">
                  <h1 className="text-xl dm-sans-font ">{faq.Q}</h1>
                  <button>{openIndex === i ? "⬆️" : "⬇️"}</button>
                </div>
                {openIndex === i ? (
                  <p className="mt-5 text-gray-700 w-5/6">{faq.A}</p>
                ) : null}

                {/* explanation with example
              
              initial--> openIndex = null
              1st click --> i=0
              handleAccordion(0)
              setOpenIndex(0==null) --> NO
              THEN --> setOpenIndex(0)
              ==> i=0, openIndex=0
              IF openIndex === i --> YES
              THEN --> <p>{faq.A}</p> --> display
              
              */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accordian;
