import React, { useState } from "react";
import Header from "./Header";
import TakeNote from "./TakeNote";
import Notes from "./Notes";
import Footer from "./Footer";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => index !== id);
    });
  };

  return (
    <>
    <div className="main_div">

      <Header />
      <TakeNote addNote={addNote} />
      <div className="notes">
        {notes.map((note, index) => (
          <Notes
            key={index}
            id={index}
            title={note.title}
            note={note.note}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
    </>
  );
};

export default App;
