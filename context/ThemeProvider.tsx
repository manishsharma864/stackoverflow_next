"use client"

import React, { createContext,useContext, useEffect, useState } from 'react'

interface ThemeContextType{
    mode:string;
    setMode:(mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({children}:{
    children:React.ReactNode
}) => {
    const [mode,setMode] = useState('');
    const handleThemeChange = ()=>{
        if(mode==='light'){
            setMode('light')
            document.documentElement.classList.add('light')

        }else{
            setMode('dark')
            document.documentElement.classList.add('dark')
        }
    }
    useEffect(() => {
      handleThemeChange()

    }, [mode])
    

  return (
    <ThemeContext.Provider value={{mode,setMode}}>
        {children}

    </ThemeContext.Provider>
  )
}

export function useTheme(){
    const context = useContext(ThemeContext);
    if(context === undefined){
        throw new Error('usetheme must be provided within a Provider')
    }
    return context
}

export default ThemeProvider