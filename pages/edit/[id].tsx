import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateNoteItemActionRequest } from "../../redux/actions/notes";
import { getDataList } from "../../redux/reducers/notes";

export default function editNotePage({ id }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const notesList = useSelector(getDataList);

  const note = notesList.find((item) => item.id === id);

  useEffect(() => {
    console.log(note);
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
    }
  }, []);

  function handlerUpdate() {
    console.log({ id, title, description });

    dispatch(updateNoteItemActionRequest({ id, title, description }));
    // window.location.href = "/";
  }

  return (
    <div className="edit-note-container">
      {!note ? (
        <h1>hamchin noti nist</h1>
      ) : (
        <div className="edit-form-container">
          <input
            type="text"
            placeholder="Title"
            className="edit-title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            typeof="text"
            placeholder="Description"
            className="edit-description-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="edit-button-handler" onClick={handlerUpdate}>
            Update Note
          </button>
        </div>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;

  return {
    props: {
      id,
    },
  };
};
