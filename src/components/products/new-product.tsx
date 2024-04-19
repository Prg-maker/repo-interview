import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { InputForm } from "../form/input-form";
import { LabelForm } from "../form/label-form";
import { InputFormProduct } from "./form/input-form-product";


export function NewProduct() {
    return (
        <div >
            <Dialog.Root>
                <Dialog.Trigger className="rounded-md flex flex-col  bg-slate-700 p-5 gap-3 text-left hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 outline-none focus-visible:ring-lime-400 ">
                    <span className="text-sm font-medium text-slate-200">
                        Adicionar novo produto
                    </span>
                    <p className="text-sm leading-6 text-slate-400">
                        Inicie um novo produto e adicione os detalhes necessários.
                    </p>
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className="inset-0 fixed bg-black/50" />
                    <Dialog.Content className="fixed md:-translate-x-1/2 overflow-hidden  md:-translate-y-1/2 md:left-1/2 md:top-1/2 md:max-w-[640px] inset-0 md:inset-auto w-full md:h-[60vh] bg-slate-700 md:rounded-md flex flex-col outline-none">
                        <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
                            <X className="size-5" />
                        </Dialog.Close>
                        <form className="flex-1 flex flex-col">
                            <div className="flex flex-1 flex-col gap-3 p-5">
                                <span className="text-sm font-medium text-slate-300">
                                    Adicionar um novo produto
                                </span>
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
                        <footer className="bg-red-100 flex">
                            <button className="flex-1  text-sm font-bold py-4 bg-[#A3E635]">
                                Salvar produto
                            </button>
                        </footer>
                        </form>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}