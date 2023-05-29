import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyProjectPage from "./pages/MyProjectPage";

function App() {
  return (
    <div>   
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/myproject" element={<MyProjectPage />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
