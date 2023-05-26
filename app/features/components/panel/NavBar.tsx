import logo from "public/img/gedocs.png";
import Menu from "./Menu";
import ToggleButton from "../shared/ToggleButton";

export default function NavBar() {
  return (
    <nav className="h-14 flex flex-row justify-center bg-white border-b dark:bg-slate-800">
      <div className="w-4/6 h-full flex flex-row justify-between items-center">
        <div className="h-14 flex items-center space-x-8">
          <img src={logo} alt="Logo" className="h-9" />
          <div>
            <Menu/>
          </div>
        </div>
        <div><ToggleButton/></div>
      </div>
    </nav>
  );
}
