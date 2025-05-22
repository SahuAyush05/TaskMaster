import React from "react";
import {List, CheckCircle, Clock, Users } from 'lucide-react';
const DashboardCardsLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Total Tasks */}
      <div className="bg-white rounded-lg p-6 shadow-sm ">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-600 text-sm font-medium">Total Tasks</h3>
          <List className="text-gray-400" size={20} />
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
        <p className="text-green-600 text-sm">+2 from last week</p>
      </div>

      {/* Completed */}
      <div className="bg-white rounded-lg p-6 shadow-sm ">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-600 text-sm font-medium">Completed</h3>
          <CheckCircle className="text-gray-400" size={20} />
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-1">7</div>
        <p className="text-green-600 text-sm">+3 from last week</p>
      </div>

      {/* In Progress */}
      <div className="bg-white rounded-lg p-6 shadow-sm ">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-600 text-sm font-medium">In Progress</h3>
          <Clock className="text-gray-400" size={20} />
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-1">3</div>
        <p className="text-red-600 text-sm">-1 from last week</p>
      </div>

      {/* Assigned to You */}
      <div className="bg-white rounded-lg p-6 shadow-sm ">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-600 text-sm font-medium">Assigned to You</h3>
          <Users className="text-gray-400" size={20} />
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-1">5</div>
        <p className="text-green-600 text-sm">+1 from last week</p>
      </div>
    </div>
  );
};

export default DashboardCardsLayout;
