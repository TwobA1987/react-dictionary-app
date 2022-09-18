import React from "react";
import Synonyms from "./Synonyms";
export default function MeaningsShow(props) {
  return (
    <div className="MeaningsShow">
      <h4 className="text-secondary">{props.data.partOfSpeech}</h4>
      <ul className="list-group list-group-flush">
        {props.data.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <li className="list-group-item">
                {definition.definition}
                <div>
                  <em className="text-secondary">{definition.example}</em>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
      <Synonyms data={props.data.synonyms} />
    </div>
  );
}
