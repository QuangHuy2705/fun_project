import React from "react";
import "./Review.css";

const Review = props => {
	if(!props.review.text) {
		return(null);
	}
	return (
		<li className="list-group-item">
        	<p>
        		<img className="review-profile mr-3" src={`${props.review.profile_photo_url}`} alt=""/> 
        		{props.review.text}
        	</p> 
        	<cite title="Source Title">- {`${props.review.author_name}`}</cite>
		</li>
	)
};

export default Review;