import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, deleteNote, editNote }) {
  return (
    <div>
      {notes.length === 0 ? (
        <p>No notes available</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        ))
      )}
    </div>
  );
}

export default NoteList;