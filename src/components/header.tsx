'use client';

import Link from "next/link";
import { useState } from "react";

export function Header(){
  const [isMenu,setIsmenu] = useState<boolean>(false)
  return(
    <>
      <header className="w-full bg-white border border-[#ddd] md:flex block justify-between px-20 py-5">
          <div className="items-center md:block hidden">Logo</div>
          <div>
            <ul className="md:grid grid-cols-4 gap-4 font-medium hidden">
              <li><Link href={`/`}>HOME</Link></li>
              <li><Link href={`#about`}>ABOUT</Link></li>
              <li><Link href={`#works`}>WORKS</Link></li>
              <li><Link href={`#contact`}>CONTACT</Link></li>
            </ul>
            <div>
            {
                    isMenu &&  
                    <ul className="md:hidden block absolute w-1/2 rounded-md h-1/4 p-3 bg-slate-100 right-0 top-[3.85rem] justify-end">
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