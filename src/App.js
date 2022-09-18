import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <Dictionary />
      </div>
      <footer className="App-footer mb-5">
        This project was coded by Touba Raeesi and is{" "}
        <a href="https://github.com/TwobA1987/react-dictionary-app">
          {" "}
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https://regal-capybara-0ee18b.netlify.app/">
          hosted on Netlify
        </a>
        .
      </footer>
    </div>
  );
}
