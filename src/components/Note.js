import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        // getting props and passing "id" to the "onDelete" function:
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteOutlinedIcon />
      </button>
    </div>
  );
}

export default Note;
