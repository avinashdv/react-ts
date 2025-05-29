import { useState } from "react";
import { IAccordionItem } from "../interfaces/Accordion";

const faqs = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is a component?",
    answer:
      "A component is a reusable piece of UI that can have its own state and logic.",
  },
  {
    question: "What is state in React?",
    answer:
      "State is a built-in object used to contain data or information about the component.",
  },
];

const AccordionItem: React.FC<IAccordionItem> = ({ faq, isOpen, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="faq-question">
        {faq.question}
      </button>
      <p className={`${isOpen ? "faq-answer-active" : "faq-answer-disabled"}`}>
        {faq.answer}
      </p>
    </div>
  );
};

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div>
      <h1>Faq</h1>
      {faqs.map((faq, idx) => {
        return (
          <AccordionItem
            key={idx}
            faq={faq}
            isOpen={openIndex === idx}
            onClick={() => toggle(idx)}
          />
        );
      })}
    </div>
  );
}

export default FaqAccordion;
