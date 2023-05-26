import { Link } from "@remix-run/react";
import { IconId, IconChevronUp } from "@tabler/icons-react";
export default function Menu() {
  return (
    <div className="h-14 flex items-center">
      <ul className="flex flex-row space-x-5 h-10">
        <li className="h-10 group relative">
          <Link
            to=""
            className="flex items-center space-x-2 h-10 cursor-pointer text-gray-700 hover:text-gray-500 ease-in duration-300"
          >
            <IconId className="h-5" />
            <span className="text-sm">Sistema</span>
            <IconChevronUp className="h-4 transform group-hover:rotate-180 ease-in duration-300" />
          </Link>
          <div className="absolute left-0  transform scale-0 group-hover:scale-100 transition-transform duration-300 bg-white border rounded shadow-sm  w-40 p-4">
            <ul>
              <li>Oi</li>
              <li>Teste</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
