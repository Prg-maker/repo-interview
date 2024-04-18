import {  ComponentProps} from 'react'

interface LabelFormProps extends ComponentProps<'label'>{
    children:string
}

export function LabelForm({children, ...props}:LabelFormProps) {
  return (
    <label {...props} htmlFor="" className='text-[#E1E1E6] text-sm font-bold '>{children}</label>
  );
}


