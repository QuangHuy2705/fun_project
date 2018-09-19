import React from "react";

const Info = props => {
	const {name, rating, address, phoneNumber, priceLevel} = props;
	return (
		<div className="mb-3">
			<h5>{name}</h5>
			<ul className="list-group">
				<li className="list-group-item active">Rating: {rating ? rating : "Unknown"}/5</li>
				<li className="list-group-item">Address: {address ? address : "Unknown"}</li>
				<li className="list-group-item">Phone Number: <em>{phoneNumber ? phoneNumber : "Unknown"}</em></li>
				<li className="list-group-item">Price Level: {priceLevel ? priceLevel : "Unknown"}</li>
			</ul>
		</div>
	)
};

export default Info;