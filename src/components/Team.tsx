'use client';


import React, { useState } from "react";


type Member = {
  name: string;
  position: string;
  image: string;
  category: string;
  linkedin: string;
};


const Cards = () => {
  const defaultImageLink: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg';


  const teamMembers: Member[] = [
    { name: 'First Last', position: 'Logistics Manager', image: defaultImageLink, category: 'Logistics', linkedin: 'https://linkedin.com' },
    { name: 'First Middle Last', position: 'Tech Lead', image: defaultImageLink, category: 'Tech', linkedin: 'https://linkedin.com' },
    { name: 'First Last', position: 'Web Developer', image: defaultImageLink, category: 'Tech', linkedin: 'https://linkedin.com' },
    { name: 'First M. Last', position: 'Corporate Member', image: defaultImageLink, category: 'Corporate', linkedin: 'https://linkedin.com' },
    { name: 'First L.', position: 'Other', image: defaultImageLink, category: 'Other', linkedin: 'https://linkedin.com' },
    { name: 'First Last', position: 'Logistics Member', image: defaultImageLink, category: 'Logistics', linkedin: 'https://linkedin.com' },
    { name: '-', position: 'Corporate Lead', image: defaultImageLink, category: 'Corporate', linkedin: 'https://linkedin.com' },
  ];


  const [filter, setFilter] = useState<string>('View All');
  const filteredMembers = filter === 'View All' ? teamMembers : teamMembers.filter((member) => member.category === filter);


  const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
  );
 
  return (
    <div className="px-4">
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {['View All', 'Logistics', 'Corporate', 'Tech', 'Other'].map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className="w-28 px-4 py-2 text-white rounded-full bg-violet-500 transition-transform duration-300 transform hover:scale-105 hover:bg-violet-600"
            >
            {option}
          </button>
        ))}
      </div>


      <div className="grid gap-6 justify-center grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,auto))]">
        {filteredMembers.map((member, index) => (
          <div key={index} className="w-full md:max-w-[250px] mx-auto">
            <div className="relative group rounded-lg overflow-hidden h-80">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${member.image})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkIcon />
                </a>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-300">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const Team = () => {
  return (
    <div className="container mx-auto px-4 py-8" id="team">
      <h1 className="text-3xl md:text-4xl font-bold text-left mb-8 text-white text-center">Our Team</h1>
      <Cards />
    </div>
  );
};

export default Team;
