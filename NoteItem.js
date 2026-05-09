import React from "react";

function NoteItem({ note, deleteNote, editNote }) {
  return (
    <div style={{ margin: "10px", border: "1px solid #ccc", padding: "10px" }}>
      <p>{note.text}</p>

      <button onClick={() => editNote(note)}>Edit</button>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
}

export default NoteItem;