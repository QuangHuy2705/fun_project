import React, {Component} from "react";
import GoogleMapReact from "google-map-react";

const Any = props => (<h4>a</h4>)

class Map extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {location} = this.props;
		console.log(location);
		if(location.lat === "") {
			return (
				<h1>no</h1>
			)
		} 
		return (
			<div style={{height: "50vh", width: "100%"}}>
				<GoogleMapReact
					bootstrapURLKeys={"AIzaSyBnGw4IYXgy1Rn0_04-Safo9oGqMqGETRM"} 
					center={location}
					defaultZoom={12}
				>
					<Any lat={this.props.location.lat}
						lng={this.props.location.lng}
					/>
				</GoogleMapReact>
			</div>
		)
	}
};

export default Map;