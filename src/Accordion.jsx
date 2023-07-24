import { useState } from "react";
import { BiArrowFromBottom, BiArrowFromTop } from "react-icons/bi";
function Accordion({ accordionItems }) {
  const [isExpanded, setIsExpanded] = useState();

  const renderedAccordionItems = accordionItems.map((accordionItem, index) => {
    const accordionIsExpanded = index === isExpanded;

    const handleClick = (index) => {
      if (accordionIsExpanded) {
        setIsExpanded(-1);
      } else {
        setIsExpanded(index);
      }
    };

    const icons = (
      <span>
        {accordionIsExpanded ? <BiArrowFromBottom /> : <BiArrowFromTop />}
      </span>
    );

    return (
      <div key={accordionItem.id}>
        <div
          className="p-3 border-b bg-cyan-500 text-white flex items-center justify-between"
          onClick={() => handleClick(index)}
        >
          {accordionItem.label}
          {icons}
        </div>
        {accordionIsExpanded && (
          <div className="p-3 border-t bg-gray-200">
            {accordionItem.content}
          </div>
        )}
      </div>
    );
  });

  return <div>{renderedAccordionItems}</div>;
}

export default Accordion;
