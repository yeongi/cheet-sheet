import React from "react";
import { Link } from "react-router-dom";

const dummy_list = [
  {
    num: 1,
    title: "C++ 클래스 프로젝트 완전 정복",
    author: "이연복",
  },
  {
    num: 2,
    title: "JAVA 제네릭 프로그래밍",
    author: "고관표",
  },
];

const RecentCheetSheetList = () => {
  return (
    <div>
      <h3>Reactly add Cheet Sheet</h3>
      <hr />
      <p>최근 추가된 리스트 목록</p>
      {dummy_list.map((item) => {
        return (
          <span key={item.num}>
            제목 : {item.title}
            <br />
            작성자: {item.author}
            <br />
            <Link to={`revise/${item.num}`}>보러가기</Link>
            <br />
            <br />
          </span>
        );
      })}
    </div>
  );
};

export default RecentCheetSheetList;
