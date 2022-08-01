import React from "react";
import MyNote from "../component/note/MyNote";

const home = () => {
  return (
    <div>
      <h1>homepage</h1>
      <ul>
        <li>치트시트 생성</li>
        <li>게시글 작성</li>
        <MyNote />
        <li>치트시트 수정</li>
        <li>알림 설정</li>
      </ul>
    </div>
  );
};

export default home;
