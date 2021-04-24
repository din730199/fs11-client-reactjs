import React from 'react';
var classNames = require('classnames');

export default function Seat({seat, handleSelect, ix}) {
  return (
    <button
      className={classNames('btn seat', {
        seatSelect: seat?.select === 'select' ? true : false,
        seatBooked: seat.status === 'booked' ? true : false,
        disabled: seat.status === 'booked' ? true : false,
      })}
      disabled={seat.status === 'booked' ? true : false}
      onClick={() => handleSelect(seat, ix)}
    >
      {seat.name}
    </button>
  );
}
