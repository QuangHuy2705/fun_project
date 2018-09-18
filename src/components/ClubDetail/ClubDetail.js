import React, {Component} from "react";
import Map from "./Map/Map";
import Detail from "./Detail/Detail";
import {apiCall} from "../../services/apiCall";

class ClubDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: {
				lat: "",
				lng: ""
			},
			reviews: [],
			address: "",
			name: "",
			phoneNumber: "",
			rating: ""
		}
	}

	componentDidMount() {
		const {club_id} = this.props.match.params;
		apiCall("get", `https://maps.googleapis.com/maps/api/place/details/json?placeid=${club_id}&fields=geometry,name,photo,rating,formatted_phone_number,formatted_address,url,review&key=AIzaSyBnGw4IYXgy1Rn0_04-Safo9oGqMqGETRM`)
			.then(res => {
				const {formatted_address, geometry, name, rating, reviews, formatted_phone_number} = res.data.result;
				console.log(res);
				this.setState({
					location: geometry.location,
					reviews,
					address: formatted_address,
					phoneNumber: formatted_phone_number,
					rating,
					name
				})
			});
		}

	render() {
		const {location, reviews, address, name, phoneNumber, rating} = this.state; 
		return (
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-3 col-sm-12">
						<Map 
							location={location} 
							isMarkerShown
							googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBnGw4IYXgy1Rn0_04-Safo9oGqMqGETRM"
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div style={{ height: `50vh` }} />}
							mapElement={<div style={{ height: `100%` }} />}
						/>
					</div>
					<div className="col-md-9 col-sm-12">
						<Detail />
					</div>
				</div>
			</div>
		)
	}
};

export default ClubDetail;