import {
  Box,
  Button,
  Modal,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { FC, useState } from "react";
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
  key: INoteDataResActionType["data"][0]["id"];
}

const EachNote: FC<INoteItemProps> = (props) => {
  const { id, description, title, ...rest } = props;
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeNoteItemActionRequest(props));
  };

  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(!open);
  }

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #eee",
    boxShadow: 24,
    p: 4,
  };

  const slidBox = {
    display: "flex",
    flexDirection: "column",
  }

  return (
    <div className="each-note-container" key={rest.key}>
      <div className="each-note-header">
        <button onClick={handleRemoveItem}>X</button>
        <Link href={`/edit/${id}`} passHref>
          <h3 className="each-note-title">{title}</h3>
        </Link>
      </div>

      <div className="each-note-description" onClick={handleClose}>
        {description}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Slide direction="up" in={open} mountOnEnter unmountOnExit>
            <Box sx={slidBox}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={title}
                sx={{ margin: "10px 0", fontSize: "30px" }}
              />
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                value={description}
                sx={{ marginBottom: "20px" }}
              />
              <Button variant="contained">Update</Button>
            </Box>
          </Slide>
        </Box>
      </Modal>
    </div>
  );
};

export default EachNote;
