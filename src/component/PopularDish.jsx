import React from "react";
import "./PopularDish.css";

const PopularDish = (props) => {
    return (
        <section className="container-fluid popular-sec">
            <div className="container">
                <h2>{props.popularheadings}</h2>
                <h5>{props.populartheme}</h5>
                <div className="row">
                    {props.populardata.map((populardata, index) => (
                        <figure key={index} className="popular-div1 col-12 col-md-6 col-lg-4">
                            <img src={populardata.DishImg} alt="" />
                            <figcaption>
                                <h3>{populardata.Dishheading}</h3>
                                <p>{populardata.Dishparagraph}</p>
                                <h4>{populardata.DishPrice}</h4>
                                <nav>
                                    <a href="">{populardata.Dishbtn}</a>
                                </nav>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PopularDish;