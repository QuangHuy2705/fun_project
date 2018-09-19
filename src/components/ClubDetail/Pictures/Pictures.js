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

	componentDidMount() {

	}

	render() {
		return (
			<div style={{maxHeight: "400px"}} className="row">
				<div className="col-9">
					<img style={{height: '100%'}} className="img-fluid" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png" alt=""/>
				</div>
				<div className="col-3">
					<div  class="row align-items-start">
						<img className="img-fluid detailImage" src="http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg" alt=""/>
					</div>
					<div  class="row align-items-start">
						<img style={{margin: "2px 0 2px 0"}} className="img-fluid detailImage" src="http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg" alt=""/>	
					</div>
					<div  class="row align-items-start">
						<img className="img-fluid detailImage" src="http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg" alt=""/>
					</div>
				</div>				
			</div>
		)
	}
};

export default Pictures;