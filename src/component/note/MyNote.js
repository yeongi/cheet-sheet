import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import classes from "./MyNote.module.css";

const MyNote = () => {
  const [content, setContents] = useState("");

  return (
    <div className={classes.wrapper}>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContents}
        placeholder="지금부터 써내려 가"
        className={classes.note}
      />
      {/* <p>{parse(content)}</p> */}
    </div>
  );
};

export default MyNote;
