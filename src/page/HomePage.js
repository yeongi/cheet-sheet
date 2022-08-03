import React from "react";
import MyNote from "../component/note/MyNote";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes["home-wrapper"]}>
      <section className={classes.wrapper}>
        <article>치트시트 생성</article>
        <article className={classes.note}>
          <h3>게시글 작성</h3>
          <hr />
          <MyNote />
        </article>
        <article>치트시트 보기</article>
        <article>알림 설정</article>
      </section>
    </div>
  );
};

export default HomePage;
