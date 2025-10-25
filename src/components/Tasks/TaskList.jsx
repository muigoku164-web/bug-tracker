import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onEdit, onDelete, onToggleStatus }) => (
  <div>
    {tasks.length === 0 ? (
      <div>No tasks found.</div>
    ) : (
      tasks.map(task =>
        <TaskItem key={task.id}
          task={task}
          onEdit={() => onEdit(task)}
          onDelete={() => onDelete(task.id)}
          onToggleStatus={() => onToggleStatus(task.id)}
        />)
    )}
  </div>
);

export default TaskList;
