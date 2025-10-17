import React from "react";
import "./Reservation.css";

const Reservation = (props) =>{
    return(
        <section className="container-fluid reserve-sec">
            <div className="reserve-div">
                <h3>{props.Reservationheading}</h3>
                <p>{props.Reservationparagraph}</p>
                <nav>
                    <a href="">{props.Reservationbtn}</a>
                </nav>
            </div>
        </section>
    )
}

export default Reservation;

