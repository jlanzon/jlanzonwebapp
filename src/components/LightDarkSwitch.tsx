import React, { useState, useEffect } from 'react';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const LightDarkSwitch: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    const setThemeFromLocalStorage = () => {
      setIsDarkMode(getInitialTheme());
    };

    window.addEventListener('storage', setThemeFromLocalStorage);
    
    return () => {
      window.removeEventListener('storage', setThemeFromLocalStorage);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <div className="flex items-center space-x-2">
      <span>Light</span>
      <div>
        <input 
          type="checkbox" 
          checked={isDarkMode} 
          onChange={toggleTheme} 
          className="toggle toggle-accent" 
        />
      </div>
      <span>Dark</span>
    </div>
  );
};

export default LightDarkSwitch;
