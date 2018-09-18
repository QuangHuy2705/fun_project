import React, {Component} from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg bg-dark">
				<Link className="navbar-brand" to="/">Clubs</Link>
			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
			    	<i className="fas fa-bars"></i> 
			    </button>

			    <div className="collapse navbar-collapse" id="navbarToggler">
			        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
			          <li className="nav-item">
			            <a className="nav-link" href="#">Login</a>
			          </li>
			          <li className="nav-item">
			            <a className="nav-link" href="#">Logout</a>
			          </li>
			        </ul>
			    </div>
			</nav>
		)
	}
};

export default Navbar;