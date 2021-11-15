import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

const App = () => {
  // creating error state:
  const [error, setError] = useState(null);
  // creating state to save the input value to an array:
  const [notes, setNotes] = useState([]);

  // get notes from localStorage:
  useEffect(() => {
    const getNotes = JSON.parse(localStorage.getItem("notes"));

    if (getNotes) {
      setNotes(getNotes);
    }
  }, []);

  // save notes to localStorage:
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // [1]getting hold of "input" value from "CreateArea.js" and [2]adding new notes to an array of notes with previous values:
  const addNote = (input) => {
    if (input.title.length < 3 && input.content.length < 3) {
      setError("Please add either Title or Content ot save your note...");
      return false;
    }
    setNotes((prevNotes) => {
      return [input, ...prevNotes];
    });
    console.log(input);
  };

  // [1]getting hold of "onDelete" prop and receiving "id" with it from "Note.js" [2]returning only prevNotes with index !== id:
  const deleteNote = (id) => {
    return setNotes((prevNotes) => {
      if (window.confirm("Do you want to delete your note permanently?")) {
        return prevNotes.filter((note, index) => {
          return index !== id;
        });
      }
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} error={error} />

      {
        // mapping through the array of notes and adding new note to the list:
        notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          );
        })
      }
      <Footer />
    </div>
  );
};

export default App;
