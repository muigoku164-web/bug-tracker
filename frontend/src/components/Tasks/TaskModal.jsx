import React from 'react';
import { X } from 'lucide-react';
import TaskForm from './TaskForm';

const TaskModal = ({ task, onClose, onSave }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {task?.id || task?._id ? 'Edit Task' : 'New Task'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <TaskForm task={task} onSave={onSave} onCancel={onClose} />
        </div>
      </div>
    </div>
  );
};

export default TaskModal;