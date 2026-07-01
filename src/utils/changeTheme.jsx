import {useState, useEffect} from 'react'

export function useChangeTheme(){
  
  const [theme, setTheme] = useState(() =>{
    return localStorage.getItem("notemark-theme") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("theme", theme === "dark");
    localStorage.setItem("notemark-theme", theme);

  }, [theme]);

  return [theme, setTheme];
}