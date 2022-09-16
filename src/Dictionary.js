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
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function Search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(HandleResponse);
  }
  return (
    <div className="Dictionary">
      <form className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="enter a word"
          aria-label="Search"
          aria-describedby="search-addon"
          autoFocus="on"
          onChange={HandleKeyWordChange}
          onSubmit={Search}
        />
        <input type="submit" className="btn btn-info" onClick={Search} />
      </form>
      <ResultShow data={Results} />
    </div>
  );
}
