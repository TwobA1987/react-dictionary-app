import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Dictionary />
      </div>
      <footer className="App-footer mb-5">
        This project was coded by Touba Raeesi and is{" "}
        <a
          href="https://github.com/TwobA1987/react-dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://regal-capybara-0ee18b.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
        .
      </footer>
    </div>
  );
}
