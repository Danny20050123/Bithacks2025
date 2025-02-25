import React from "react";

interface CardProps {
  title: string;
  content: string;
}

const CardComponent: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="flex row items-center justify-center rounded-[15px]">
      <div className="flex max-w-[100vw] h-[215px] bg-white flex flex-col shadow-[0_5px_20px_rgba(0,0,0,0.5)] transition-[0.3s] duration-[ease-in-out] mx-2.5 my-[30px] px-[15px] py-5 rounded-[15px] hover:h-80">
        <div className="relative items-center justify-center w-[260px] h-[260px] top-[-40%] shadow-[0_5px_20px_rgba(0,0,0,0.2)] z-[1] rounded-[15px] perspective-distant transition-transform duration-300 transform hover: visible opacity-100 scale-105">
          <img
            className="max-w-full rounded-[15px]"
            src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2V8ZW58MHx8MHx8fDA%3D"
            alt="Decorative content"
          />
        </div>
        <div className="relative h-[500px] top-[-140px] text-[#111] text-center opacity-0 transition-[2s] duration-[ease-in-out] py-2.5 hover:opacity-100 mt-[30px]">
          <h1 className="text-[30px]">{title}</h1>
          <p className="text-[15px] h-[60px] text-[#333] mt-2.5 hover: h-[150px]">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
