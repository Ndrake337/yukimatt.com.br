import { ComponentProps, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants';

const buttonSlots = tv({
  base:"flex rounded-full border-2 p-1.5 gap-2",
  variants:{
    color:{
      zinc: "border-zinc-500 text-zinc-500 hover:bg-zinc-500 hover:text-zinc-200",
      pink: "border-pink-650  text-pink-650 hover:bg-pink-500 hover:text-zinc-200",
      blue: "border-blue-550 text-blue-550 hover:bg-blue-550 hover:text-zinc-200",
      dark: "border-zinc-900 hover:bg-zinc-900 hover:text-zinc-200",
    }
  },
  defaultVariants:{
    color: "zinc"
  }
})

type TextButtonProps = ComponentProps<'a'> & VariantProps<typeof buttonSlots> & {
  name: string;
  children: ReactNode;
}

export function TextButton({name, children, color, ...props}: TextButtonProps){

  return ( 
    <a {...props} className={buttonSlots({color})}>
      {children}
      <span>{name}</span>
    </a>
  )
}
