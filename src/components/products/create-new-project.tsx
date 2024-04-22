import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import axios from 'axios'
import { toast } from "sonner";
export function CreateNewProject() {
  //poderia receber o token como um parametro

  const token = localStorage.getItem("token"); //mas resolvi fazer dessa maneira
  const [nome, setNome] = useState("");
  const [description, setDescription] = useState("");
  const [price, SetPrice] = useState("");
  const [stock, setStock] = useState("");




  async function handleCreateNewProject(){

    if (!nome || !description || !price || !stock ) {
        return toast.error("Erro ao criar um projeto. Tente novamente.")
    }

    const options = {
        method: 'POST',
        url: 'https://interview.t-alpha.com.br/api/products/create-product',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        data: {
          name: "dsa",
          description: "dsa",
          price:parseInt(price),
          stock: parseInt(stock)
        }
      };

      try {
        await axios.request(options);
        setNome("")
        setDescription("")
        SetPrice("")
        setStock  ("")
        return toast.success("Projeto criado com sucesso")

        
      } catch (error) {
        setNome("")
        setDescription("")
        SetPrice("")
        setStock  ("")
        return toast.error("Erro ao criar um projeto. Tente novamente.")

      }
      

  } 
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <span className="text-sm text-slate-200 font-md hover:underline transition hover:text-slate-400">
          Criar um novo produto
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50 flex ">
          <Dialog.Content className="fixed md:-translate-x-1/2 overflow-hidden px-10 py-10  md:-translate-y-1/2 md:left-1/2 md:top-1/2 md:max-w-[400px] inset-0 md:inset-auto w-full md:h-[70vh] bg-[#212124] md:rounded-md flex flex-col outline-none">
            <Dialog.Title className="text-white font-bold text-lg mb-4">
              Crie um novo produto
            </Dialog.Title>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-bold text-white">
                  Nome do produto:
                </label>
                <input
                    onChange={e => setNome(e.target.value)}
                    value={nome}
                  type=""
                  className="px-2 max-w-[300px] bg-[#121314] outline-none py-2 rounded-md border-2 border-solid border-violet-500 hover:border-violet-700 translate text-sm focus:border-violet-700 text-white  "
                  placeholder="Ex: Televisão"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-bold text-white">
                  Descrição:
                </label>
                <input
                  onChange={e => setDescription(e.target.value)}
                  value={description}
                  type=""
                  className="px-2 max-w-[300px] bg-[#121314] outline-none py-2 rounded-md border-2 border-solid border-violet-500 hover:border-violet-700 translate text-sm focus:border-violet-700 text-white  "
                  placeholder="Ex: Televisão com ..."
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-bold text-white">
                  Preço:
                </label>
                <input
                  onChange={e => SetPrice(e.target.value)}
                  value={price}
                  type="number"
                  className="px-2 max-w-[300px] bg-[#121314] outline-none py-2 rounded-md border-2 border-solid border-violet-500 hover:border-violet-700 translate text-sm focus:border-violet-700 text-white  "
                  placeholder="Ex: $ 12,40 (só número)"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-bold text-white">
                  Quantidade no estoque:
                </label>
                <input
                  onChange={e => setStock(e.target.value)}
                  value={stock}
                  type="number"
                  className="px-2 max-w-[300px] bg-[#121314] outline-none py-2 rounded-md border-2 border-solid border-violet-500 hover:border-violet-700 translate text-sm focus:border-violet-700 text-white  "
                  placeholder="Ex: 5"
                />
              </div>
            </div>

            <div className=" p-4 flex items-center justify-between">
              <Dialog.Close className=" bg-slate-800 p-1.5 px-2 py-2 max-w-1/2 text-slate-400 rounded-md border border-violet-500  ">
                <button className="text-slate-400 text-sm font-bold ">
                  Cancelar
                </button>
              </Dialog.Close>

              <Dialog.Close  onClick={handleCreateNewProject} className=" bg-slate-800 p-1.5 px-2 py-2 max-w-1/2 text-slate-400 rounded-md border border-violet-500  ">
                <button className="text-slate-400 text-sm font-bold ">
                  Criar
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
