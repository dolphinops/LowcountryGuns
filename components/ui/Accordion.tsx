"use client";

import { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-[var(--color-card-border)] last:border-0">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:text-[var(--color-primary-base)] text-[var(--color-foreground)] focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 12L0 4.5L1.05 3.45L7.5 9.9L13.95 3.45L15 4.5L7.5 12Z" fill="currentColor"/>
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"}`}
      >
        <div className="text-sm text-[var(--color-muted-fg)] pt-1">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items }: { items: { question: string; answer: string | React.ReactNode }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
