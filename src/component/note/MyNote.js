import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import classses from "./MyNote.module.css";

const MyNote = () => {
  const [content, setContents] = useState("");

  return (
    <div className={classses.wrapper}>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContents}
        placeholder="지금부터 써내려 가"
      />
      <p>{parse(content)}</p>
    </div>
  );
};

export default MyNote;
