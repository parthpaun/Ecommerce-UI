import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const FilterAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filterAccordion mb-6 last:mb-0">
      <div
        className="justify-between flex items-center cursor-pointer mb-4 px-4 md:px-0"
        onClick={toggleAccordion}
      >
        <h3 className="font-semibold">{title}</h3>
        <span className="text-green">
          {isOpen ? (
            <span>
              <Minus />
            </span>
          ) : (
            <span>
              <Plus />
            </span>
          )}
        </span>
      </div>
      {isOpen && children}
    </div>
  );
};

export default FilterAccordion;
