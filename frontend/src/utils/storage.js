// src/services/storage.js

export const StorageService = {
  getTasks: (userId) => {
    const data = localStorage.getItem(`tasks:${userId}`);
    return data ? JSON.parse(data) : [];
  },

  saveTasks: (userId, tasks) => {
    localStorage.setItem(`tasks:${userId}`, JSON.stringify(tasks));
  },

  clearUserData: (userId) => {
    localStorage.removeItem(`tasks:${userId}`);
  },
};
