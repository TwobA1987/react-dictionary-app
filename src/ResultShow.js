import React from "react";
import MeaningsShow from "./MeaningsShow";
import "./ResultShow.css";
export default function ResultShow(props) {
  if (props.data) {
    return (
      <div className="ResultShow">
        <div className="word">
          <h1>{props.data.word}</h1>
          <p className="text-secondary">{props.data.phonetic}</p>
        </div>
        <div className="meanings">
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <MeaningsShow data={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
