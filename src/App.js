import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookContainer from "./components/BookContainer";

function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
      </header>
      <main>
        <Welcome />
        <BookContainer />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
