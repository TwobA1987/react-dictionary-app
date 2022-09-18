import React, { useState } from "react";
import axios from "axios";
import ResultShow from "./ResultShow";
import PhotosShow from "./PhotosShow";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("fantastic");
  let [Results, setResults] = useState(null);
  let [Loaded, setLoaded] = useState(false);
  let [Photos, SetPhotos] = useState(null);
  function HandleKeyWordChange(event) {
    event.preventDefault();
    setKeyWord(event.target.value);
  }
  function HandleDicResponse(response) {
    setResults(response.data[0]);
  }
  function HandlePexelResponse(response) {
    SetPhotos(response.data.photos);
  }
  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(HandleDicResponse);
    let apiKey = "563492ad6f917000010000010d70e15c5b224b7dbdddf36017c9edef";
    let PexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
    let config = { Authorization: apiKey };
    axios.get(PexelsApiUrl, { headers: config }).then(HandlePexelResponse);
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
        <PhotosShow data={Photos} />
      </div>
    );
  } else {
    setLoaded(true);
    Search();
    return "loading...";
  }
}
