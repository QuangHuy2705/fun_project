import React, {Component} from "react";
import Search from "../../components/Search/Search";
import {connect} from "react-redux";
import ClubList from "../../components/ClubList/ClubList";

class Main extends Component {
	render() {
		return (
			<div className="main container">
				<Search />
				<ClubList clubs={this.props.clubs} />
			</div>
		)
	}
};

function mapStateToProps(state) {
	return {
		clubs: state.clubs
	}
}

export default connect(mapStateToProps, null)(Main);