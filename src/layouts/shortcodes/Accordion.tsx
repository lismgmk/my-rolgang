"use client";

import { markdownify } from "@/lib/utils/textConverter";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`accordion ${show && "active"}`}>
      <div data-aos="fade-up-sm">
        <button
          onClick={() => setShow(!show)}
          type="button"
          className="accordion-header w-full text-xl font-medium"
          data-accordion
        >
          <span dangerouslySetInnerHTML={markdownify(title)}></span>
          <FaChevronDown className="accordion-icon" />
        </button>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
