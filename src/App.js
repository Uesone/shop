import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
      </header>
      <main>
        <Welcome />
      </main>
      <div>
        <AllTheBooks />
      </div>

      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
