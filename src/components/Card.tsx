import React from "react";

interface CardProps {
  title: string;
  content: string;
  img: string;
}

const CardComponent: React.FC<CardProps> = ({ title, content, img}) => {
  return (
    <div className="flex row items-center justify-center rounded-[15px]">
      <div className="flex max-w-[100vw] h-[215px] bg-white flex flex-col shadow-[0_5px_20px_rgba(0,0,0,0.5)] transition-[0.3s] duration-[ease-in-out] mx-2.5 my-[30px] px-[15px] py-5 rounded-[15px] hover:h-80">
        <div className="relative items-center justify-center w-[260px] h-[260px] top-[-100%] shadow-[0_5px_20px_rgba(0,0,0,0.2)] z-[1] rounded-[15px] perspective-distant transition-transform duration-300 transform hover: visible opacity-100 scale-105">
          <img
            className="max-w-full rounded-[15px] bg-[#] h-[220px] w-[260px] object-cover"
            src={img}
            alt="Decorative content"
          />
        </div>
        <div className="relative group w-[260px] h-[600px] top-[-240px] text-[#111] flex flex-col flex-end justify-end opacity-0 transition-[2s] duration-[ease-in-out] py-2.5 hover:visible opacity-100 mt-[30px]">
          <div className="flex group justify-center opacity-0 transition-[2s] duration-[ease-in-out] py-2.5 group-hover:opacity-100">
          <h1 className="relative flex w-[200px] h-[300px] text-[30px] items-center text-center justify-center font-jersey top-[-150px] z-[10] group-hover:opacity-100">{title}</h1>
          </div>
          <div className="relative top-[-100px] flex opacity-0 justify-center transition-[2s] duration-[ease-in-out] py-2.5 group-hover:opacity-100">
          <p className="relative text-[20px] text-center font-rethink top-[-150px] z-[10] text-[#333] mt-2.5">
            {content}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
