import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`)
      .then(res => setFormData(res.data))
      .catch(() => { alert("Post not found!"); navigate("/homepage"); });
  }, [id]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleUpdate(e) {
    e.preventDefault();
    axios.put(`http://localhost:3000/posts/${id}`, formData)
      .then(() => { alert("✅ Post updated!"); navigate("/homepage"); });
  }

  if (!formData) return <p className="text-center mt-10">Loading post...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 rounded" />
        <textarea name="content" value={formData.content} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 rounded h-32"></textarea>
        <input type="text" name="image" value={formData.image} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 rounded" />
        <button type="submit" className="w-full bg-[#00FFFF] hover:bg-[#00cccc] text-black font-bold py-2 rounded">Update Post</button>
      </form>
    </div>
  );
}
