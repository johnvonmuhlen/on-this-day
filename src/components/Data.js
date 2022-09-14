import React, { useEffect, useState } from "react";
import InfoCard from "./InfoCard";

const date = new Date();
const day = date.getDay();
const month = date.getMonth() - 1;

const Data = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.api-ninjas.com/v1/historicalevents?month=${month}&day=${day}`,
      {
        method: "GET",
        headers: { "X-Api-Key": "Fc5jLn8ODsaHw0Sn/a9pMQ==TvVWzRhLKy5EAehX" },
        contentType: "application/json",
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setCards(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <div className="dataWrapper" id="dataWrapper">
      {cards.map((card) => (
        <InfoCard today={props.today} year={card.year} event={card.event} />
      ))}
    </div>
  );
};

export default Data;
