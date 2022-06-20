import React from "react";

export default function EachNote({ note }) {
  return (
    <div className="each-note-container">
      <div className="each-note-header">
        <button>X</button>
        <h3>{note.title}</h3>
      </div>
      <div className='each-note-description'>description</div>
    </div>
  );
}
