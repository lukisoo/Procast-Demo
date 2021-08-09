/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import * as BsIcons from "react-icons/bs/";
import * as AiIcons from "react-icons/ai/";
import { Link } from "react-router-dom";
import axios from "axios";
import SetOfNotes from "./SetOfNotes";
import ChromeDinoGame from "react-chrome-dino";
import ImagePopUp from "./ImagePopUp.js";

const Notes = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //onchange
  const onChange = (e) => {
    console.log(e);
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  //onselectchange, this is for dropdown buttons
  const onSelectChange = (e, attribute) => {
    console.log(e);
    setNote({ ...note, [attribute]: e.target.value });
  };

  //onsubmit Notes
  const submitNotes = (e) => {
    console.log("Posting notes.....");
    console.log(e);
    e.preventDefault();

    const data = {
      title: note.title,
      content: note.content,
    };

    axios
      .post("http://localhost:6969/api/notes", data)
      .then((res) => {
        setNote({
          title: "",
          content: "",
        });
        console.log("Note submitted successfully");
      })
      .catch((err) => {
        console.log(`Error submitting note${err.name}`);
      });
  };

  return (
    <div>
      <div className="noteBackground">
        <div className="note">
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Title"
            className="noteTitle"
            name="title"
            onChange={onChange}
          />
          <hr width="80%" />
          <div style={{ marginLeft: "11%", float: "left" }}>
            <h3 style={{ margin: "0" }}>
              <BsIcons.BsTypeBold />
              <BsIcons.BsTypeItalic />
              <BsIcons.BsTypeUnderline />
            </h3>
          </div>
          <div style={{ marginRight: "11%", float: "right" }}>
            <h3 style={{ margin: "1vh 0 1vh 0" }}>
              <AiIcons.AiOutlineAlignLeft />
              <AiIcons.AiOutlineAlignCenter />
              <AiIcons.AiOutlineAlignRight />
            </h3>
          </div>
          <textarea
            id="lname"
            name="lname"
            placeholder="Title"
            className="noteContent"
            name="content"
            onChange={onChange}
          />
          <button
            type="button"
            style={{
              width: "40%",
              marginLeft: "30%",
              backgroundColor: "#94C5CC",
              borderRadius: "8px",
              height: "6vh"
            }}
            onClick={submitNotes}
          >
            {" "}
            Save note
          </button><br/><br/>
          <hr style={{marginLeft: "10%", width: "80%"}}/>
          <div style={{padding: "2.5% 8% 0 10%"}}><h3>It's good to have a friend to accompany you doing work, and you can encourage each other! Meet Dino, he'll support you in your work if you support in his mission in travelling the world.</h3></div>
          <ChromeDinoGame /><br/><br/>
        </div>
      </div>
    </div>
  );
};

export default Notes;
