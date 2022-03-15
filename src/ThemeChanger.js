import React, { useState, useEffect } from 'react'
import { ToogleComponent } from './components';

const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(true);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  }
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') return  document.body.classList.add('dark-mode');
  })
  return (
    <>
      <ToogleComponent value={themeState} onChange={handleChange} name={themeState ? 'Light Mode' : 'Dark Mode'}/>
    </>
  )
}
export default ThemeChanger;