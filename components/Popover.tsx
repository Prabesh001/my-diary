"use client";
import React, { useEffect, useRef, useState } from "react";

interface PopoverProps {
  parentContent?: React.ReactNode;
  childrenContent?: React.ReactNode;
  popoverChildClassName?: string;
}

const Popover: React.FC<PopoverProps> = ({
  parentContent,
  childrenContent,
  popoverChildClassName,
}) => {
  const [showPopover, setShowPopover] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popRef.current && !popRef.current.contains(event.target as Node)) {
        setShowPopover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={popRef} className="relative">
      <div
        className={`cursor-pointer`}
        onClick={() => setShowPopover((prev) => !prev)}
      >
        {parentContent}
      </div>

      {showPopover && (
        <div className={`absolute z-50 ${popoverChildClassName}`}>
          {childrenContent}
        </div>
      )}
    </div>
  );
};

export default Popover;
