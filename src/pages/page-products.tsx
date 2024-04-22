import axios from "axios";


import { Product } from "../components/products/product";
import { useEffect, useState } from "react";
import { CreateNewProject } from "../components/products/create-new-project";
import { Frown } from "lucide-react";

// Interface para descrever a estrutura de um produto
interface ProductCardProps {
  id:number,
  name:string,
  description:string,
  price:number,
  stock:number,
  createdAt:Date
}




// Página de listagem de produtos
export function PageProducts() {
  // Estado para armazenar o token de autenticação
  const [token , setToken] = useState(localStorage.getItem("token")) 
 // Recupera as informações do usuário do localStorage
  
 const userLocalStorage = localStorage.getItem('user') as ""
  let user = JSON.parse(userLocalStorage)


 // Redireciona para a página de login se não houver token
  if (!token) {
    window.location.href = "/";
  }

  // Efeito para verificar se o token está vazio e redirecionar para a página de login
  useEffect(() => {
    if(token=="")location.href="/"
  }, [token]);

 // Função para fazer logout
  function handleExit(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setToken("")
  }


// Estado para armazenar a lista de produtos
  const [products , setProducts ] = useState<ProductCardProps[]>([])
// Efeito para carregar a lista de produtos ao carregar a página
  useEffect(()=> {
// Configurações para a requisição HTTP
    const options = {
      method: 'GET',
      url: 'https://interview.t-alpha.com.br/api/products/get-all-products',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }; 
    
    // Função assíncrona para carregar os produtos
    async function getProduts(){
      try {
        const{data} = await axios.request(options);
        // Atualiza o estado dos produtos com os dados recebidos
        setProducts(data.data)

      } catch (error) {
        console.error(error);
      }    
    } 

    getProduts()
  } , [products])// Atualiza a lista de produtos quando a lista de produtos muda

 

  const  [search , setSearch] = useState("")
 // Filtra os produtos com base no termo de busca
  const filterProduts = search != "" ? products.filter((product)=> {
    return product.name.toLowerCase().includes(search.toLowerCase()) 
  }) : products;
 
  return (
    <>
      <div className="text-slate-50   px-5 md:px-3 ">
        <header className=" w-full mx-auto max-w-6xl  space-y-6   px-2 py-10  flex  items-center">
          <div className="flex items-center gap-5">
            <span className="text-md text-slate-500 font-medium  text-ellipsis ">{user.name } </span>
            <div className="h-4 w-1  border-2 border-solid border-white rounded-full" />

            <CreateNewProject/>

            <div>
              <button onClick={handleExit} className="bg-transparent text-sm hover:underline transition hover:bg-slate-900 px-2 py-2 rounded">Sair</button>
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-6xl my-12 space-y-6">
          <form className="w-full ">
            <input
              onChange={e => setSearch(e.target.value)}
              value={search}
              className="w-full bg-transparent text-3xl tracking-tighter outline-none placeholder:text-slate-500"
              type="text"
              placeholder="Buscar produto..."
            />
          </form>

          <div className="h-px bg-slate-700" />

          {
            filterProduts.length == 0 ? 
            <div className="flex items-center justify-center  p-40">
              <p className="flex items-center gap-4 text-white text-sm font-bold">
                <Frown className="size-5"/>
                Nenhum produto encontrado.
              </p>
            </div> : 
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 auto-rows-[250px]">
              {
                 filterProduts.map(product=> {
                  return(
                    <Product key={product.id} product={product}/>
                  )
                }) 
              }
            </div>
          }
        </div>
      </div>
    </>
  );
}
