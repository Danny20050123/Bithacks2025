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
      answer: "BitHacks is an event by IEEE and Theta Tau where hackers collaborate and compete to create the most innovative embedded projects within a weekend."
    },
    {
      question: "Who can participate in BitHacks?",
      answer: "Any college student can apply to participate in BitHacks. We welcome hackers of all skill levels, no prior coding or embedded experience is needed."
    },
    // {
    //   question: "Do I need to know how to code or work with embedded software?",
    //   answer: "No coding experience is needed, we welcome beginners and provide mentors to help you learn."
    // },
    {
      question: "When do applications close?",
      answer: "Applications close March 21. Decision details will be released closer to the event."
    },
    // {
    //   question: "What should I bring?",
    //   answer: "Bring your laptop, charger, a form of ID, and any personal items you'll need for the duration of the event."
    // },
    {
      question: "What parts will be provided to use?",
      answer: <>Here is a <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQUZ75eky0jHpDp_vapfN2ATBrxrkZ5mY5WN1bJKSkdKcVwsXL1uxg0MRQaQDway5Vtx2UjyzXWsiAt/pubhtml" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">list</a> for all the parts that will be provided!</>
    },
    {
      question: "Can I bring my own parts to use?",
      answer: "Feel free to bring your own parts as long as they are under $50."
    },
    {
      question: "What is the schedule like?",
      answer: "The Opening Ceremony starts at 5 PM on April 11 and hacking will conclude on Sunday, April 13 at 10 AM."
    }, 
    {
      question: "Will transportation be provided?",
      answer: "No, transportation will need to be taken care of by individual hackers. Unfortunately we can't provide any travel reimbursements."
    },
    {
      question: "What if I don't have a team?",
      answer: "There will be a team-building event before the start of BitHacks!"
    }
  ];

  const sponsorData = [
    { name: "IEEE-Eta Kappa Nu", link: "https://hkn.ieee.org/", imageUrl: "/IEEE-EKN.png" },
    { name: "Medtronic", link: "https://www.medtronic.com/", imageUrl: "/medtronic-3.svg" },
    { name: "Northrop Grumman", link: "https://www.northropgrumman.com/", imageUrl: "/NorthropGrumman.svg" },
    { name: "UCI MECPS", link: "https://mecps.uci.edu/", imageUrl: "/MECPS.png" },
    { name: "UCI Samueli School of Engineering", link: "https://engineering.uci.edu/", imageUrl: "/samueli.png" },
    { name: "UCI ODIT", link: "https://odit.uci.edu", imageUrl: "/ODITLogoTransparent.png"},
    { name: "UCI OAI", link: "https://oai.tech.uci.edu", imageUrl: "/inclusion-oai.png" }
    // { name: "Test8", link: "https://test8.com", imageUrl: "/api/placeholder/150/150" }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div id = "faq" className="w-full">
      {/* FAQs Section */}
      <div className="bg-white px-6 py-12 relative">
        <h2 className="text-4xl mb-8 text-left text-black">FAQ</h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-32">
          {faqData.map((faq, index) => (
            <div key={index} className="flex flex-col">
              <button
                onClick={() => toggleFaq(index)} // title of faqs
                className="bg-[#d1d1d1] p-4 rounded-lg flex justify-between items-center w-full text-black"
              >
                <span className="font-medium text-left pr-4 whitespace-normal">{faq.question}</span>
                <ChevronDown
                  className={`transform transition-transform duration-200 text-black flex-shrink-0 ${
                    openFaqs.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openFaqs.includes(index) 
                    ? 'grid-rows-[1fr] opacity-100' 
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="bg-[#f5f5f5] p-4 rounded-b-lg mt-1 text-black min-h-[100px] lg:min-h-[80px]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Diagonal Divider */}
        <div 
          className="absolute left-0 right-0 w-full"
          style={{
            height: '100px',
            background: 'linear-gradient(to right bottom, white 49.5%, #e0e0e0 50%)',
            marginTop: '-35px'
          }}
        />
      </div>

      {/* Sponsors Section */}
      <div id = "sponsors" className="bg-[#e0e0e0] px-6 py-16">
        <h2 className="text-4xl mb-12 text-center text-black">Sponsors</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                  <p className="text-white font-semibold mb-2">{sponsor.name}</p>
                  <a 
                    href={sponsor.link}
                    className="text-white underline hover:text-blue-200 transition-colors"
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
      </div>
    </div>
  );
};

export default Faq;