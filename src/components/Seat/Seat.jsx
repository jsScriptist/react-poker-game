import React from "react";
import style from "./style.module.css";
import Card from './../Card/Card';

const Seat = (props) => {
  const { seatId = 12345, seatName = 'gamer12345' } = props;
  const gamersCards = [
    { rank: 3, suit: "♣", color: "#006400" },
    { rank: 4, suit: "♠", color: "#696969" },
  ];
  return (
    <div className={style.seat}>
      <div className="seat-id">{seatId}</div>
      <div className="seat-name">{seatName}</div>
        <div className={style.seatCards}>
        {gamersCards.map((card, index) => {
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
    </div>
  );
};

export default Seat;
