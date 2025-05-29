export interface IFaq {
  question: string;
  answer: string;
}

export interface IAccordionItem {
  faq: IFaq;
  isOpen: boolean;
  onClick: () => void;
}
