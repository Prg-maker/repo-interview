import { ComponentProps } from "react";

interface ButtonFormProps extends ComponentProps<'button'>{
    children?:string
}

export function ButtonForm({children, ...props}: ButtonFormProps){
    return(
        <button {...props} className=" w-full h-[50px] rounded-[4px]  font-bold bg-[#81D8F7]">{children}</button>
    )
}