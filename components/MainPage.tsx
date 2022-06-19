import React, { useEffect, useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteData } from "../data/manualNotesData";
import {
  loadNotesAction,
  notesAddAction,
  notesAddedAction,
} from "./../redux/actions/notesAction";

export default function MainPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const id = Math.random().toString(32).slice(2)
  
  const dispatch = useDispatch();

  const getNotesState = useSelector((state: any) => state.notesReducer);

  const saveNote = () => {
    dispatch(
      notesAddAction({
        id,
        title,
        description,
      })
    );
    console.log("🚀", getNotesState);
  }

  useEffect(() => {
    dispatch(loadNotesAction({ data: noteData }));
    console.log("🚀", getNotesState);
  }, []);

  return (
    <div>
      <header className="header-container">
        <h1 className="header-title">Note App</h1>
        <p>Created by TypeScript and Redux-Saga</p>
      </header>
      <main className="header-main-content">
        <div className="header-input-container">
          <input type="text" placeholder="Title" className="input-title" onChange={(e) => setTitle(e.target.value)}/>
          <textarea placeholder="Description" className="input-description" onChange={(e) => setDescription(e.target.value)}/>
          <button onClick={saveNote} className="add-new-button">Add New Note</button>
        </div>
        <div className="header-main-dashboard">loads</div>
      </main>
    </div>
  );
}
