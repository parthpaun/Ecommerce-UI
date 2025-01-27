import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const FooterAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" last:mb-0 md:hidden mb-8">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="font-semibold text-white">{title}</h3>
        <span className="text-white">
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

export default FooterAccordion;
