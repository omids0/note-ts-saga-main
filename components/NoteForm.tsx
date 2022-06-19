import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { notesAddAction } from "../redux/actions/notesAction";

export default function NoteForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const id = Math.random().toString(32).slice(2)

    const dispatch = useDispatch();

    const saveNote = () => {
        dispatch(
          notesAddAction({
            id,
            title,
            description,
          })
        );
      }
  return (
    <div className="header-input-container">
      <input
        type="text"
        placeholder="Title"
        className="input-title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        className="input-description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={saveNote} className="add-new-button">
        Add New Note
      </button>
    </div>
  );
}
