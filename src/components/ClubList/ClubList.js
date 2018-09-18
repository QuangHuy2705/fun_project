import React from "react";
import Club from "../Club/Club";

const ClubList = props => {
	const {clubs} = props;
	let clubList;
	if(clubs.length === 0) {
		clubList = (
			<div className="col-12 mt-3 text-center">
				<h3>No search yet</h3>
			</div>
		)
	} else {
	    clubList = clubs.map(club => {
			return (
				<Club key={club.id} club={club}/>
			)
		})	
	};
	
	return (
		<div className="row mt-3 mb-5">
			{clubList }
		</div>
	)
};

export default ClubList;