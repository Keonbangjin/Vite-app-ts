import React, { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from './ThemeContext';

interface ChildProps {
  stringProp: string;
  booleanProp: boolean;
  numberProp: number;
  functionProp: () => void;
}

const ChildComponent: React.FC<ChildProps> = ({
  stringProp,
  booleanProp,
  numberProp,
  functionProp
}) => {
  const theme = useContext(ThemeContext);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  return (
    <div className={`child-container ${theme}`}>
      <h2>Child Component</h2>
      <p>String prop: {stringProp}</p>
      <p>Boolean prop: {booleanProp ? 'True' : 'False'}</p>
      <p>Number prop: {numberProp}</p>
      <button ref={buttonRef} onClick={functionProp} className="animated-button">
        Meni bosing! ({numberProp})
      </button>
    </div>
  );
};

export default ChildComponent;