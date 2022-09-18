import React from "react";

export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      <div className="d-flex flex-sm-row align-content-start flex-wrap">
        {props.data.map(function (synonym, index) {
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
