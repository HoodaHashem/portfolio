import "./App.css";
import Sidebar from "./components/firstHero/sidebar";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
