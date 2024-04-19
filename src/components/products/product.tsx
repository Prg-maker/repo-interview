import * as Dialog from "@radix-ui/react-dialog";
//import { formatDistanceToNow } from "date-fns";
//import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";
import { LabelForm } from "../form/label-form";
import { InputFormProduct } from "./form/input-form-product";
interface NoteCardProps {
  note: {
    id:string
    date: Date;
    content: string;
  };
  onNoteDeleted: (id:string) => void
}

export function Product() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="text-left flex flex-col relative rounded-md relative  bg-slate-800 p-5 gap-3 overflow-hidden hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 outline-none focus-visible:ring-lime-400  ">
       <div className="flex justify-between px-l-2">
       <span className="text-sm font-sm text-slate-300">
        TV 55\" 4K Full HD
        </span>

        <span className="text-sm font-medium text-slate-400">
            criado há 5 dias
        </span>
       </div>
        <p className="text-sm leading-6 text-slate-400">
            Televisão com cores vibrante
        </p>
        <footer className="relative top-1/2 flex justify-between">
            <p className="text-sm leading-6 text-slate-400">
            Quantidade em Estoque: 10
            </p>
            <p className="text-sm leading-6 text-slate-400">
            R$279,90
            </p>
        </footer>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed md:-translate-x-1/2 overflow-hidden  md:-translate-y-1/2 md:left-1/2 md:top-1/2 md:max-w-[640px] w-full md:h-[60vh] inset-0 md:inset-auto bg-slate-700 rounded-md flex flex-col outline-none">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-3 p-5 ">
            <span className="text-sm font-medium text-slate-300">
            Atualize um produto ou exclua.

            </span>

            <form className="flex-1 flex flex-col">
                            <div className="flex flex-1 flex-col gap-3 p-5">
                                
                                <div className="grid grid-cols-2 gap-3 ">
                                    <div  className="flex flex-col gap-2">
                                        <LabelForm>
                                            Nome do produto
                                        </LabelForm>
                                        <InputFormProduct placeholder="Nome do produto">
                                        </InputFormProduct>
                                    </div>

                                    <div  className="flex flex-col gap-2">
                                        <LabelForm>
                                            Descrição do produto
                                        </LabelForm>
                                        <InputFormProduct placeholder=" max:120 caracteres" maxLength={120}/>
                                    </div>
                                    <div  className="flex flex-col gap-2">
                                        <LabelForm>
                                            Estoque 
                                        </LabelForm>
                                        <InputFormProduct placeholder="Ex: 12" type="number"/>
                                    </div>
                                    <div  className="flex flex-col gap-2">
                                        <LabelForm>
                                            Preço
                                        </LabelForm>
                                        <InputFormProduct placeholder="Ex: $ 12.12" type="text"/>
                                    </div>
                                </div>
                            </div>
                      
                        </form>
          </div>
       
          <div className="flex">
          <button
            type="button"
           
            className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 font-medium group  border-r border-slate-500"
          >
            Deseja{" "}
            <span className="text-[#A3E635] group-hover:underline">
              atualizer esse produto
            </span>
          </button>


          <button
            type="button"
            className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 font-medium group border-l border-slate-500"
          >
            Deseja{" "}
            <span className="text-red-400 group-hover:underline">
              apagar esse produto
            </span>
          </button>
          </div>
        

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

