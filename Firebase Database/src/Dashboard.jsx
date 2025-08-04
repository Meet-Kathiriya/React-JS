// src/Dashboard.jsx
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc, addDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import React, { useEffect, useState, useCallback } from 'react';
import { auth, db } from './firebaseConfig';

export default function Dashboard() {
  const [userId, setUserId] = useState();
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [record, setRecord] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUserId(user.uid);
    });
  }, []);

  const fetchUser = useCallback(async () => {
    if (userId) {
      const res = await getDoc(doc(db, "Users", userId));
      if (res.exists()) setUserName(res.data().name || "User");
    }
  }, [userId]);

  useEffect(() => {
    fetchUser();
    if (userId) fetchTasks();
  }, [fetchUser, userId]);

  const fetchTasks = async () => {
    await getDocs(collection(db, "Tasks")).then((res) => {
      setRecord(res.docs.map(item => ({ docId: item.id, ...item.data() })));
    });
  };

  const handleAddTask = async () => {
    if (!task.trim() || !priority) {
      alert("Please enter a task and select priority");
      return;
    }
    
    await addDoc(collection(db, "Tasks"), { task, priority, userId });
    setRecord([...record, { task, priority, userId }]);
    setTask("");
    setPriority("");
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await deleteDoc(doc(db, "Tasks", id));
      fetchTasks();
    }
  };

  const handleEdit = (id) => {
    const singleData = record.find((item) => item.docId === id);
    if (singleData) {
      setTask(singleData.task);
      setPriority(singleData.priority);
      handleDelete(id);
    }
  };

  const handleLogout = async () => {
    await auth.signOut();
    window.location.reload();
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800 border-red-300";
      case "Medium": return "bg-amber-100 text-amber-800 border-amber-300";
      case "Low": return "bg-emerald-100 text-emerald-800 border-emerald-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">

      {/*header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold">Task Manager</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {userName && (
              <div className="hidden sm:flex items-center space-x-2">
                <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="font-bold">{userName.charAt(0)}</span>
                </div>
                <span className="font-medium">Hi, {userName}</span>
              </div>
            )}
            <button 
              onClick={handleLogout}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-md"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">

        {/* card */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-white/30 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-5">Add New Task</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-3">
              <input
                type="text"
                placeholder='Enter task name...'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div className="md:col-span-1">
              <select 
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="" hidden>Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            
            <div className="md:col-span-1">
              <button 
                onClick={handleAddTask}
                className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>

         {/* Tasks Display Show  */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-white/30 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Your Tasks</h2>
            <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full font-medium">
              {record.length} tasks
            </span>
          </div>

          {record.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-300 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-700">No tasks found</h3>
              <p className="text-gray-500 mt-2">Add your first task to get started!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {record.map((e, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all bg-gradient-to-br from-white to-indigo-50">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-gray-800 text-lg truncate">{e.task}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full border ${getPriorityStyle(e.priority)}`}>
                      {e.priority}
                    </span>
                  </div>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-xs text-gray-500 font-medium">User ID: {e.userId.slice(0, 8)}...</span>
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => handleEdit(e.docId)}
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-bold flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(e.docId)}
                        className="text-red-600 hover:text-red-800 text-sm font-bold flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* fotter */}
      <footer className="mt-12 py-6 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Task Manager. All rights reserved.</p>
      </footer>
    </div>
  );
}