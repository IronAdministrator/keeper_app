import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteCard) => {
        console.log(noteCard);
        return (
          <Note
            key={noteCard.key}
            title={noteCard.title}
            content={noteCard.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
