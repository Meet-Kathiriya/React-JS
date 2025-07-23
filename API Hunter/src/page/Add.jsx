import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Add() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', content: '', image: '', category: '' });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser) setUser(localUser);
    else navigate('/');
  }, []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { title, content, image, category } = formData;
    if (!title || !content || !image || !category) { alert("Please fill all fields"); return; }
    const newPost = { ...formData, username: user.username, profile: user.profile };
    axios.post("http://localhost:3000/posts", newPost)
      .then(() => {
        alert("✅ Post added successfully!");
        setFormData({ title: '', content: '', image: '', category: '' });
        navigate("/homepage");
      })
      .catch(() => { alert("Something went wrong!"); });
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Post Title" className="w-full border border-gray-300 px-4 py-2 rounded" />
        <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Post Content" className="w-full border border-gray-300 px-4 py-2 rounded h-32"></textarea>
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="w-full border border-gray-300 px-4 py-2 rounded" />
        <select name="category" value={formData.category} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 rounded">
          <option value="">Select Category</option>
          <option value="nature">Nature</option>
          <option value="travel">Travel</option>
          <option value="technology">Technology</option>
          <option value="fashion">Fashion</option>
          <option value="animal">Animal</option>
          <option value="other">Other</option>
        </select>
        <button type="submit" className="bg-[#00FFFF] hover:bg-[#00cccc] text-black font-bold py-2 px-4 rounded w-full">Submit</button>
      </form>
    </div>
  );
}
