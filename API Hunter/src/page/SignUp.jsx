import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import logo from '../assets/Instagram-priject.png';

export default function SignUp() {
  const [formdata, setFormdata] = useState({ name: "", username: "", email: "", password: "", profile: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "username" && /\s/.test(value)) return;
    setFormdata({ ...formdata, [name]: value });
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setFormdata({ ...formdata, profile: reader.result });
    reader.readAsDataURL(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.get(`http://localhost:3000/users?email=${formdata.email}`)
      .then(res => {
        if (res.data.length > 0) {
          Swal.fire("Oops!", "User already exists with this email!", "error");
        } else {
          axios.post("http://localhost:3000/users", { ...formdata, auth: false })
            .then(() => {
              Swal.fire("Signup Successful 🎉", "", "success");
              navigate("/");
            });
        }
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4 font-sans">
      <div className="w-full max-w-md backdrop-blur-lg bg-[#ffffff0f] border border-[#ffffff22] rounded-2xl p-8 shadow-2xl relative">
        <button onClick={() => navigate("/")} className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-[#00FFFF] transition">×</button>
        <div className="text-center mb-6">
          <img src={logo} alt="Logo" className="h-14 mx-auto" />
          <h2 className="text-3xl font-extrabold text-white mt-2 tracking-wider">SIGN UP</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={formdata.name} onChange={handleChange} placeholder="Full Name" required className="w-full px-4 py-3 bg-white/10 text-white border border-white/30 rounded-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]" />
          <input type="text" name="username" value={formdata.username} onChange={handleChange} placeholder="Username (no spaces)" pattern="^[^\s]+$" title="Username must not contain spaces" required className="w-full px-4 py-3 bg-white/10 text-white border border-white/30 rounded-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]" />
          <input type="email" name="email" value={formdata.email} onChange={handleChange} placeholder="Email" required className="w-full px-4 py-3 bg-white/10 text-white border border-white/30 rounded-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]" />
          <input type="password" name="password" value={formdata.password} onChange={handleChange} placeholder="Password" required className="w-full px-4 py-3 bg-white/10 text-white border border-white/30 rounded-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]" />
          <div className="text-white">
            <label className="block mb-1">Profile Image:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full bg-white/10 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-cyan-500 file:text-white" />
          </div>
          <button type="submit" className="w-full bg-[#00FFFF] hover:bg-[#00cccc] text-black font-bold py-2 rounded-lg shadow-md transition duration-300">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
