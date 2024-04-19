import {  ComponentProps, ReactNode } from 'react'

interface InputFormProps extends ComponentProps<'input'>{
    children?:ReactNode
}

export function InputFormProduct({children, ...props}:InputFormProps) {
  return (
    <div className="border-2  cursor-pointer  hover:border-[#9BE1FB]   border-solid  border-transparent transition flex items-center flex-1 md:w-[250px] h-[40px] px-2 py-1 bg-[#202024] rounded-[4px] gap-2 ">
        {children}
      <input
        className="  group  flex items-center flex-1 outline-none bg-transparent text-white text-sm placeholder:text-[#7C7C8A]"
        {...props}
      />
    </div>
  );
}


