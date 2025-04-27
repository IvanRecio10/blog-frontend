import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import PostList from './PostList';
import './App.css';  // <--- Importante

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const fetchPosts = async () => {
    const res = await axios.get(API_URL);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async (post) => {
    await axios.post(API_URL, post);
    fetchPosts();
  };

  const updatePost = async (id, updatedPost) => {
    await axios.put(`${API_URL}/${id}`, updatedPost);
    setEditingPost(null);
    fetchPosts();
  };

  const deletePost = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchPosts();
  };

  return (
    <div className="App">
      <h1>DevBlog</h1>
      <PostForm
        onSubmit={editingPost ? (data) => updatePost(editingPost._id, data) : createPost}
        initialData={editingPost}
        resetEditing={() => setEditingPost(null)}
      />
      <PostList posts={posts} onEdit={setEditingPost} onDelete={deletePost} />
    </div>
  );
}

export default App;
