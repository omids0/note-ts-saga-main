import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNoteItemActionRequest } from "../redux/actions/notes";
import { INoteDataReqActionType } from "../types/DTO/note";

export default function NoteForm() {
  const dispatch = useDispatch();
  const [state, setState] = React.useState<INoteDataReqActionType["req"]>({
    id: Math.random().toString(32).slice(2),
    title: "",
    description: "",
  });

  const handleSubmit = () => {
    dispatch(createNoteItemActionRequest(state));
  };

  const handleTyping = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    fieldName: string
  ) => {
    setState((prev) => ({
      ...prev,
      [fieldName]: event.target.value,
    }));
  };

  return (
    <div className="header-input-container">
      <>
        <input
          type="text"
          placeholder="Title"
          className="input-title"
          onChange={(e) => handleTyping(e, "title")}
        />
        <textarea
          placeholder="Description"
          className="input-description"
          onChange={(e) => handleTyping(e, "description")}
        />
        <button onClick={handleSubmit} className="add-new-button">
          Add New Note
        </button>
      </>
    </div>
  );
}
