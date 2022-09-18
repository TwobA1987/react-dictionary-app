import React from "react";
import "./PhotosShow.css";
export default function PhotosShow(props) {
  if (props.data) {
    return (
      <section className="PhotosShow">
        <div className="row">
          {props.data.map(function (Photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={Photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={Photo.src.landscape}
                    className="img-fluid"
                    alt={Photo.photographer}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
