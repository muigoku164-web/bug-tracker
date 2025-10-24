import React from "react";

const TaskItem = ({ task, onEdit, onDelete, onToggleStatus }) => (
  <div>
    <h3>{task.title}</h3>
    <span>{task.priority}</span>
    <span>{task.status}</span>
    <span>{task.category}</span>
    <span>{task.dueDate}</span>
    <div>{task.description}</div>
    <button onClick={onEdit}>Edit</button>
    <button onClick={onDelete}>Delete</button>
    <button onClick={onToggleStatus}>
      {task.status === "completed" ? "Mark as Incomplete" : "Mark as Complete"}
    </button>
  </div>
);

export default TaskItem;
