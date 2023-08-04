import React, { useState } from "react";
import { FaGreaterThan, FaLessThan, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Cards = (props) => {

    let reviews = props.reviews;
    const[index, setIndex] = useState(0)

    // const leftShiftHandaler = () => {
    //     if( index - 1 < 0 ) {
    //         setIndex(reviews.length - 1);
    //     }
    //     else{
    //        setIndex(index - 1)
    //     }
    // } 

    // const rightShiftHandaler = () => {
    //     if(index > reviews.length) {
    //         setIndex(0);
    //     }
    //     else{
    //        setIndex(index + 1)
    //     }
    // } 

    const leftShiftHandaler = () => {
      if (index - 1 < 0) {
          setIndex(reviews.length - 1);
      } else {
          setIndex(index - 1);
      }
  };
  
  const rightShiftHandaler = () => {
      if (index >= reviews.length - 1) {
          setIndex(0);
      } else {
          setIndex(index + 1);
      }
  };
  

    const randomDataHandaler = () => {
        const randomData = Math.floor(Math.random() * reviews.length);
        setIndex(randomData);
    } 

    return (
        <div className=" flex justify-center align-center mt-[5rem]">
          <div className="relative border-2 text-center rounded-md max-w-2xl flex justify-center flex-col align-center bg-slate-100 p-6">
          <div className="h-[8rem] w-[8rem] rounded-full absolute mt-[-33rem] ml-[1.1rem] bg-[#d274f7]"/>
           <div>
             <img src={reviews[index].image} className="h-[8rem] rounded-full absolute mt-[-5rem]"/>
           </div>

           <div>
             <h3 className="font-bold text-[2.5rem] pt-7">{reviews[index].name}</h3>
             <p className="text-[1.5rem] pt-4 font-bold text-blue-500">{reviews[index].job}</p>
           </div>

          <div className="flex justify-center pt-6 text-[#d274f7]"> <FaQuoteLeft /> </div>

           <div className="mt-[1.5rem] mb-[1.5rem]">
              <p>{reviews[index].text}</p>
           </div>

          <div className="flex justify-center text-[#d274f7]"><FaQuoteRight /></div>

           <div className="m-[2rem] ">
             <button onClick={leftShiftHandaler} className="mr-[2rem]"><FaLessThan /></button>
             <button onClick={rightShiftHandaler} className="ml-[2rem]"><FaGreaterThan /></button>
           </div>

           <div>
             <button onClick={randomDataHandaler} className="bg-green-400 font-bold text-white text-[1.5rem] p-[1rem] rounded-lg">Surprise Me</button>
           </div>

        </div>
      </div>
    )
}

export default Cards;