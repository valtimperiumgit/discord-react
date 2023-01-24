import React, { useState } from 'react';

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={handleClick}>{props.buttonText}</button>
      {isOpen && (
        <div className={props.dropdownClass}>
          {props.fields.map((field, index) => (
            <div key={index}>{field}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;