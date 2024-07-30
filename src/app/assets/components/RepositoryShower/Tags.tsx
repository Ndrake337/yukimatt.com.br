import { Children, ReactNode } from "react"

interface TagsProps {
  children: ReactNode
}

export function Tags({children}: TagsProps){
  return ( 
    <span className="rounded-full border border-blue-700 bg-blue-550 p-1.5 text-zinc-200 min-w-16 w-fit text-center cursor-pointer">{children}</span>
  )
}
