"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  type FaqItem = {
    question: string;
    answer: React.ReactNode;
  };

  const faqData = [
    {
      question: "What is BitHacks?",
      answer:
        "BitHacks is an event by IEEE and Theta Tau where hackers collaborate and compete to create the most innovative embedded projects within a weekend.",
    },
    {
      question: "Who can participate in BitHacks?",
      answer:
        "Any college student can apply to participate in BitHacks. We welcome hackers of all skill levels, no prior coding or embedded experience is needed.",
    },
    // {
    //   question: "Do I need to know how to code or work with embedded software?",
    //   answer: "No coding experience is needed, we welcome beginners and provide mentors to help you learn."
    // },
    {
      question: "When do applications close?",
      answer:
        "Applications close March 21. Decision details will be released closer to the event.",
    },
    // {
    //   question: "What should I bring?",
    //   answer: "Bring your laptop, charger, a form of ID, and any personal items you'll need for the duration of the event."
    // },
    {
      question: "What parts will be provided to use?",
      answer: (
        <>
          Here is a{" "}
          <a
            href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQUZ75eky0jHpDp_vapfN2ATBrxrkZ5mY5WN1bJKSkdKcVwsXL1uxg0MRQaQDway5Vtx2UjyzXWsiAt/pubhtml"
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            list
          </a>{" "}
          for all the parts that will be provided!
        </>
      ),
    },
    {
      question: "Can I bring my own parts to use?",
      answer:
        "Feel free to bring your own parts as long as they are under $50.",
    },
    {
      question: "What is the schedule like?",
      answer:
        "Check-in ends at 7 PM on April 11 and hacking will conclude on Sunday, April 13 at 9 AM.",
    },
    {
      question: "Will transportation be provided?",
      answer:
        "No, transportation will need to be taken care of by individual hackers. Unfortunately we can't provide any travel reimbursements.",
    },
    {
      question: "What if I don't have a team?",
      answer:
        "There will be a team-building event before the start of BitHacks!",
    },
  ];

  const sponsorData = [
    {
      name: "IEEE-Eta Kappa Nu",
      link: "https://hkn.ieee.org/",
      imageUrl: "/IEEE-EKN.png",
    },
    {
      name: "Medtronic",
      link: "https://www.medtronic.com/",
      imageUrl: "/medtronic-3.svg",
    },
    {
      name: "Northrop Grumman",
      link: "https://www.northropgrumman.com/",
      imageUrl: "/NorthropGrumman.svg",
    },
    {
      name: "UCI MECPS",
      link: "https://mecps.uci.edu/",
      imageUrl: "/MECPS.png",
    },
    {
      name: "UCI Samueli School of Engineering",
      link: "https://engineering.uci.edu/",
      imageUrl: "/samueli.png",
    },
    {
      name: "UCI ODIT",
      link: "https://odit.uci.edu",
      imageUrl: "/ODITLogoTransparent.png",
    },
    {
      name: "UCI OAI",
      link: "https://oai.tech.uci.edu",
      imageUrl: "/inclusion-oai.png",
    },
    { 
      name: "ASUCI SPFB", 
      link: "https://asuci.uci.edu/president/spfb/", 
      imageUrl: "/SPFB.png"
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
    <div id="faq" className="w-full relative">
      {/* FAQs Section */}
      <div className="bg-[#6C81E6] px-6 py-12 relative">
        <h2 className="font-jersey text-5xl mb-8 text-left text-[#332FAC]">
          FAQ
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-32">
          {faqData.map((faq, index) => (
            <div key={index} className="flex flex-col">
              <button
                onClick={() => toggleFaq(index)}
                className={`bg-[#A6EFFF] p-4 flex justify-between items-center w-full text-[#332FAC]
                  transition-all duration-300 ease-in-out
                  ${
                    openFaqs.includes(index)
                      ? "rounded-t-lg" // top corners rounded when open
                      : "rounded-lg" // All corners rounded when closed
                  }`}
              >
                <span className="font-rethink text-left pr-4 whitespace-normal">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`transform transition-transform duration-200 text-black flex-shrink-0 ${
                    openFaqs.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openFaqs.includes(index)
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="bg-white p-4 rounded-b-lg font-rethink text-[#332FAC] min-h-[100px] lg:min-h-[80px]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-10 left-4 w-[6rem] h-[6rem] z-[5]">
          <img
            src="/star_pixel_blue.svg"
            alt="Blue Star"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Diagonal Divider */}
        <div
          className="absolute left-0 right-0 w-full "
          style={{
            height: "100px",
            background:
              "linear-gradient(to right bottom, #6C81E6 49.5%, #DFBAFF 50%)",
            marginTop: "-51px",
          }}
        />
      </div>
    </div>

    {/* Sponsors Section */}
    <div id="sponsors" className="bg-[#DFBAFF] px-6 py-16">
      {/* Mobile Anteater Graphic */}
      <div className="sm:hidden relative w-full -mt-20 flex justify-center overflow-hidden">
        <img
          src="/kick_character.PNG"
          alt="Anteater kicking"
          className="w-full h-full object-contain"
        />
      </div>

      <h2 className="font-jersey text-5xl mb-12 text-center text-[#332FAC]">
        Sponsors
      </h2>

      {/* Sponsors Pink Star */}
      <div className="absolute bottom-21 right-0 w-[7rem] h-[7rem] mb-20 mr-6 hidden lg:block overflow-hidden">
        <img
          src="/star_pixel_light_pink.svg"
          alt="Pink Star"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Anteater Kick Graphic */}
      <div className="absolute -bottom-[3180px] -right-[29px] w-[665px] h-[665px] hidden lg:block overflow-hidden">
        <img
          src="/kick_character.PNG"
          alt="Anteater kicking"
          className="w-full h-full object-contain translate-x-1/4"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {sponsorData.map((sponsor, index) => (
          <div
            key={index}
            className="aspect-square bg-white rounded-lg shadow-md p-4 relative group overflow-hidden"
          >
            <img
              src={sponsor.imageUrl}
              alt={`${sponsor.name} logo`}
              className="w-full h-full object-contain"
            />
            {/* Hover overlay w/animation */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-lg font-semibold mb-2">
                  {sponsor.name}
                </p>
                <a
                  href={sponsor.link}
                  className="text-white text-l underline hover:text-blue-200 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Mobile Star Graphic */}
      <div className="sm:hidden mt-12 w-full flex justify-center">
        <div className="w-[7rem] h-[7rem]">
          <img
            src="/star_pixel_light_pink.svg"
            alt="Light Pink Star"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Faq;
