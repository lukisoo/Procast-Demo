import React from "react";
import SetOfNotesImg from "../images/setOfNotes.svg";

const SetOfNotes = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <div><h2>Note Collections</h2></div>
      <img
        src={SetOfNotesImg}
        alt="Set of notes"
        style={{ width: "93%", padding: "1% 5% 0 0" }}
      />
    </div>
  );
};

export default SetOfNotes;
