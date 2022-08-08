import HomePage from "./page/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import MakeCheetPage from "./page/MakeCheetPage";
import CheetSheetPage from "./page/CheetSheetPage";
import MainLayout from "./layout/MainLayout";
import EditCheetSheetPage from "./page/EditCheetSheetPage";

function App() {
  return (
    <div>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<MakeCheetPage />} />
          <Route path="/search" element={<CheetSheetPage />} />
          <Route path="/revise/:cheetnum" element={<EditCheetSheetPage />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
