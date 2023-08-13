'use client'
import React from "react";
import { useState,useEffect } from "react";

const Card = ({day,part}) => {
  
  const [check , setCheck] = useState(false)

  return (
    <div className="inline-block pl-3 pt-4 ">
      <a onClick={()=>setCheck(!check)}
        className={ check?`bg-green-500 block w-[212px] h-[187px] max-w-xs overflow-hidden shadow-md  transition-shadow duration-300 ease-in-out rounded-2xl  `:`block w-[212px] h-[187px] max-w-xs overflow-hidden shadow-md transition-shadow duration-300 ease-in-out rounded-2xl bg-white `}
      >
        
        <div className="pl-4 pt-4">
      
        
          

          <div className="mb-1 font-body text-2xl font-bold text-black">
            {part}
          </div>
          <p className="font-thin font-inter text-black ">{day}</p>
          <div className="flex font-thin text-xs font-inter text-black ">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-3.5 mr-1 "
            >
              <path
                d="M7 1.42188C5.89675 1.42187 4.81828 1.74903 3.90096 2.36196C2.98364 2.97489 2.26868 3.84608 1.84649 4.86534C1.42429 5.88461 1.31383 7.00619 1.52906 8.08824C1.74429 9.17029 2.27556 10.1642 3.05567 10.9443C3.83579 11.7244 4.82971 12.2557 5.91176 12.4709C6.99381 12.6862 8.11539 12.5757 9.13466 12.1535C10.1539 11.7313 11.0251 11.0164 11.638 10.099C12.251 9.18172 12.5781 8.10325 12.5781 7C12.5764 5.52112 11.9881 4.10331 10.9424 3.05759C9.89669 2.01186 8.47888 1.42361 7 1.42188ZM7 11.9219C6.02655 11.9219 5.07495 11.6332 4.26556 11.0924C3.45616 10.5516 2.82531 9.78288 2.45278 8.88352C2.08026 7.98417 1.98279 6.99454 2.1727 6.03979C2.36261 5.08504 2.83137 4.20805 3.51971 3.51971C4.20805 2.83137 5.08504 2.36261 6.03979 2.1727C6.99454 1.98279 7.98417 2.08026 8.88352 2.45278C9.78288 2.82531 10.5516 3.45615 11.0924 4.26555C11.6332 5.07495 11.9219 6.02655 11.9219 7C11.9204 8.30492 11.4014 9.55598 10.4787 10.4787C9.55598 11.4014 8.30492 11.9204 7 11.9219ZM10.3906 7C10.3906 7.08702 10.3561 7.17048 10.2945 7.23202C10.233 7.29356 10.1495 7.32812 10.0625 7.32812H7C6.91298 7.32812 6.82952 7.29356 6.76798 7.23202C6.70645 7.17048 6.67188 7.08702 6.67188 7V3.9375C6.67188 3.85048 6.70645 3.76702 6.76798 3.70548C6.82952 3.64395 6.91298 3.60938 7 3.60938C7.08703 3.60938 7.17049 3.64395 7.23202 3.70548C7.29356 3.76702 7.32813 3.85048 7.32813 3.9375V6.67188H10.0625C10.1495 6.67188 10.233 6.70645 10.2945 6.76798C10.3561 6.82952 10.3906 6.91298 10.3906 7Z"
                fill="black"
              />
            </svg>
            <div className="pt-3">10:22 pm</div>
            
          </div>
          <div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;