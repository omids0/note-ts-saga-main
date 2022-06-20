import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { INoteDataResActionType } from "../types/DTO/note";
import { removeNoteItemActionRequest } from "./../redux/actions/notes/index";

// export default function EachNote({ note }) {
//   const dispatch = useDispatch()
//   const removeHandler = (id: string) => {
//     dispatch(removeNoteItemActionRequest(id))
//   }
//   return (
//     <div className="each-note-container" key={note.id}>
//       <div className="each-note-header">
//         <button onClick={(note.id) => removeHandler(note.id)}>X</button>
//         <h3>{note.title}</h3>
//       </div>
//       <div className='each-note-description'>{note.description}</div>
//     </div>
//   );
// }

interface INoteItemProps {
  id: INoteDataResActionType["data"][0]["id"];
  description: INoteDataResActionType["data"][0]["description"];
  title: INoteDataResActionType["data"][0]["title"];
}

const EachNote: FC<INoteItemProps> = (props) => {
  const { id, description, title } = props;
    const dispatch = useDispatch()

    const handleRemoveItem = () => {
    dispatch(removeNoteItemActionRequest(props))
  }

  return (
    <div className="each-note-container" key={id}>
      <div className="each-note-header">
        <button onClick={handleRemoveItem}>X</button>
        <h3>{title}</h3>
      </div>
      <div className="each-note-description">{description}</div>
    </div>
  );
};

export default EachNote;
