"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const faqData = [
    {
      question: "What is BitHacks?",
      answer: "A hackathon is a coding event where participants collaborate to create innovative solutions within a limited time frame."
    },
    {
      question: "Who can participate in BitHacks?",
      answer: "Any student enrolled in a college or university can participate in our hackathon."
    },
    {
      question: "Do I need to know how to code or work with embedded software?",
      answer: "While coding experience is helpful, we welcome beginners and provide mentors to help you learn."
    },
    {
      question: "When do applications close? When will decisions come out?",
      answer: "Applications close March 21. Decision details will be released closer to the event."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, any form of ID, and any personal items you'll need for the duration of the event."
    },
    {
      question: "What is the schedule like?",
      answer: "The Opening Ceremony starts at 5 PM and hacking will conclude on Sunday at 10 AM."
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
    { name: "Amazon", link: "https://amazon.com", imageUrl: "/api/placeholder/150/150"},
    { name: "Google", link: "https://google.com", imageUrl: "/api/placeholder/150/150" },
    { name: "Test3", link: "https://test3.com", imageUrl: "/api/placeholder/150/150" },
    { name: "Test4", link: "https://test4.com", imageUrl: "/api/placeholder/150/150" },
    { name: "Test5", link: "https://test5.com", imageUrl: "/api/placeholder/150/150" },
    { name: "Test6", link: "https://test6.com", imageUrl: "/api/placeholder/150/150" },
    { name: "Test7", link: "https://test7.com", imageUrl: "/api/placeholder/150/150" },
    { name: "Test8", link: "https://test8.com", imageUrl: "/api/placeholder/150/150" }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-full">
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
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`transform transition-transform duration-200 text-black ${
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
                  <div className="bg-[#f5f5f5] p-4 rounded-b-lg mt-1 text-black">
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
      <div className="bg-[#e0e0e0] px-6 py-16">
        <h2 className="text-4xl mb-12 text-center text-black">Sponsors</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {sponsorData.map((sponsor, index) => (
            <div 
              key={index}
              className="aspect-square bg-white rounded-lg shadow-md p-4 relative group overflow-hidden"
            >
              <img
                src="/api/placeholder/150/150"
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