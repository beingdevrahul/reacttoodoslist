import React from 'react'
import {Link} from "react-router-dom";
import '../App.css';

export const Services = () => {
    return (<>
        <section className="services">
            <h1>Our Services</h1>
            <div className="servicesContent">
                <p>Here are only one Service, which we provide yet.</p>
                <ul><li><h2><Link to="/">Todos Service</Link></h2> </li></ul>
                <p>You can Save your todos Here!!</p>
            </div>
        </section></>
    )
}
