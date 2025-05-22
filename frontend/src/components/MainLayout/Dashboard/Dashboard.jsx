import { Plus, List, CheckCircle, Clock, Users } from 'lucide-react';
import DashboardCardsLayout from "./DashboardCardsLayout";
import { RecentTasks } from './RecentTasks';
import { UpcomingDeadlines } from './UpcomingDeadlines';
const recentTasks = [
    {
      title: "Update user documentation",
      dueDate: "6/15/2023",
      priority: "High",
      status: "In Progress"
    },
    {
      title: "Fix login page bug",
      dueDate: "6/10/2023",
      priority: "Critical",
      status: "Completed"
    },
    {
      title: "Design new dashboard layout",
      dueDate: "6/20/2023",
      priority: "Medium",
      status: "In Progress"
    },
    {
      title: "Implement file upload feature",
      dueDate: "6/25/2023",
      priority: "Low",
      status: "Not Started"
    }
  ];

  const upcomingDeadlines = [
    {
      title: "Update user documentation",
      daysUntilDue: "2 days"
    },
    {
      title: "Design new dashboard layout",
      daysUntilDue: "7 days"
    }
  ];
const Dashboard = () => {

    const handleAddTask=()=>{
        window.location.href = "/dashboard/add-task"
    }
    
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, John Doe!</p>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors" onClick={handleAddTask}>
            <Plus size={16} />
            New Task
          </button>
        </div>

        <DashboardCardsLayout/>

         <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
          <div className="lg:col-span-4">
            <RecentTasks tasks={recentTasks}/>
          </div>
          <div className="lg:col-span-3">
            <UpcomingDeadlines deadlines={upcomingDeadlines} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
