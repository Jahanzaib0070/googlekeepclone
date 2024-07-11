import React, { useState, useEffect, useRef } from "react";
import Button from '@mui/material/Button';

const TakeNote = (props) => {
  const [details, setDetails] = useState({
    title: "",
    note: ""
  });

  const formRef = useRef(null);

  const itemEvent = (event) => {
    const { name, value } = event.target;
    setDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  const saveNote = () => {
    if (details.title.trim() && details.note.trim()) {
      props.addNote(details);
      setDetails({ title: "", note: "" });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        saveNote();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [details]);

  return (
    <div className="main_note">
      <form ref={formRef}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={itemEvent}
          value={details.title}
        />
        <textarea
          rows="4"
          column=""
          placeholder="Take a note..."
          name="note"
          onChange={itemEvent}
          value={details.note}
        />
      </form>
    </div>
  );
};

export default TakeNote;
