import React, { useState, useEffect } from "react";

function NoteForm({ saveNote, editingNote }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editingNote) {
      setText(editingNote.text);
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    saveNote({ text });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">
        {editingNote ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default NoteForm;