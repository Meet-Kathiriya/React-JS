import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaUserCircle, FaSignInAlt, FaUserPlus, FaFileAlt } from 'react-icons/fa';

export default function Nav() {
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed z-20 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between ">
        <button onClick={() => navigate("/homepage")} className="text-3xl font-bold text-[#00FFFF]">
          Social<span className='text-[#E35784]'>Pro</span>
        </button>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <button onClick={() => navigate("/homepage")} className="hover:text-[#00FFFF] transition">All Products</button>
          <button onClick={() => navigate("/products/men")} className="hover:text-[#00FFFF] transition">Animal</button>
          <button onClick={() => navigate("/products/women")} className="hover:text-[#00FFFF] transition">Fashion</button>
          <button onClick={() => navigate("/products/electronics")} className="hover:text-[#00FFFF] transition">Technology</button>
          <button onClick={() => navigate("/products/furniture")} className="hover:text-[#00FFFF] transition">Travel</button>
          <button onClick={() => navigate("/products/gadgets")} className="hover:text-[#00FFFF] transition">Nature</button>
          <button onClick={() => navigate("/products/other")} className="hover:text-[#00FFFF] transition">Other</button>
        </div>
        <div className="flex items-center gap-4 relative">
          <button onClick={() => navigate("/cart")} className="flex items-center hover:text-[#00FFFF] transition">
            <FaShoppingCart size={20} />
            <span className="ml-1 hidden sm:inline">Cart</span>
          </button>
          <div className="relative group mt-0 cursor-pointer">
            <div className="flex items-center hover:text-[#00FFFF] transition">
              <FaUser size={20} />
              <span className="ml-1 hidden sm:inline">Account</span>
            </div>
            <div className="absolute right-0 pt-4 w-48 bg-white text-gray-800 rounded-md shadow-md z-50 hidden group-hover:block">
              <button onClick={() => navigate("/userprofile")} className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100">
                <FaUserCircle className="text-lg" />User Details
              </button>
              <button onClick={() => navigate("/myposts")} className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100">
                <FaFileAlt className="text-lg" />My Post
              </button>
              <button onClick={() => navigate("/")} className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100">
                <FaSignInAlt className="text-lg" />Sign In
              </button>
              <button onClick={() => navigate("/signup")} className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100">
                <FaUserPlus className="text-lg" />Sign Up
              </button>
            </div>
          </div>
          <button onClick={() => navigate("/add-post")} className="bg-[#00FFFF] text-black font-medium px-3 py-1 rounded-md hover:bg-[#00e0e0] transition">
            Add Post
          </button>
        </div>
      </div>
    </nav>
  );
}
