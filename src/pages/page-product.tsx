import axios from "axios";
import { FormEvent, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { InputForm } from "../components/form/input-form";
import { MoveLeft } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {

    id:number,
    name:string,
    description:string,
    price:number,
    stock:number,
 
}
  

export function PageProduct(){

      // Obtém o token de autenticação do localStorage
    const token = localStorage.getItem('token')

    const [product, setProduct] = useState<ProductCardProps>()

     // Redireciona para a página de login se não houver token
    if (!token) {
        window.location.href = "/";
    }

    
    // Obtém o ID do produto da URL
    const {productId} = useParams()

    useEffect(()=> {
        const options = {
            method: 'GET',
            url: `https://interview.t-alpha.com.br/api/products/get-one-product/${productId}`,
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzIsImlhdCI6MTcxMzc0MzM1MX0.UOJh21-fBEnpruH8VeeJXlaC7Bwgd1PYQHuCrMJCzL8'
            }
          };
          
        
       async function getProdutInfomation(){
        try {
           const {data} = await axios.request(options)
            setProduct(data.data)
        } catch (error) {
            console.error(error);
        }
       }

       getProdutInfomation()

    } , [])


   
    // Função para navegar de volta para a página de listagem de produtos
    function handleBackPage(){
        window.location.href = "/products"

    }

    
 // Função para deletar o produto
    async function handleDeleteOneProject(event:FormEvent){
        event.preventDefault()
        const options = {
            method: 'DELETE',
            url: `https://interview.t-alpha.com.br/api/products/delete-product/${productId}`,
            headers: {
              Authorization: `Bearer ${token}`
            }
        };


        try {
            await axios.request(options);
            toast.success("Deletado com sucesso.")            
            setTimeout(()=> {
            window.location.href = "/products"

            } , 2000)

        } catch (error) {
            toast.error("Erro ao deletar .")            

        }


    }

    const [nome , setNome] = useState("")
    const [description , setDescription] = useState("")
    const [price , setPrice] = useState("")
    const [stock , setStock] = useState("")

 // Função para atualizar o produto
    async function handleUpdateOneProject(event:FormEvent){


      
        event.preventDefault()

       
    if (!nome && !description && !price && !stock ) {
        return toast.error("Todos os campos estão vazios.")

    }
        const options = {
            method: 'PATCH',
            url: `https://interview.t-alpha.com.br/api/products/update-product/${productId}`,
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzIsImlhdCI6MTcxMzc0MzM1MX0.UOJh21-fBEnpruH8VeeJXlaC7Bwgd1PYQHuCrMJCzL8'
            },
            data: {
              name: nome == ""? product?.name : nome,
              description:description == ""? product?.description : description,
                price: price == ""? product?.price: parseInt(price),
              stock:  stock == ""? product?.stock: parseInt(stock)
            }
          };


          try{
             await axios.request(options);
            toast.success("Atualizado com sucesso.")

        }catch(e){
            toast.error("Houve um erro ao tentar atualizar.")

        }
    }

    return(
        <div className="pt-10 pl-10 w-full h-screen ">
            <header className="flex gap-4 ">
                <button onClick={handleBackPage} className="size-8 rounded-full flex justify-center items-center cursor-pointer  bg-slate-700 hover:bg-slate-500  transition">
                    <MoveLeft  className="size-4"/>
                </button>
                <h2 className="text-white font-bold text-2xl mb-20">{product?.name}</h2>
            </header>
            <div>
                <form action="" className="flex flex-col gap-5 items-start">
                    <div className="gap-4 flex flex-col sm:flex-row  md:items-center items-start">
                        <label htmlFor="nome" className="text-white text-sm font-bold" >Nome atual(trocar nome):    <span className="text-slate-200 underline hover:text-slate-50 transition cursor-pointer">{product?.name}</span></label>
                        <InputForm onChange={value => setNome(value.target.value)} value={nome} id="nome" placeholder="Trocar nome" />
                    </div>     

                    <div className="gap-4 flex flex-col sm:flex-row  md:items-center items-start">
                        <label htmlFor="description" className="text-white text-sm font-bold max-w-30 overflow-hidden text-ellipsis" >Descrição atual(trocar descrição):    <span className="text-slate-200 underline hover:text-slate-50 transition cursor-pointer">{product?.description}</span></label>
                        <InputForm  onChange={value => setDescription(value.target.value)} value={description}id="description" placeholder="Trocar descrição"/>
                    </div>      

                     <div className="gap-4 flex flex-col sm:flex-row  md:items-center items-start">
                        <label htmlFor="price" className="text-white text-sm font-bold" >Preço atual(trocar preço):    <span className="text-slate-200 underline hover:text-slate-50 transition cursor-pointer">{product?.price}</span></label>
                        <InputForm onChange={value => setPrice(value.target.value)} value={price} id="price" placeholder="Trocar preço"/>
                    </div>      

                     <div className="gap-4 flex flex-col sm:flex-row  md:items-center items-start">
                        <label htmlFor="stock" className="text-white text-sm font-bold" >Estoque atual(trocar estoque):    <span className="text-slate-200 underline hover:text-slate-50 transition cursor-pointer">{product?.stock}</span></label>
                        <InputForm onChange={value => setStock(value.target.value)} value={stock} id="stock" placeholder="Trocar Stock"/>
                    </div>

                    <div className="flex items-center gap-16">
                        <button onClick={handleUpdateOneProject} className="px-4 py-2 rounded-sm font-bold bg-green-800">Atualizar</button>
                        <button onClick={handleDeleteOneProject} className="bg-red-500 px-4 py-2 rounded-sm font-bold">Deletar</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}