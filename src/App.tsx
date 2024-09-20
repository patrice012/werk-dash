import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./styles/index.min.css";
import Page from "./components/Page";
function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <div className="chat-container">
          <Page />
        </div>
      </div>
    </div>
  );
}

export default App;
