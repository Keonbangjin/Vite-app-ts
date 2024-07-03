import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import { ThemeProvider } from './ThemeContext';
import './App.css';

const ParentComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
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
          functionProp={handleClick}
        />
      </div>
    </ThemeProvider>
  );
};

export default ParentComponent;