import { ListTodo, CheckCircle, NotepadText, ChevronDown ,Users} from "lucide-react";
import { NavLink } from "react-router-dom";

const allNavItems = [
  { path: "/dashboard", name: "Dashboard", icon: <NotepadText /> },
  { path: "/dashboard/add-task", name: "My Tasks", icon: <CheckCircle /> },
  { path: "/dashboard/users", name: "Users", icon: <Users />, adminOnly: true },
];

const role="admin";

const navItems = allNavItems.filter(item => !item.adminOnly || role === "admin");

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow flex flex-col justify-between h-screen">
      <div className="h-20 flex items-center px-6 mx-2 border-b">
        <ListTodo className="h-6 w-6 mr-2" />
        <p className="text-2xl font-bold">TaskMaster</p>
      </div>
      <nav className="flex-1 px-2 py-6 space-y-2 mx-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition font-medium ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="border-t px-4 py-4 flex items-center mx-2 gap-3 text-sm">
        <div className="w-10 h-10 bg-gray-100 rounded-full" />
        <div className="flex flex-col flex-1">
          <span className="text-gray-900 font-medium">John Doe</span>
          <span className="text-gray-500 text-xs">User</span>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </aside>
  );
}
