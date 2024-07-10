import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Notes = (props) => {
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.note}</p>
        <button className="btn" onClick={() => props.onDelete(props.id)}>
          <DeleteOutlineIcon />
        </button>
      </div>
    </>
  );
};

export default Notes;
