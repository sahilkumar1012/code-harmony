import React, { useState } from "react";
import "./FAQSection.css"; // Importing custom CSS

const faqs = [
  {
    question: "What is DSA and why is it important?",
    answer:
      "DSA (Data Structures and Algorithms) is the foundation of coding interviews. To crack Tier-1 product companies, strong DSA and problem solving skills are essential.",
  },
  {
    question: "What does problem solving mean in coding?",
    answer:
      "Problem solving is applying logic and DSA concepts to tackle coding challenges efficiently. It’s the core skill interviewers look for.",
  },
  {
    question: "Is DSA enough to get into Tier-1 companies?",
    answer:
      "For freshers, yes — strong DSA and problem solving are the key. For experienced roles, system design and real project depth are also required.",
  },
  {
    question: "What’s the right strategy to prepare?",
    answer:
      "Start with basics (arrays, strings, recursion), move to advanced topics (DP, graphs), and practice mock interviews. Consistency beats solving 1000 random problems.",
  },
  {
    question: "How many problems should I solve before interviews?",
    answer:
      "Around 150–200 quality problems are enough if you cover all patterns. Focus on learning approaches, not memorizing answers.",
  },
  {
    question: "Can CodeHarmony.dev help me in this journey?",
    answer:
      "Yes. We provide the right roadmap, problem selection, and mentorship so you don’t waste time and reach your goal faster.",
  },
];


const FAQSection = ({ theme = "light" }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const isDark = theme === "dark";

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`faq-container ${isDark ? "dark" : "light"}`}>
      <div className="faq-box">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Find answers to commonly asked questions about Mentorship.
        </p>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq-answer">
                  {isOpen && <p>{faq.answer}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
