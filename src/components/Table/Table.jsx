import React from "react";
import style from "./style.module.css";
import Card from "./../Card/Card";

const Table = (props) => {
  const cards = [
    { rank: 3, suit: "♣", color: "#006400" },
    { rank: 4, suit: "♠", color: "#696969" },
    { rank: "K", suit: "♥", color: "red" },
    { rank: 6, suit: "♦", color: "#0000ff" },
    { rank: "Q", suit: "♠", color: "#696969" },
  ];
  return (
    <div className={style.tableField}>
      <div className={style.cardRow}>
        {cards.map((card, index) => {
          const key = Date.now() + index;

          return (
            <div className={style.cardPlace} key={key}>
              <Card
                key={key}
                rank={card.rank}
                suit={card.suit}
                color={card.color}
                isFaceUp={true}
              />
            </div>
          );
        })}
      </div>
      <div className={style.tableTitle}>{"<< REACT POKER >>"}</div>
    </div>
  );
};

export default Table;
