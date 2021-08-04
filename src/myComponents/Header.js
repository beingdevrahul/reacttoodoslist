import React from 'react'
import '../App.css';
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";



export default function Header(props) {
    return (
        <div className="nav-bar">
            <Link to="/"><h3>{props.title}</h3></Link>
            <ul id="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

            {
                props.searchBar? <div id="r-nav">
                <input type="text" placeholder="search for the website" className="r-search" />
                <button id="r-nav-btn" className='r-search'>search</button>
            </div>: ""
            }
        </div>
    )
}

//here is default values is user doesn't define
Header.defaultProps={
    title:"here is default title is user doesn't define",
    searchBar:true
}


//to see bugs you define here title as string but you give the number type
Header.propTypes = {
    title: PropTypes.string,
    // searchBar:PropTypes.bool,
    searchBar:PropTypes.bool.isRequired // it is used for compalsory value
}