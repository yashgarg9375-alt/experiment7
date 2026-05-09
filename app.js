import React, { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  // Add or Update Note
  const saveNote = (note) => {
    if (editingNote) {
      setNotes(
        notes.map((n) => (n.id === editingNote.id ? note : n))
      );
      setEditingNote(null);
    } else {
      setNotes([...notes, { ...note, id: Date.now() }]);
    }
  };

  // Delete Note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Edit Note
  const editNote = (note) => {
    setEditingNote(note);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>📝 Notes App</h1>

      <NoteForm saveNote={saveNote} editingNote={editingNote} />

      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        editNote={editNote}
      />
    </div>
  );
}

export default App;