import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  let [keyWord, setKeyWord] = useState(null);
  function HandleKeyWordChange(event) {
    event.preventDefault();
    setKeyWord(event.target.value);
  }
  function HandleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord} Definition`);
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
          onSubmit={HandleSubmit}
        />
        <input type="submit" className="btn btn-info" onClick={HandleSubmit} />
      </form>
    </div>
  );
}
