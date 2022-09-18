import React, { useState } from "react";
import axios from "axios";
import ResultShow from "./ResultShow";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("fantastic");
  let [Results, setResults] = useState(null);
  let [Loaded, setLoaded] = useState(false);
  function HandleKeyWordChange(event) {
    event.preventDefault();
    setKeyWord(event.target.value);
  }
  function HandleResponse(response) {
    setResults(response.data[0]);
  }
  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(HandleResponse);
  }
  function HandleSubmit(event) {
    event.preventDefault();
    Search();
  }
  if (Loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>Dictionary</h2>
          <p className="source">
            Definitions from{" "}
            <a href="https://dictionaryapi.dev/">Free Dictionary API</a>
          </p>
          <form onSubmit={HandleSubmit}>
            <input
              type="search"
              placeholder="Search for a word and press enter"
              onChange={HandleKeyWordChange}
              defaultValue="fantastic"
            />
          </form>
        </section>
        <ResultShow data={Results} />
      </div>
    );
  } else {
    setLoaded(true);
    Search();
    return "loading...";
  }
}
