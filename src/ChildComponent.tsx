import React, { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from './ThemeContext';
import { GenericType } from './types';

interface ChildProps {
  stringProp: string;
  booleanProp: boolean;
  numberProp: number;
  functionProp: () => void;
  genericProp: GenericType<string>;
}

const ChildComponent: React.FC<ChildProps> = ({
  stringProp,
  booleanProp,
  numberProp,
  functionProp,
  genericProp
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
      <p>Generic Prop Value: {genericProp.value}</p>
      <p>Generic Prop: {genericProp.timestamp}</p>
      <button ref={buttonRef} onClick={functionProp} className="animated-button">
        Meni bosing! ({numberProp})
      </button>
    </div>
  );
};

export default ChildComponent;
