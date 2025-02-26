import React, { useState } from "react";
import "./FAQSection.css"; // Importing custom CSS

const faqs = [
  {
    question: "Does long-term mentorship really produce outcomes?",
    answer:
      "Yes, long-term mentorship helps in consistent growth, skill development, and achieving long-term goals.",
  },
  {
    question: "What should be the duration of my long-term mentorship?",
    answer:
      "The ideal duration depends on your goals, but most mentorships last from 6 months to a year.",
  },
  {
    question: "How many sessions can I have with the mentor?",
    answer:
      "Session frequency varies, but typically, you can schedule weekly or bi-weekly sessions.",
  },
  {
    question: "When is the right time to take long-term mentorship?",
    answer:
      "The right time is when you seek structured guidance for career, business, or personal development.",
  },
  {
    question: "Do you provide any student discount on the long-term mentorship plan?",
    answer: "Yes, we offer special discounts for students. Contact us for details.",
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
          Find answers to commonly asked questions about Long-Term Mentorship.
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
