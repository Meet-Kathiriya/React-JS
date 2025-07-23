import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Add from './pages/Add';
import Edit from './pages/Edit';
import MyPost from './pages/MyPost';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = JSON.parse(localStorage.getItem("auth"));
    setIsAuth(authStatus);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SignIn setIsAuth={setIsAuth} />} />
      <Route path="/signup" element={<SignUp setIsAuth={setIsAuth} />} />
      <Route path="/homepage" element={<Home />} />
      <Route path="/add-post" element={<Add />} />
      <Route path="/editpost/:id" element={<Edit />} />
      <Route path="/userprofile" element={<Profile />} />
      <Route path="/myposts" element={<MyPost />} />
    </Routes>
  );
}
