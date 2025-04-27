import React from 'react';

function PostList({ posts, onEdit, onDelete }) {
  return (
    <div>
      {posts.map((post) => (
        <div className="post" key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <small>Por: {post.author} - {new Date(post.createdAt).toLocaleString()}</small>
          <div className="post-actions">
            <button onClick={() => onEdit(post)}>Editar</button>
            <button onClick={() => onDelete(post._id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
