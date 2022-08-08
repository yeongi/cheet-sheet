import React from "react";
import MyNote from "../component/note/MyNote";
import Login from "../component/user/Login";
import classes from "./HomePage.module.css";
import { useState } from "react";
import { Button } from "@mui/material";
import MyDialog from "../layout/MyDialog";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [isLoggedIn, setLogIn] = useState(false);

  //로그인 상태 리덕스로 변경 하기
  const loginHandler = (e) => {
    if (isLoggedIn) {
      setLogIn(false);
    } else {
      setLogIn(true);
    }
  };

  return (
    <div className={classes["home-wrapper"]}>
      <Button onClick={loginHandler}>Login</Button>
      <section className={classes.wrapper}>
        {!isLoggedIn && (
          <article>
            <h3>로그인</h3>
            <hr />
            <Login />
          </article>
        )}
        {isLoggedIn && (
          <>
            <article className={classes.note}>
              <h3>Taking notes</h3>
              <hr />
            </article>
            <article>
              <h3>Create Cheat Sheet</h3>
              <hr />
              <Link to="create"> 치트시트 만들기 </Link>
            </article>
            <article>
              <div>
                <h3>Search Cheat Sheet</h3>
                <hr />
                <Link to="search">치트시트 검색하기</Link>
              </div>
              <div>
                <h3>Reactly add Cheet Sheet</h3>
                <hr />
                <p>최근 추가된 리스트 목록</p>
              </div>
            </article>
            <article>
              <h3>Suggestion to modify</h3>
              <hr />
              <span>
                번호 제목 작성자 <Link to={`revise/${3}`}>수정하러 가기</Link>
              </span>
            </article>
          </>
        )}
      </section>
    </div>
  );
};

export default HomePage;
