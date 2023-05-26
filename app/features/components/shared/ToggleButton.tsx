import { IconMoon, IconSunHigh } from "@tabler/icons-react";
import { useEffect } from "react";
import { useTheme } from "~/features/contexts/ThemeProvider";

export default function ToggleButton() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
    setTheme(newTheme);
  };
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          defaultChecked={theme === "dark"}
          type="checkbox"
          className="sr-only peer"
          onClick={toggleTheme}
        />
        <div className="flex justify-center w-11 h-6 bg-slate-800 text-gray-800  peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-gray-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-100 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-800 peer-checked:text-gray-700">
          <div
            className={`flex flex-row w-full ${
              theme === "light"
                ? `justify-start ml-[4px]`
                : `justify-end mr-[4px]`
            }  items-center `}
          >
            {theme === "light" ? (
              <IconSunHigh className="w-4 h-4 z-50" />
            ) : (
              <IconMoon className="w-4 h-4 z-50" />
            )}
          </div>
        </div>
      </label>
    </>
  );
}
