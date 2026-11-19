"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// image and linkedin are optional: members without them get a placeholder tile and no link.
// To add a photo, put it in public/team-members/ and set image: "team-members/<file>".
type Member = {
  name: string;
  position: string;
  image?: string;
  category: string | string[];
  linkedin?: string;
};

const Cards = () => {
  
  const teamMembers: Member[] = [
    {
      name: "Neel Ramesh",
      position: "Director",
      category: "Other",
    },
    {
      name: "Wilson Nguyen",
      position: "Director",
      category: "Other",
    },
    {
      name: "Shana Chao",
      position: "Director",
      category: "Other",
    },
    {
      name: "Daniel Li",
      position: "Tech Lead",
      category: "Tech",
    },
    {
      name: "Arnav Pandey",
      position: "Logistics Director",
      category: "Logistics",
    },
    {
      name: "German Cervantes",
      position: "Workshop and Logistics Committee",
      category: ["Tech", "Logistics"],
    },
    {
      name: "Jonathan Lin",
      position: "Workshop Committee",
      category: "Tech",
    },
    {
      name: "Alan Tran",
      position: "Logistics Committee",
      category: "Logistics",
    },
    {
      name: "Elise Ji",
      position: "Logistics Committee",
      category: "Logistics",
    },
    {
      name: "Duy Tran",
      position: "Logistics Committee",
      category: "Logistics",
    },
    {
      name: "Tiffany Zhang",
      position: "Logistics Committee",
      category: "Logistics",
    },
    {
      name: "Luis Ortiz",
      position: "Workshop Committee",
      category: "Tech",
    },
    {
      name: "Leo Chavez",
      position: "Workshop Committee",
      category: "Tech",
    },
    {
      name: "Anthony Tam",
      position: "Web Developer",
      category: "Tech",
    },
    {
      name: "Julia Nguyen",
      position: "Web Developer",
      category: "Tech",
    },
    {
      name: "Siddharth Sundar",
      position: "Web Developer",
      category: "Tech",
    },
    {
      name: "Arianna Sotudeh",
      position: "Logistics Committee",
      category: "Logistics",
    },
    {
      name: "Dhivyesh Kanagasabai",
      position: "Web Developer",
      category: "Tech",
    }
  ];

  const [filter, setFilter] = useState<string>("Directors/Leads");
  const filteredMembers =
    filter === "Directors/Leads"
      ? teamMembers.filter(
          (member) =>
            member.position.includes("Lead") ||
            member.position.includes("Director")
        )
      : teamMembers.filter((member) =>
          Array.isArray(member.category)
            ? member.category.includes(filter)
            : member.category === filter
        );

  const LinkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
      />
    </svg>
  );

  return (
    <div className="px-4">
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {["Directors/Leads", "Logistics", "Tech"].map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className="w-36 px-4 py-2 font-rethink rounded-full bg-[#E3C4FF] transition-transform duration-300 transform hover:scale-110 hover:bg-[#C9A4FF]"
          >
            {option}
          </button>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-4 justify-center">
        <div className="col-span-full flex flex-wrap justify-center gap-6">
          {filteredMembers.map((member, index) => (
            <div key={index} className="w-[275px]">
            <div className="relative group rounded-lg overflow-hidden h-80 bg-[#E3C4FF]">
              {member.image ? (
                <Image
                  src={`/${member.image}`}
                  alt={member.name}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 1000px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/bithacks_logo_black.svg"
                    alt=""
                    width={120}
                    height={120}
                    className="opacity-40"
                  />
                </div>
              )}
              {member.linkedin && (
                <>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300"></div>
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkIcon />
                    </a>
                  </div>
                </>
              )}
            </div>
            <div className="mt-4 text-center">
              <h3
                className="text-xl font-semibold font-rethink"
                style={{ color: "#332FAC" }}
              >
                {member.name}
              </h3>
              <p
                className="text-gray-300 font-rethink"
                style={{ color: "#332FAC" }}
              >
                {member.position}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Run once on mount to set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="relative container mx-auto my-auto px-4 py-8 min-h-[105vh]" id="team">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: isMobile
              ? "url('/shooting_star_pixel_blue.svg')"
              : "url('/shooting_star_pixel_blue.svg'), url('/star_pixel_blue.svg'), url('/music_character.PNG')",
            backgroundRepeat: "no-repeat, no-repeat, no-repeat",
            backgroundPosition: isMobile
              ? "top center"
              : "10% 5%, 16% 0%, 115% bottom",
            backgroundSize: isMobile ? "300px" : "360px, 80px, 600px",
            zIndex: "-1",
          }}
        ></div>

        <h1
          className="text-3xl md:text-5xl font-sem-bold mb-8 text-gray-400 text-center font-jersey"
          style={{ color: "#332FAC" }}
        >
          Our Team
        </h1>
        <Cards />
      </div>
    </>
  );
};

export default Team;
