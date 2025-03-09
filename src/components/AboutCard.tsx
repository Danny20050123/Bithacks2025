import Image from "next/image";

const AboutCard = () => {
  return (
    <>
      <div className="bg-[#DFBAFF] w-fit pt-12 px-6 pb-6 flex flex-col rounded-lg">
        {/* <div className="bg-white h-[60%] w-[50%]"> */}
        {/* <div className="bg-white h-4 w-4"></div> */}
        <p className="font-rethink bg-white h-fit rounded-md w-[20rem] md:w-[50vw] p-8 text-2xl">
          As UCI's first Embedded Systems hackathon, BitHacks is focused on
          providing a space for students to <b>create</b>, <b>explore</b>, and{" "}
          <b>grow</b>. BitHacks aims to foster creativity and{" "}
          <b>push your imagination beyond its limits</b>.
        </p>
        {/* </div> */}
      </div>
    </>
  );
};

export default AboutCard;
