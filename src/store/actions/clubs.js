import {LOAD_CLUBS} from "./actionTypes";
import {apiCall} from "../../services/apiCall";
const loadClubs = clubs => ({
	type: LOAD_CLUBS,
	payload: clubs 
});

export const fetchClubs = (lat, long) => {
	return dispatch => {
		return apiCall("get", `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=4000&fields=photos,name,rating,price_level,opening_hours&type=night_club&key=AIzaSyBnGw4IYXgy1Rn0_04-Safo9oGqMqGETRM `)
			.then(res => dispatch(loadClubs(res.data.results)))
			.catch(e => console.log(e));
	}
}