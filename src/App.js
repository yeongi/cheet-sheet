import HomePage from "./page/HomePage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>프로젝트</h1>
      <h2>라우터 설정</h2>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
