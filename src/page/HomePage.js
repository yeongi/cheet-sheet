import React from "react";
import MyNote from "../component/note/MyNote";
import Login from "../component/user/Login";
import classes from "./HomePage.module.css";
import { useState } from "react";
import { Button } from "@mui/material";

const HomePage = () => {
  const [isLoggedIn, setLogIn] = useState(false);

  const loginHandler = (e) => {
    if (isLoggedIn) {
      setLogIn(false);
    } else {
      setLogIn(true);
    }
  };

  return (
    <div className={classes["home-wrapper"]}>
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
            <article>치트시트 생성</article>
            <article className={classes.note}>
              <h3>게시글 작성</h3>
              <hr />
              <MyNote />
            </article>

            <article>치트시트 보기</article>
            <article>알림 설정</article>
          </>
        )}
        <Button onClick={loginHandler}>로그인 했다</Button>
      </section>
    </div>
  );
};

export default HomePage;
