import React, { useEffect, useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteData } from "../data/manualNotesData";
import { RootState } from "../types/redux";
import Header from "./Header";
import NoteForm from "./NoteForm";
import NotesList from "./NotesList";

export default function MainPage() {

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
