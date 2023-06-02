import { useState } from 'react';
import { Link } from '@remix-run/react';
import type { ReactNode } from 'react';

interface DropdownProps {
    title: string;
    children: ReactNode;
}

interface DubdropdownProps{
    to: string;
    title: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <li className="relative group">
        <button 
          className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none group-hover:bg-gray-700" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          <svg className="w-5 h-5 ml-2 -mr-1 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} absolute left-full mt-[-6px] w-56 origin-top-left divide-y divide-gray-100 rounded-md shadow-lg bg-gray-800`}>
          {children}
        </div>
      </li>
    )
  }



const SubDropdown = ({ to, title }: DubdropdownProps) => {
  return (
    <Link to={to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{title}</Link>
  )
}

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center px-2 lg:px-0">
            <ul className="flex flex-col w-full">
              <Dropdown title="Menu 1">
                <ul className="space-y-2 mt-2 space-x-0 bg-gray-800 rounded-md">
                  <Dropdown title="Sub Menu 1-1">
                    <ul className="space-y-2 mt-2 space-x-0 bg-gray-800 rounded-md">
                      <li><SubDropdown to="/sub1-1/sub-sub1" title="Sub Sub Menu 1-1-1"/></li>
                      <li><SubDropdown to="/sub1-1/sub-sub2" title="Sub Sub Menu 1-1-2"/></li>
                    </ul>
                    </Dropdown>
                  <Dropdown title="Sub Menu 1-2">
                    <ul className="space-y-2 mt-2 space-x-0 bg-gray-800 rounded-md">
                      <li><SubDropdown to="/sub1-2/sub-sub1" title="Sub Sub Menu 1-2-1"/></li>
                      <li><SubDropdown to="/sub1-2/sub-sub2" title="Sub Sub Menu 1-2-2"/></li>
                    </ul>
                  </Dropdown>
                  <Dropdown title="Sub Menu 1-3">
                    <ul className="space-y-2 mt-2 space-x-0 bg-gray-800 rounded-md">
                      <li><SubDropdown to="/sub1-3/sub-sub1" title="Sub Sub Menu 1-3-1"/></li>
                      <li><SubDropdown to="/sub1-3/sub-sub2" title="Sub Sub Menu 1-3-2"/></li>
                    </ul>
                  </Dropdown>
                </ul>
              </Dropdown>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
