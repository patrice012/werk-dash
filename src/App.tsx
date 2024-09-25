import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./styles/index.min.css";
import Page from "./components/Page";
import DetailJob from "./components/DetailJob";
import { Route, Routes, useLocation } from "react-router-dom";
import Recommended from "./components/Recommended";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Effect to check screen size on mount
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();

  // Condition pour afficher ou cacher le sidebar
  const isDetailPage = location.pathname.startsWith("/job/");

  return (
    <div className="">
      <Navbar toggleSidebar={toggleSidebar} />
      {!isDetailPage && <Recommended />}
      <div className="app-container relative">
        {!isDetailPage && <Sidebar isSidebarOpen={isSidebarOpen} />}
        <div className="chat-container">
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/job/:id" element={<DetailJob />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
