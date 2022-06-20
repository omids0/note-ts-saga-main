import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getDataList } from "../redux/reducers/notes";
import EachNote from "./EachNote";

export default function NotesList() {
  const notesList = useSelector(getDataList);

  useEffect(() => {
    console.log("🚀", notesList);
  }, [notesList]);

  return (
    <div>
      {notesList && notesList.length === 0 && <h1>Notes list is empty...</h1>}
      {notesList &&
        notesList.length > 0 &&
        notesList.map(
          (note: { id: string; title: string; description: string }) => (
            <EachNote key={note.id} note={note} />
          )
        )}
    </div>
  );
}
