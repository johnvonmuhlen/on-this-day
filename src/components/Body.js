import React, { useEffect, useState } from "react";

const Body = (props) => {
  const scroll = () => {
    const dataWrapper = document.querySelector("#dataWrapper");
    dataWrapper.scrollIntoView(false);
  };

  return (
    <div className="mainWrapper">
      <div className="titleContainer">
        <p className="today">{props.today}</p>
        <h1 className="title">On This Day...</h1>
        <p>by John von Muhlen</p>
      </div>
      <div className="buttonContaier">
        <button
          onClick={scroll}
          type="button"
          className="btn btn-outline-secondary"
        >
          What Happened?
        </button>
      </div>
    </div>
  );
};

export default Body;
