import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ProductCardProps {
  product:{
    id:number,
    name:string,
    description:string,
    price:number,
    stock:number,
    createdAt:Date
  }
}

export function Product({
  product
}:ProductCardProps) {

  return (
    <a href={`/produts/product/${product.id}`}>
      <div className="text-left flex flex-col  rounded-md relative  bg-slate-800 p-5 gap-3 overflow-hidden hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 outline-none focus-visible:ring-lime-400  ">
       
       <div className="flex justify-between px-l-2">

       <span className="text-sm font-sm text-slate-300">
        {product.name}
        </span>

        <span className="text-sm font-medium text-slate-400">
            criado {formatDistanceToNow(product.createdAt , {
              locale:ptBR,
              addSuffix:true
            })}
        </span>
       </div>


        <p className="text-sm leading-6 text-slate-400">
            {product.description}
        </p>
        
        <footer className="relative top-1/2 flex justify-between mt-10">
            <p className="text-sm leading-6 text-slate-400">
            Quantidade em Estoque: {product.stock}
            </p>
            <p className="text-sm leading-6 text-slate-400">
            R${product.price}
            </p>
        </footer>
      </div>

     
    </a>
  );
}

