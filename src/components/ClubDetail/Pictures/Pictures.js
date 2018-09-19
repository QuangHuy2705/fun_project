import React, {Component} from "react";
import "./Pictures.css";
import {apiCall} from "../../../services/apiCall";

class Pictures extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: []
		}
	}

	componentDidUpdate(prevProps) {
	  // Typical usage (don't forget to compare props):
	  if (this.props !== prevProps) {
	    const {photos } = this.props;
	    let newState = new Array();
	    photos.forEach(photo => {
	    	apiCall("get", `https://maps.googleapis.com/maps/api/place/photo?maxheight=250&minwidth=300&photoreference=${photo.photo_reference}&key=AIzaSyBnGw4IYXgy1Rn0_04-Safo9oGqMqGETRM`)
	    		.then(res => {
	    				this.setState(prevState => ({images: [...prevState.images, res.config.url]}))
	    			}).catch(err => console.log(err))
	    });
	  }
	}

	render() {
		const {images} = this.state;
		console.log(images);
		if(this.state.images.length === 0) {
			return <div><h1>No</h1></div>
		}
		return (
			<div style={{maxHeight: "400px"}} className="row">
				<div className="col-9">
					<img style={{height: '100%'}} className="img-fluid" src={`${images[0]}`} alt=""/>
				</div>
				<div style={{height: '100%'}} className="col-3 d-flex flex-column justify-content-between">
					<div>
						<img className="img-fluid detailImage" src={`${images[1]}`} alt=""/>
					</div>
					<div>
						<img style={{margin: "2px 0 2px 0"}} className="img-fluid detailImage" src={`${images[2]}`} alt=""/>	
					</div>
					<div>
						<img className="img-fluid detailImage" src={`${images[3]}`} alt=""/>
					</div>
				</div>				
			</div>
		)
	}
};

export default Pictures;