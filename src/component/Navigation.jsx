import React from "react";
import "./Navigation.css"


const Navigation = (props) => {
    return (
        <section className="container">
            <div className="row d-lg-none nav-mobile">
                <div className="col-6">
                    <img src={props.logo} alt="logo" />
                </div>
                <div className="col-6">
                    <i className={props.navIcon}></i>
                </div>
            </div>

            <div className="d-none d-lg-block">
                <div className="row nav-desktop">
                    <div className="col-lg-3">
                        <img src={props.logo} alt="logo" />
                    </div>
                    <nav className="col-lg-6">
                        <ul>
                            {props.links.map((navs, index) => (
                                <li key={index}><a href="">{navs}</a></li>
                            ))}
                        </ul>
                    </nav>
                    <div className="col-lg-3 btn">
                        <a href="">{props.navBtn}</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navigation;