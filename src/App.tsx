import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import { ThemeProvider } from './ThemeContext';
import { FunctionType, GenericType } from './types';
import './App.css';

const ParentComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleClick: FunctionType = (x, y) => {
    const newCount = count + 1;
    setCount(newCount);
    return newCount;
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const myGenericObject: GenericType<string> = {
    value: 'Hello, TypeScript!',
    timestamp: Date.now(),
  };

  return (
    <ThemeProvider value={theme}>
      <div className={`parent-container ${theme}`}>
        <h1>Ota komponent</h1>
        <button onClick={toggleTheme}> Tematikani o'zgartiring</button>
        <ChildComponent 
          stringProp="Salom, TypeScript!"
          booleanProp={true}
          numberProp={count}
          functionProp={() => handleClick(0, 0)}  
          genericProp={myGenericObject}
        />
      </div>
    </ThemeProvider>
  );
};

export default ParentComponent;
