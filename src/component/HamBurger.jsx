import React from "react";
import "./HamBurger.css";

const HamBurger = (props) => {
    return (
        <section className="container-fluid hamburger-sec">
            <div className="hamburger-div">
                <p>{props.hamburgerparagraph}</p>
                <h2>{props.hamburgerheading}</h2>
                <h3>{props.hamburgerprice}</h3>
                <nav>
                    <a href="">{props.hamburgerbtn}</a>
                </nav>
            </div>
        </section>
    );
}

export default HamBurger;