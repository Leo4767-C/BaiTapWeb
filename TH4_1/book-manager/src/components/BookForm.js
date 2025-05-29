import React, { useState, useEffect } from "react";

function BookForm({ onAdd, onUpdate, editingBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setYear(editingBook.year);
    } else {
      setTitle("");
      setAuthor("");
      setYear("");
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !year) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const bookData = {
      id: editingBook ? editingBook.id : Date.now(),
      title,
      author,
      year: parseInt(year, 10),
    };

    editingBook ? onUpdate(bookData) : onAdd(bookData);

    setTitle("");
    setAuthor("");
    setYear("");
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
  };

  const buttonStyle = {
    padding: "10px 16px",
    backgroundColor: "#3aafa9",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>{editingBook ? "Sửa Sách" : "Thêm Sách"}</h2>
      <div>
        <label>Tiêu đề: </label>
        <input
          style={inputStyle}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Tác giả: </label>
        <input
          style={inputStyle}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label>Năm XB: </label>
        <input
          type="number"
          style={inputStyle}
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <button type="submit" style={buttonStyle}>
        {editingBook ? "Cập nhật" : "Thêm"}
      </button>
    </form>
  );
}

export default BookForm;
