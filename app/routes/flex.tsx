import { IconMenu2 } from "@tabler/icons-react";

export default function () {
  return (
    <nav className="h-14 flex flex-row justify-center border-b dark:bg-slate-800">
      <div className="w-4/6 h-full flex flex-row justify-between items-center gap-4">

        <div className="md:hidden">
          <IconMenu2 />
        </div>

        <div className="">
          <img
            className="h-10"
            src="https://exclusivos.tribunademinas.com.br/wp-content/uploads/2022/03/Logo-Celula.jpeg"
            alt="logo"
          />
        </div>

        <div className="flex-auto hidden md:block">menu longo</div>

        <div className="order-last bg-red-300">direita</div>

      </div>
    </nav>
  );
}
