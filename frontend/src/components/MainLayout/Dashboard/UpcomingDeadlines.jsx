import {  Clock } from 'lucide-react';

const DeadlineItem = ({ task }) => {
  return (
    <div className=" flex p-4 rounded-md items-center justify-between border border-1 border-gray-200  ">
      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
        <Clock className="text-orange-600" size={16} />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{task.title}</h3>
        <p className="text-gray-600 text-sm mt-1">Due in {task.daysUntilDue}</p>
      </div>
    </div>
  );
};

export const UpcomingDeadlines = ({ deadlines }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm h-[600px]">
      <div className="px-4 py-2 md:px-6 md:py-4  border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900">Upcoming Deadlines</h2>
        <p className="text-gray-600 text-sm mt-1">Tasks due in the next 7 days</p>
      </div>
      <div className="flex flex-col gap-4 x-4 py-2 md:px-6 md:py-4 ">
        {deadlines.map((deadline, index) => (
          <DeadlineItem key={index} task={deadline} />
        ))}
      </div>
    </div>
  );
};