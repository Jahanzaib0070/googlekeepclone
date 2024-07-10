import React, { useState } from "react";
import Button from "@mui/material/Button";

const TakeNote = (props) => {
  const [details, setDetails] = useState({
    title: "",
    note: ""
  });

  const itemEvent = (event) => {
    const { name, value } = event.target;
    setDetails((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  };

  const itemSubmit = (e) => {
    e.preventDefault();
    props.addNote(details);
    setDetails({
      title: "",
      note: ""
    });
  };

  return (
    <>
      <div className="main_note">
        <form onSubmit={itemSubmit}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={itemEvent}
            value={details.title}
          />
          <textarea
            placeholder="Take a note..."
            name="note"
            onChange={itemEvent}
            value={details.note}
          />
          <Button variant="text" type="submit">
            Save
          </Button>
        </form>
      </div>
    </>
  );
};

export default TakeNote;
