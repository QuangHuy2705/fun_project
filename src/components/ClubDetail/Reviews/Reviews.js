import React, {Component} from "react";
import Review from "./Review/Review";

class Reviews extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="card mt-3">
				<div className="card-header">
					<h4>Reviews</h4>
				</div>
				<div className="card-body">
					<ul className="list-group list-group-flush">
						{this.props.reviews.map(review => {
							return <Review key={review.author_url} review={review}/>
						})}
					</ul>
				</div>
			</div>
		)
	}
};

export default Reviews;