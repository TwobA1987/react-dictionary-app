import React from "react";
export default function MeaningsShow(props) {
  return (
    <div className="MeaningsShow">
      <h4>{props.data.partOfSpeech}</h4>
      <ul>
        {props.data.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <li>{definition.definition}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
