"use client";
import { tv, VariantProps } from "tailwind-variants";
import { ComponentProps, ReactNode } from 'react'

const buttonSlots = tv({
  slots: {
    button: "flex items-center justify-center rounded-full group bg-none w-10 h-10 border-2",
    icon: "flex items-center justify-center rounded-full p-1",
    subtitleText: "font-rajdhani font-medium",
  },

  variants:{
    variant: {
      normal: {
        button: "border-zinc-400 group-hover:border-zinc-500 text-zinc-600 group-hover:text-zinc-200 group-data-[state=active]:border-blue-550 group-data-[state=active]:group-hover:border-blue-400 group-data-[state=active]:text-zinc-200",
        icon: "bg-zinc-400 group-hover:bg-zinc-500 data-[state=active]:text-blue-550 group-data-[state=active]:bg-blue-550 group-data-[state=active]:group-hover:bg-blue-400",
        subtitleText: "text-zinc-500 group-hover:text-zinc-600 group-data-[state=active]:text-blue-550 group-data-[state=active]:group-hove:text-blue-400",
      },
      active: {
        button: "border-blue-550 group-hover:border-blue-400 text-zinc-200 ",
        icon: "bg-blue-550 group-hover:bg-blue-400",
        subtitleText: "text-blue-550 group-hove:text-blue-400",
      },
      closed: {
        button: "border-pink-650 group-hover:border-pink-500 text-zinc-200 ",
        icon: "bg-pink-650 group-hover:bg-pink-500",
        subtitleText: "text-pink-650 group-hover:text-pink-500",
      },
    },

    defaultVariants: {
      variant: "normal",
    },
  }
})

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonSlots> & {
  children: ReactNode;
  subtitle?: string;
};

export function IconButton({variant, subtitle, className, children,...props}: ButtonProps){
  const {button, icon, subtitleText } = buttonSlots({variant})
  
  return ( 
    <button {...props} className="flex flex-col items-center group">
      <div className={button()}>
        <div className={icon()}>
          {children}
        </div>
      </div>
      {subtitle ? <span className={subtitleText()}>{subtitle}</span> : ""}
    </button>
  )
}
