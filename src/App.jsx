import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import Header from './components/Layout/Header';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Stats';
import TaskList from './components/Tasks/TaskList';
import TaskModal from './components/Tasks/TaskModal';
import WebsiteScanner from './components/Scanner/WebsiteScanner';
import { authService } from './services/auth';
import { taskService } from './services/api';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authMode, setAuthMode] = useState('login');
  const [tasks, setTasks] = useState([]);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showScanModal, setShowScanModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const user = authService.getCurrentUser();
      if (user) {
        setCurrentUser(user);
        await loadTasks();
      }
      setLoading(false);
    };
    initAuth();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await taskService.getTasks();
      setTasks(data);
    } catch (error) {
      console.error('Failed to load tasks:', error);
    }
  };

  const handleLogin = async (user) => {
    setCurrentUser(user);
    await loadTasks();
  };

  const handleLogout = () => {
    authService.logout();
    setCurrentUser(null);
    setTasks([]);
  };

  const handleTaskCreated = async (task) => {
    try {
      const newTask = await taskService.createTask(task);
      setTasks([newTask, ...tasks]);
      setShowTaskModal(false);
      setEditingTask(null);
    } catch (error) {
      console.error('Failed to create task:', error);
      alert('Failed to create task. Please try again.');
    }
  };

  const handleTaskUpdated = async (task) => {
    try {
      const updatedTask = await taskService.updateTask(task.id, task);
      setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
      setShowTaskModal(false);
      setEditingTask(null);
    } catch (error) {
      console.error('Failed to update task:', error);
      alert('Failed to update task. Please try again.');
    }
  };

  const handleTaskDeleted = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await taskService.deleteTask(taskId);
        setTasks(tasks.filter(t => t.id !== taskId));
      } catch (error) {
        console.error('Failed to delete task:', error);
        alert('Failed to delete task. Please try again.');
      }
    }
  };

  const handleTaskStatusToggle = async (taskId) => {
    try {
      const task = tasks.find(t => t.id === taskId);
      const newStatus = task.status === 'completed' ? 'open' : 'completed';
      const updatedTask = await taskService.updateTask(taskId, { status: newStatus });
      setTasks(tasks.map(t => t.id === taskId ? updatedTask : t));
    } catch (error) {
      console.error('Failed to toggle task status:', error);
    }
  };

  const openTaskModal = (task = null) => {
    setEditingTask(task);
    setShowTaskModal(true);
  };

  const closeTaskModal = () => {
    setShowTaskModal(false);
    setEditingTask(null);
  };

  const handleScanResult = (bug) => {
    setEditingTask({
      title: bug.title,
      description: `${bug.description}\n\n${bug.recommendation ? 'Recommendation: ' + bug.recommendation : ''}`,
      category: 'bug',
      priority: bug.severity === 'critical' ? 'critical' : bug.severity === 'high' ? 'high' : bug.severity === 'medium' ? 'medium' : 'low',
      status: 'open',
      dueDate: ''
    });
    setShowScanModal(false);
    setShowTaskModal(true);
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || task.category === filterCategory;
    const matchesPriority = filterPriority === 'all' || task.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesCategory && matchesPriority;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Bug Tracker</h1>
            <p className="text-gray-600">Task Management System</p>
          </div>
          
          <div className="flex mb-6 border-b">
            <button
              onClick={() => setAuthMode('login')}
              className={`flex-1 py-2 ${authMode === 'login' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
            >
              Login
            </button>
            <button
              onClick={() => setAuthMode('register')}
              className={`flex-1 py-2 ${authMode === 'register' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
            >
              Register
            </button>
          </div>
          
          {authMode === 'login' ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Register onRegister={handleLogin} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={currentUser} onLogout={handleLogout} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Dashboard tasks={tasks} />
        
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
            >
              <span>Filters</span>
            </button>
            <button
              onClick={() => setShowScanModal(true)}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              <Globe className="w-5 h-5" />
              <span>Scan Website</span>
            </button>
            <button
              onClick={() => openTaskModal()}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <span>New Task</span>
            </button>
          </div>
          
          {showFilters && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 pt-4 border-t">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                <option value="bug">Bug</option>
                <option value="feature">Feature</option>
                <option value="enhancement">Enhancement</option>
                <option value="documentation">Documentation</option>
              </select>
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>
          )}
        </div>

        <TaskList
          tasks={filteredTasks}
          onEdit={openTaskModal}
          onDelete={handleTaskDeleted}
          onToggleStatus={handleTaskStatusToggle}
        />
      </main>

      {showTaskModal && (
        <TaskModal
          task={editingTask}
          onClose={closeTaskModal}
          onSave={editingTask?.id ? handleTaskUpdated : handleTaskCreated}
        />
      )}

      {showScanModal && (
        <WebsiteScanner
          onClose={() => setShowScanModal(false)}
          onAddTask={handleScanResult}
        />
      )}
    </div>
  );
}

export default App;