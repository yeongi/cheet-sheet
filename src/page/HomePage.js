import React from "react";
import MyNote from "../component/note/MyNote";
import Login from "../component/user/Login";
import classes from "./HomePage.module.css";
import { useState } from "react";
import { Button } from "@mui/material";
import MyDialog from "../layout/MyDialog";
import { Link } from "react-router-dom";
import ReviseCheetSheet from "../component/cheetsheet/ReviseCheetSheet";
import RecentCheetSheetList from "../component/cheetsheet/RecentCheetSheetList";
import MyNoteDialog from "../component/note/MyNoteDialog";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const HomePage = () => {
  //로그인 상태 가져오기
  const { isLogin } = useSelector((state) => state);
  const dispatch = useDispatch();

  //로그인 상태 리덕스로 변경 하기
  const loginHandler = (e) => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div className={classes["home-wrapper"]}>
      <Button onClick={loginHandler}>Login</Button>
      <section className={classes.wrapper}>
        {!isLogin && (
          <article>
            <h3>로그인</h3>
            <hr />
            <Login />
          </article>
        )}
        {isLogin && (
          <>
            <article className={classes.note}>
              <h3>Taking notes</h3>
              <hr />
              <MyNoteDialog />
            </article>
            <article>
              <h3>Create Cheat Sheet</h3>
              <hr />
              <Link to="create"> 치트시트 만들기 </Link>
              <span>어케 만들어야 하노</span>
            </article>
            <article>
              <div>
                <h3>Search Cheat Sheet</h3>
                <hr />
                <Link to="search">치트시트 검색하기</Link>
              </div>
              <RecentCheetSheetList />
            </article>
            <article>
              <ReviseCheetSheet />
            </article>
          </>
        )}
      </section>
    </div>
  );
};

export default HomePage;
