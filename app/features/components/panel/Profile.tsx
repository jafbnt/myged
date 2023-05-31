import { useState } from "react";
import { Link } from "@remix-run/react";
import { IconId, IconChevronUp, IconUser, IconLogout } from "@tabler/icons-react";

export default function Profile() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setActiveSubMenu(null);
  };

  const handleSubMenuMouseEnter = (subMenu: string) => {
    setActiveSubMenu(subMenu);
  };

  return (
    <div className="h-14 flex items-center" onMouseLeave={handleMouseLeave}>
      <ul className="flex flex-row space-x-5 h-10">
        <li
          className="h-10 relative"
          onMouseEnter={() => handleMouseEnter("sistema")}
        >
          <Link
            to=""
            className="flex items-center space-x-2 h-10 cursor-pointer text-gray-500 hover:text-gray-700 ease-in duration-300 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <img className="h-10 border rounded-full" src="https://avatars.githubusercontent.com/u/60991254?s=400&u=baf91994499ab39ebefc060f75463671759048b4&v=4" alt="avatar" />
          </Link>
          {activeMenu === "sistema" && (
            <div className="absolute right-0 transform scale-100 bg-white border rounded shadow-sm w-40 mr-1">
              <ul className="flex flex-col">

                <li
                  className="h-10 relative group hover:bg-gray-100"
                  onMouseEnter={() => handleSubMenuMouseEnter("usuarios")}
                >
                  <Link
                    to=""
                    className="flex items-center justify-between space-x-2 h-10 cursor-pointer text-gray-500 hover:text-gray-700 ease-in duration-300"
                  >
                    <div className="flex flex-row space-x-2">
                      <IconUser className="h-5" />
                      <span className="text-sm">Profile</span>
                    </div>
                  </Link>
                </li>
                
                <li
                  className="h-10 relative group hover:bg-gray-100"
                  onMouseEnter={() => handleSubMenuMouseEnter("usuarios")}
                >
                  <Link
                    to=""
                    className="flex items-center justify-between space-x-2 h-10 cursor-pointer text-gray-500 hover:text-gray-700 ease-in duration-300"
                  >
                    <div className="flex flex-row space-x-2">
                      <IconLogout className="h-5" />
                      <span className="text-sm">Sair</span>
                    </div>
                  </Link>
                </li>


              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
