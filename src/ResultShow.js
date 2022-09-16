import React from "react";
import MeaningsShow from "./MeaningsShow";
import "./ResultShow.css";
export default function ResultShow(props) {
  if (props.data) {
    return (
      <div className="ResultShow">
        <h1>{props.data.word}</h1>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <MeaningsShow data={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return "Not Found";
  }
}
