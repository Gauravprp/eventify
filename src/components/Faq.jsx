import { useState } from "react";

const faqData = [
  {
    title: "Item 1 Title",
    content: "This is the content for item 1.",
  },
  {
    title: "Item 2 Title",
    content: "This is the content for item 2.",
  },
  {
    title: "Item 3 Title",
    content: "This is the content for item 3.",
  },
  {
    title: "Item 4 Title",
    content: "This is the content for item 4.",
  },
  {
    title: "Item 5 Title",
    content: "This is the content for item 5.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-[80px] max-[767px]:py-[50px]">
      <div className="max-w-[800px] mx-auto w-[90%]" id="accordion">
        <h2 className="font-lato text-[32px] font-[700] mb-[10px] max-[767px]:text-[26px] text-center">
          Frequently Asked Questions
        </h2>

        {faqData.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div key={index} className="overflow-hidden border-t border-b">
              <div
                className="p-4 flex justify-between items-center cursor-pointer transition"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-lato text-[20px] font-[600] max-[767px]:text-[18px]">
                  {faq.title}
                </span>
                <span
                  className={`accordion-icon text-2xl font-[600] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </div>
              <div
                className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out px-4 ${
                  isOpen ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <p className="py-3 text-[16px] font-lato font-[400]">
                  {faq.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
