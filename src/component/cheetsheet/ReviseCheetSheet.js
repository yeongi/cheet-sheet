import React from "react";
import { Link } from "react-router-dom";

const dummy_list = [
  {
    num: 1,
    title: "라면을 끓이는 법",
    author: "고기남자",
  },
  {
    num: 2,
    title: "고기를 손질하는 법",
    author: "고기남자",
  },
  {
    num: 3,
    title: "닭고기를 맛있게 먹는 법",
    author: "고기남자",
  },
];

const ReviseCheetSheet = () => {
  return (
    <div>
      <h3>Suggestion to modify</h3>
      <hr />
      {dummy_list.map((item) => {
        return (
          <span key={item.num}>
            <br />
            번호 : {item.num} 제목 : {item.title}
            <br />
            작성자: {item.author}
            <br />
            <Link to={`revise/${item.num}`}>수정하러 가기</Link>
            <br />
          </span>
        );
      })}
    </div>
  );
};

export default ReviseCheetSheet;
