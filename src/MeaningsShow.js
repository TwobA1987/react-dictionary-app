import React from "react";
export default function MeaningsShow(props) {
  return (
    <div className="MeaningsShow">
      <h4 className="text-secondary">{props.data.partOfSpeech}</h4>
      <ul>
        {props.data.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <li>
                {definition.definition}
                <div>
                  <em className="text-secondary">{definition.example}</em>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
      <div className="d-flex flex-sm-row align-content-start flex-wrap">
        {props.data.synonyms.map(function (synonym, index) {
          return (
            <div
              className="p-1 m-1  border border-secondary text-dark rounded"
              key={index}
            >
              {synonym}
            </div>
          );
        })}
      </div>
    </div>
  );
}
