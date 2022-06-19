import React, { useEffect, useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteData } from "../data/manualNotesData";
import {
  loadNotesAction,
  notesAddAction,
  notesAddedAction,
} from "./../redux/actions/notesAction";
import Header from "./Header";
import NoteForm from "./NoteForm";
import NotesList from "./NotesList";

export default function MainPage() {
  const dispatch = useDispatch();

  const getNotesState = useSelector((state: any) => state.notesReducer);

  useEffect(() => {
    dispatch(loadNotesAction({ data: noteData }));
    console.log("🚀", getNotesState);
  }, []);

  return (
    <div>
      <Header />
      <main className="header-main-content">
        <NoteForm />
        <NotesList />
      </main>
    </div>
  );
}
