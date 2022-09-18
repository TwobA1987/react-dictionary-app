import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <span className="text-secondary">{props.data.text}</span>
      <div>
        <audio src={props.data.audio} controls></audio>
      </div>
    </div>
  );
}
