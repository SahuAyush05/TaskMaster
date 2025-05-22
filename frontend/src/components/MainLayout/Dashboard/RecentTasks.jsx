// Badge Component
const Badge = ({ children, variant = "default", size = "sm" }) => {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
    orange: "bg-orange-100 text-orange-800",
  };

  const sizes = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
  };

  return (
    <span
      className={`${variants[variant]} ${sizes[size]} rounded-full font-medium`}
    >
      {children}
    </span>
  );
};

// PriorityBadge Component
const PriorityBadge = ({ priority }) => {
  const priorityConfig = {
    High: { variant: "orange", label: "High" },
    Critical: { variant: "danger", label: "Critical" },
    Medium: { variant: "warning", label: "Medium" },
    Low: { variant: "success", label: "Low" },
  };

  const config = priorityConfig[priority] || priorityConfig.Low;
  return <Badge variant={config.variant}>{config.label}</Badge>;
};

// StatusBadge Component
const StatusBadge = ({ status }) => {
  const statusConfig = {
    "In Progress": { variant: "info", label: "In Progress" },
    Completed: { variant: "success", label: "Completed" },
    "Not Started": { variant: "default", label: "Not Started" },
  };

  const config = statusConfig[status] || statusConfig["Not Started"];
  return <Badge variant={config.variant}>{config.label}</Badge>;
};

// Task Item Component
const TaskItem = ({ task }) => (
  <div className=" flex p-4 rounded-md items-center justify-between border border-1 border-gray-200  ">
    <div className="flex-1">
      <h3 className="font-medium text-gray-900">{task.title}</h3>
      <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
        <span>Due: {task.dueDate}</span>
        <PriorityBadge priority={task.priority} />
      </div>
    </div>
    <div className="ml-4">
      <StatusBadge status={task.status} />
    </div>
  </div>
);

export const RecentTasks = ({ tasks = [] }) => {
    const handleViewAllTasks = () => {
         window.location.href = "/dashboard/add-task"
    }
  return (
    <div className="bg-white rounded-lg shadow-sm h-[600px] ">
      <div className="px-4 py-2 md:px-6 md:py-4  border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900">Recent Tasks</h2>
        <p className="text-gray-600 text-sm mt-1">
          Your most recent tasks and their status
        </p>
      </div>

      {tasks.length > 0 ? (
        <div className="flex flex-col gap-4 x-4 py-2 md:px-6 md:py-4 ">
          {tasks.map((task, index) => (
            <TaskItem key={index} task={task} />
          ))}
        </div>
      ) : (
        <div className="p-4 text-gray-500 text-sm text-center">
          No recent tasks available.
        </div>
      )}
      <div className="flex flex-row items-center justify-center pt-4 pb-8">
        <button className="text-md font-medium text-black hover:cursor-pointer border-1 border-gray-200 rounded-md px-4 py-2 hover:bg-gray-100 transition-colors" onClick={handleViewAllTasks}>
          View All Tasks
        </button>
      </div>
    </div>
  );
};
