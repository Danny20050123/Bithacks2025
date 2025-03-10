import Image from "next/image";

const AboutCard = () => {
  return (
    <>
      <div className="bg-[#DFBAFF] w-fit p-6 gap-2 flex flex-col rounded-lg">
        <Image
          src="/x.svg"
          width={30}
          height={30}
          alt="x icon"
          className="bg-white rounded-md justify-end"
        />
        <p className="font-rethink bg-white h-fit rounded-md w-[65vw] md:w-[50vw] p-8 text-lg md:text-2xl">
          As UCI's first Embedded Systems hackathon, BitHacks is focused on
          providing a space for students to <b>create</b>, <b>explore</b>, and{" "}
          <b>grow</b>. BitHacks aims to foster creativity and{" "}
          <b>push your imagination beyond its limits</b>.
        </p>
      </div>
    </>
  );
};

export default AboutCard;
