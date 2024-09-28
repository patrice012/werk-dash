import "./App.css";
import HomePage from "./pages/home.page";
import JobDetailsPage from "./pages/job-details.page";
import "./styles/index.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="chat-container relative">
      <Routes>
        <Route path="/?" element={<HomePage />} />
        <Route path="/jobs/:id" element={<JobDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
