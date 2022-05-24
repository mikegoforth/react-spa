import ReactDOM from "react-dom/client";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <nav className="navbar sticky-top navbar-light bg-dark">
        <h1 className="navbar-brand text-light ms-3">Rick and Morty</h1>
      </nav>
      <div className="container mt-3">
        <List />
      </div>
    </div>
  );
}
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
