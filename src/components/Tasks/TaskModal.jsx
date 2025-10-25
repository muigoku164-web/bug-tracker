import React from "react";
import TaskForm from "./TaskForm";
import { X } from "lucide-react";

const TaskModal = ({ show, onClose, onSubmit, editingTask, taskForm, setTaskForm }) => {
  if (!show) return null;

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-90vh overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {editingTask ? "Edit Task" : "New Task"}
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition">
              <X className="w-6 h-6" />
            </button>
          </div>
          <form onSubmit={handleTaskSubmit}>
            <TaskForm initialData={taskForm} onSubmit={onSubmit} setTaskForm={setTaskForm} />
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {editingTask ? "Update Task" : "Create Task"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
