import React, { useState } from "react";

const TaskForm = ({ initialData, onSubmit }) => {
  const [form, setForm] = useState(initialData || {
    title: "", description: "", category: "bug", priority: "medium", status: "open", dueDate: ""
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder="Title" value={form.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <select name="category" value={form.category} onChange={handleChange}>
        <option value="bug">Bug</option>
        <option value="feature">Feature</option>
        <option value="enhancement">Enhancement</option>
        <option value="documentation">Documentation</option>
      </select>
      <select name="priority" value={form.priority} onChange={handleChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        <option value="critical">Critical</option>
      </select>
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <input name="dueDate" type="date" value={form.dueDate} onChange={handleChange} />
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
