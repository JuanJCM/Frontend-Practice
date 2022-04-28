import React from 'react';
import PropTypes from 'prop-types';
import classes from '../BookMySeats/BookMySeats.css';

const Seats = (props) => (
  <div>
     {props.values.map(seat => {
       const isAvailable = props.availableSeats.includes(seat);
       const isBooked = props.bookedSeats.includes(seat);
       let seatClass;
       if(isAvailable){
         seatClass = classes.disabled; 
       }
       if(isBooked){
         seatClass = classes.bookedSeats;
       }
        return <div className={seatClass} onClick = {props.addSeat} key= {seat}> {seat}</div>;
     })}
  </div>
);

Seats.propTypes = {};

Seats.defaultProps = {};

export default Seats;
