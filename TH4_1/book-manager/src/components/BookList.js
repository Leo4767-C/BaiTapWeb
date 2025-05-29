import React from "react";

function BookList({ books, onEdit, onDelete }) {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const thStyle = {
    backgroundColor: "#3aafa9",
    color: "white",
    padding: "12px",
    border: "1px solid #ddd",
    textAlign: "center",
  };

  const tdStyle = {
    padding: "12px",
    border: "1px solid #ddd",
    textAlign: "center",
  };

  const buttonStyle = {
    padding: "8px 12px",
    margin: "0 4px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "white",
  };

  const editBtn = {
    ...buttonStyle,
    backgroundColor: "#3aafa9",
  };

  const deleteBtn = {
    ...buttonStyle,
    backgroundColor: "#ff6b6b",
  };

  return (
    <div>
      <h2>Danh sách sách</h2>
      {books.length === 0 ? (
        <p>Không có sách nào.</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Tiêu đề</th>
              <th style={thStyle}>Tác giả</th>
              <th style={thStyle}>Năm</th>
              <th style={thStyle}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr
                key={book.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f0f0f0" : "white",
                }}
              >
                <td style={tdStyle}>{book.title}</td>
                <td style={tdStyle}>{book.author}</td>
                <td style={tdStyle}>{book.year}</td>
                <td style={tdStyle}>
                  <button style={editBtn} onClick={() => onEdit(book)}>
                    Sửa
                  </button>
                  <button style={deleteBtn} onClick={() => onDelete(book.id)}>
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookList;
