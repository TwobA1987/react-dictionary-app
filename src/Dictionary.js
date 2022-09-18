import React, { useState } from "react";
import axios from "axios";
import ResultShow from "./ResultShow";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState(null);
  let [Results, setResults] = useState(null);
  function HandleKeyWordChange(event) {
    event.preventDefault();
    setKeyWord(event.target.value);
  }
  function HandleResponse(response) {
    setResults(response.data[0]);
  }
  function Search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(HandleResponse);
  }
  return (
    <div className="Dictionary">
      <section>
        <h2>Dictionary</h2>
        <form onSubmit={Search}>
          <input
            type="search"
            placeholder="Search for a word and press enter"
            onChange={HandleKeyWordChange}
          />
        </form>
      </section>
      <ResultShow data={Results} />
    </div>
  );
}
