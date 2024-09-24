import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./styles/index.min.css";
import Page from "./components/Page";

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

  return (
    <div className="">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="app-container">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className="chat-container">
          <Page />
        </div>
      </div>
    </div>
  );
}

export default App;
