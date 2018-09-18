import React, {Component} from "react";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import Pin from "../Pin/Pin";


const Map = withScriptjs(withGoogleMap((props) => {
	if(props.location.lat === "") {
		return (<h2>no</h2>)
	}
	return (
		<GoogleMap
			defaultZoom={13}
			defaultCenter={props.location}
		>
			{props.isMarkerShown && (<Marker position={props.location} />)}
		</GoogleMap>
	)
}));

export default Map;