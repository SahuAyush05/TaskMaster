import { ListTodo } from 'lucide-react';

export default function Footer() {
  return (
    <footer className=" py-12 border-t border-gray-200">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center pl-4">
            <ListTodo className="h-6 w-6 mr-2" />
            <span className="font-bold">TaskMaster</span>
          </div>
          <p className="text-gray-500">© 2025 TaskMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}