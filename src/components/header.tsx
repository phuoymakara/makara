'use client';

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header(){
  const [isMenu,setIsmenu] = useState<boolean>(false)
  const[mouted, setMounted] = useState<boolean>(false)
  const {theme, setTheme} = useTheme()
  useEffect(()=>{
    setMounted(true)
  },[])
  if(!mouted) return null;
  const handleSetTheme = () =>{
    if(theme==='light'){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }
  console.log(theme)
  return(
    <>
      <header className={`w-full ${theme==='light'?'border border-[#ddd]':'bg-black'} md:flex block justify-between md:px-20 px-5 py-5`}>
          <div className="items-center md:block hidden">Logo</div>
          <div>
            <ul className="md:grid grid-cols-5 gap-4 font-medium hidden">
              <li><Link href={`/`}>HOME</Link></li>
              <li><Link href={`#about`}>ABOUT</Link></li>
              <li><Link href={`#works`}>WORKS</Link></li>
              <li><Link href={`#contact`}>CONTACT</Link></li>
              <li className="flex">
                        <label className="switch" >
                          <input onClick={handleSetTheme} type="checkbox"/>
                          <span className="slider round"></span>
                        </label>
                        { 
                        theme === 'light' &&  <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor"><path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path></svg>
                      }
                      { 
                        theme ==='dark' &&  <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
                      }
                      </li>
            </ul>
            <div>
            {
                    isMenu &&  
                    <ul className={`md:hidden block absolute w-1/2 rounded-md h-1/4 p-3 ${theme=='light'?'bg-slate-100':'bg-black text-white'} right-0 top-[3.85rem] justify-end`}>
                    <li className="flex">
                        <label className="switch" >
                          <input onClick={handleSetTheme} type="checkbox"/>
                          <span className="slider round"></span>
                        </label>
                      { 
                        theme === 'light' &&  <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor"><path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path></svg>
                      }
                      { 
                        theme ==='dark' &&  <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
                      } </li>
                    <li onClick={()=> setIsmenu(!isMenu)} className="w-full flex my-2 justify-center"><Link href={`/`}>HOME</Link></li>
                    <li onClick={()=> setIsmenu(!isMenu)} className="w-full flex my-2 justify-center"><Link href={`#about`}>ABOUT</Link></li>
                    <li onClick={()=> setIsmenu(!isMenu)} className="w-full flex my-2 justify-center"><Link href={`#works`}>WORKS</Link></li>
                    <li onClick={()=> setIsmenu(!isMenu)} className="w-full flex my-2 justify-center"><Link href={`#contact`}>CONTACT</Link></li>
                  </ul>
            }
            </div>
            <div className="w-[100%] md:hidden flex justify-end ">
            <svg onClick={()=> setIsmenu(!isMenu)} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" width={20} viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
            </div>
          </div>
      </header>
    </>
  )
}