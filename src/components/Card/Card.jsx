import React from "react";
import style from "./style.module.css";

const Card = (props) => {
  const { rank, suit, color, isFaceUp } = props;
  const bgc = { backgroundColor: color };
  return (
    <div className={style.card}>
      <div className={style.cardBody} style={bgc}>
        <div className={style.cardTop}>
          <div className={style.cardRank}>{rank}</div>
          <div className={style.cardSuit}>{suit}</div>
        </div>
        <div className={style.cardMiddle}>
          <div className={style.cardSuit}>{suit}</div>
        </div>
        <div className={style.cardBottom}>
          <div className={style.cardRank}>{rank}</div>
          <div className={style.cardSuit}>{suit}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
