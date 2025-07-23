import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';
import Navbar from '../components/Navbar';

export default function Home() {
  const [posts, setPosts] = useState([]);

  function fetchPosts() {
    axios.get("http://localhost:3000/posts").then(postRes => {
      axios.get("http://localhost:3000/users").then(userRes => {
        const allPosts = postRes.data.reverse();
        const allUsers = userRes.data;
        const updatedPosts = allPosts.map(post => {
          const user = allUsers.find(u => u.username === post.username);
          return { ...post, profile: user?.profile || "", username: user?.username || "Unknown" };
        });
        setPosts(updatedPosts);
      });
    });
  }

  useEffect(() => { fetchPosts(); }, []);

  return (
    <>
      <Navbar />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-gray-100">
        {posts.length > 0 ? (
          posts.map(post => (
            <PostCard key={post.id} post={post} onDelete={fetchPosts} onEdit={() => {}} />
          ))
        ) : (
          <p className="text-center col-span-3">No posts found.</p>
        )}
      </div>
    </>
  );
}
