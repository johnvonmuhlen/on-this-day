import React, { useState, useEffect } from "react";

const currYear = new Date().getFullYear();

const InfoCard = (props) => {
  const [year, setYear] = useState(props.year);
  const [link, setLink] = useState("#");

  useEffect(() => {
    if (parseInt(props.year) < 0) {
      setYear(`${props.year.substring(1)} B.C`);
      setLink(`${props.year.substring(1)}_BC`);
    } else {
      setYear(`${props.year} A.D`);
      setLink(`${props.year}_AD`);
    }
  }, []);

  return (
    <div className="cardWrapper">
      <div class="card text-center">
        <div class="card-header">
          {props.today}, {""}
          <a href={`https://en.wikipedia.org/wiki/${link}`}>{year}</a>
        </div>
        <div class="card-body">
          <h5 class="card-title">{currYear - props.year} years ago</h5>
          <p class="card-text">{props.event}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
