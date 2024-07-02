import Image from "next/image";

interface CardProps{
  id?: string;
  src? : string;
  name ?: string;
  typeCard: 'project' | 'tech'
}

export function Card({id, src, name, typeCard}: CardProps){
  return (
    <div className={typeCard==='tech'?"bg-orange-100 rounded-lg p-6":"bg-red-300 rounded-md p-4"}>
      {name}
    {
      src &&
      <div className="flex justify-center items-center">
          <svg width={38} height={38} xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" fill="currentColor"><path d={src}></path></svg>
      </div>
    } 
    </div>
  )
}