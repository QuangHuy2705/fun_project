import React from "react";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";


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