import React from 'react';
import { Check, Edit2, Trash2, Calendar, Tag } from 'lucide-react';

const TaskItem = ({ task, onEdit, onDelete, onToggleStatus }) => {
  const taskId = task.id || task._id;

  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6 hover:shadow-md transition">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h3
              className={`text-lg font-semibold ${
                task.status === 'completed'
                  ? 'line-through text-gray-500'
                  : 'text-gray-900'
              }`}
            >
              {task.title}
            </h3>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                task.priority === 'critical'
                  ? 'bg-red-100 text-red-800'
                  : task.priority === 'high'
                  ? 'bg-orange-100 text-orange-800'
                  : task.priority === 'medium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-green-100 text-green-800'
              }`}
            >
              {task.priority}
            </span>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                task.status === 'completed'
                  ? 'bg-green-100 text-green-800'
                  : task.status === 'in-progress'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {task.status}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-3 whitespace-pre-line">
            {task.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500 flex-wrap">
            <div className="flex items-center gap-1">
              <Tag className="w-4 h-4" />
              <span>{task.category}</span>
            </div>
            {task.dueDate && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(task.dueDate).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onToggleStatus(taskId)}
            className={`p-2 rounded-lg transition ${
              task.status === 'completed'
                ? 'bg-green-100 text-green-600 hover:bg-green-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title={
              task.status === 'completed'
                ? 'Mark as incomplete'
                : 'Mark as complete'
            }
          >
            <Check className="w-5 h-5" />
          </button>
          <button
            onClick={() => onEdit(task)}
            className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition"
            title="Edit task"
          >
            <Edit2 className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDelete(taskId)}
            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
            title="Delete task"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;