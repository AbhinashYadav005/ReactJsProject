import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Blog from "./pages/Blog";
import Edit from "./pages/Edit";
import SinglePage from "./pages/SinglePage";
import LearningUseState from "./pages/learningUseState";
import Register from "./pages/components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SinglePage />} />
        <Route path="/learning-usestate" element={<LearningUseState />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
