import React from "react";
import style from "./style.module.css";
import Table from "../Table/Table";
import Seat from "../Seat/Seat";

const Room = (props) => {
  const { gamers } = props;
  return (
    <div className={style.room}>
        <div className={style.seats}><Seat /><Seat /><Seat /></div>
      <Table />
      <div className={style.seats}><Seat /><Seat /><Seat /></div>
    </div>
  );
};

export default Room;
