import logo from "public/img/gedocs.png";
import Menu from "./Menu";
import ToggleButton from "../shared/ToggleButton";
import { IconMenu2 } from "@tabler/icons-react";
import Profile from "./Profile";

export default function NavBar() {
  return (
    <>
      <nav className="h-14 flex flex-row justify-center border-b dark:bg-slate-800">
        <div className="px-3 w-full lg:w-5/6 xl:4/6 h-full flex flex-row justify-between items-center gap-4">
          <div className="md:hidden">
            <IconMenu2 className="dark:text-gray-400 dark:hover:text-gray-300 cursor-pointer ease-in duration-300   text-gray-500 hover:text-gray-700" />
          </div>

          <div>
            <img src={logo} alt="Logo" className="h-9 drop-shadow-sm" />
          </div>

          <div className="flex-auto hidden md:block">
            <Menu />
          </div>

          <div className="order-last flex flex-row space-x-5 h-14 justify-between items-center">
            <div><ToggleButton /></div>
            
            <div><Profile/></div>
          </div>
        </div>
      </nav>
    </>
  );
}
