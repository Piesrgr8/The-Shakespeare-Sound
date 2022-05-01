import React from "react";

export default function InfoText(props) {
  return (
    <>
      <div className="wrap">
        <div className="left">
          <h1>{props.title}</h1>
          <h2>
            <strong>
              <em>{props.subtitle}</em>
            </strong>
          </h2>
        </div>
        <div className="right">{props.text}</div>
      </div>
      <hr />
    </>
  );
}
