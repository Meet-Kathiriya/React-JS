import React, { useEffect, useState } from 'react';
import { auth, db } from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import TaskManager from './TaskManager';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({});
  const [showTaskManager, setShowTaskManager] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, "Users", currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  const handleTaskManagerClick = () => {
    setShowTaskManager(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">

      {/* header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>

          <div className="flex items-center space-x-4">
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

        {/* dashboard Content */}
        {!showTaskManager ? (
          <div className="bg-white rounded-2xl shadow-md p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* User Info Card */}
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl shadow-md p-6 flex-1 border border-indigo-200">
                <h2 className="text-2xl font-bold text-indigo-800 mb-6">User Profile</h2>

                <div className="flex items-center mb-6">
                  <div className="bg-indigo-200 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-800 text-2xl font-bold">
                      {userData.name?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{userData.name || "User"}</h3>
                    <p className="text-gray-600">{user?.email || ""}</p>
                    <div className="flex items-center mt-1">
                      <div className="w-3 h-3 rounded-full mr-2 bg-green-500"></div>
                      <span className="text-sm text-gray-600">Online</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500">Age</p>
                    <p className="font-bold">{userData.age || "N/A"}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500">Account Created</p>
                    <p className="font-bold">{user?.metadata?.creationTime?.split(' ')[0] || "N/A"}</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Last Login</p>
                  <p className="font-bold">{user?.metadata?.lastSignInTime?.split(' ')[0] || "N/A"}</p>
                </div>
              </div>

              {/* card */}
              <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-md p-6 flex-1 border border-indigo-200">
                <h2 className="text-2xl font-bold text-indigo-800 mb-6">Quick Actions</h2>

                <div className="space-y-4">
                  <button
                    onClick={handleTaskManagerClick}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Task Manager
                  </button>

                  <button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-4 rounded-xl font-bold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg shadow-gray-200 hover:shadow-gray-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Profile Settings
                  </button>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-blue-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    Support Center
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <TaskManager />
        )}
      </main>

      {/* footer */}
      <footer className="mt-12 py-6 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Task Manager. All rights reserved.</p>
      </footer>
    </div>
  );
}

