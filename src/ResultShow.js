import React from "react";
import MeaningsShow from "./MeaningsShow";
import Phonetics from "./Phonetics";
import "./ResultShow.css";
export default function ResultShow(props) {
  if (props.data) {
    return (
      <div className="ResultShow">
        <div className="word">
          <h1>{props.data.word}</h1>
          <p>
            {props.data.phonetics.map(function (Phonetic, index) {
              return (
                <div key={index}>
                  <Phonetics data={Phonetic} />
                </div>
              );
            })}
          </p>
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
