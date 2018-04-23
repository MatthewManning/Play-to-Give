'use strict';

import React, { Component }			from 'react';
import { withRouter }						from 'react-router-dom';

class Charity extends Component {
	constructor(props) {
        super(props);
        this.state = {charity: {}};

		this.dateFormat = this.dateFormat.bind(this);
    }

	componentDidMount(){
		console.log(this.props.match.params.charity);
		$.ajax({
			url: `/v1/charities/${this.props.match.params.charity}`,
			method: "get",
		})

			.then(data => {
				console.log(data.charity);
				this.setState({charity: data.charity});
			})
			.fail(err => {
				console.log(err.error);
			});
	}

	dateFormat(d){
		return ["January", "February", "March", "April", "May", "June",
		 "July", "August", "September", "October", "November", "December"][d.getMonth()] +
		 ' ' + d.getDate() + ' ' + d.getFullYear();
	}

	render() {

    const page_html =
			<div>
				<div className="center container content">
					<img className="center padding-6432" style={{width:'20vw', margin:'auto'}} src={this.state.charity.picture}/>
				</div>
				<div className="container content" style={{maxWidth:'800px'}}>
				  <h2 className="center padding-16">{this.state.charity.charity_name}</h2>
				  	<p className="opacity center"><i>About this charity</i></p><br />
				  	<p className="center">
							{this.state.charity.summary}
					  </p>
				</div>
			</div>;

		return page_html;
    };
}

export default withRouter(Charity);
