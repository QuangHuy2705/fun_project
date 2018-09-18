import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchClubs} from "../../store/actions/clubs";
import AutoComplete from "../AutoComplete/AutoComplete";

class Search extends Component {
	render() {
		return (
			<div className="row">
				<div className="card card-body mt-4 p-4">
					<h1 className="text-center display-4">
					<i className="fas fa-glass-martini"></i> {`${" "}`}
						A Club Finder App
					</h1>
					<p className="lead text-center">
						Feeling bored? Find a place to have a good time...
					</p>
			
					<AutoComplete />
				</div>
			</div>
		)
	}
}

export default Search;