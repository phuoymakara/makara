'use client'
import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"

export function ProviderTheme({ children } : {children: React.ReactNode}){
  const[mouted, setMounted] = useState<boolean>(false)
  useEffect(()=>{
    setMounted(true)
  },[])
  if(!mouted){
    return <>{children}</>
  }
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}