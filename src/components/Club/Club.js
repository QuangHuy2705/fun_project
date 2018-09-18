import React, {Component} from "react";
import axios from "axios";
import "./Club.css";
import {Link} from "react-router-dom";

class Club extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgURL: ""
		};
	}

	componentDidMount() {
		const {club} = this.props;
		if(club.photos) {
			axios["get"](`https://maps.googleapis.com/maps/api/place/photo?maxheight=250&maxwidth=400&photoreference=${club.photos[0].photo_reference}&key=AIzaSyBnGw4IYXgy1Rn0_04-Safo9oGqMqGETRM`)
				.then(res => {
					this.setState({imgURL: res.config.url});
				})
				.catch(e => console.log(e));	
		}
	}

	render() {
		const {club} = this.props;
		return (

			<div className="mt-4 col-md-4 col-sm-12">
				<div className="col-md-12">
					<div className="card">
						<img src={this.state.imgURL} alt="Club Image Not Found" className="card-img-top"/>
						<div className="card-body">
							<h6 className="card-title">
								{club.name}
							</h6>
							{(club.opening_hours && club.opening_hours.open_now) && (
								<p className="card-text" style={{color: "blue"}}>Open</p>
							)}
							{(club.opening_hours && !club.opening_hours.open_now) && (
								<p className="card-text" style={{color: "red"}}>
									Closed
								</p>
							)}
							<p className="card-text">
								Rating: {club.rating}/5
							</p>
							<p className="card-text">
								Price Level: {club.price_level ? club.price_level : "Unknown"}
							</p>
							<Link to={`/clubs/${club.place_id}`} className="card-link">See more details</Link>
						</div>
					</div>
				</div>
			</div>
		)	
	}
	
};

export default Club;