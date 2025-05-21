import { useState } from 'react';
import { ListTodo ,Menu  } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-50">
      <div className="max-w-9xl mx-auto justify-between px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center pl-2">
              <ListTodo  className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold">TaskMaster</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 pr-2 ">
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer">Login</button>
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 hover:cursor-pointer">Register</button>
          </div>
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <Menu  className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <button className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 w-full text-left">Login</button>
            <button className="block px-3 py-2 text-base font-medium bg-black text-white rounded-md hover:bg-gray-800 w-full text-left">Register</button>
          </div>
        </div>
      )}
    </nav>
  );
}