import React, { useEffect, useState } from 'react';

function PostForm({ onSubmit, initialData, resetEditing }) {
  const [form, setForm] = useState({ title: '', body: '', author: '' });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({ title: '', body: '', author: '' });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: '', body: '', author: '' });
    resetEditing();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="body"
        placeholder="Contenido"
        value={form.body}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Autor"
        value={form.author}
        onChange={handleChange}
      />
      <button type="submit">{initialData ? 'Actualizar' : 'Crear'}</button>
      {initialData && <button type="button" onClick={resetEditing}>Cancelar</button>}
    </form>
  );
}

export default PostForm;
