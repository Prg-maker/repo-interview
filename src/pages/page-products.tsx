import { NewProduct } from '../components/products/new-product'
export function PageProducts() {
  return (
    <>
    <div className="text-slate-50  antialiased px-5 md:px-3 ">
      <div className="mx-auto max-w-6xl my-12 space-y-6">

        <form className="w-full ">
          <input
            className="w-full bg-transparent text-3xl tracking-tighter outline-none placeholder:text-slate-500"
            type="text"
            placeholder="Buscar produto..."
          />
        </form>

        <div className="h-px bg-slate-700" />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 auto-rows-[250px]">

            <NewProduct/>
        </div>
      </div>
    </div>
    </>
  );
}
