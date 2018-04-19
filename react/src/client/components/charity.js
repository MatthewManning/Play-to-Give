'use strict';

import React, { Component }			from 'react';

class Charity extends Component {
	constructor(props) {
        super(props);
        this.state = {charity: {}};

		this.dateFormat = this.dateFormat.bind(this);
    }

	componentDidMount(){

		$.ajax({
			url: `/v1/charities`,
			method: "get",
		})

			.then(data => {
				console.log(data.charities);
				this.setState({charity: data.charities});
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

		let charity_list = this.state.charity.length > 0 ?
			this.state.charity.map((c, index) => (<tr key = {index}>
					  <td style={{verticalAlign: 'middle', textAlign:'center', height:'100px'}}><img style={{maxWidth:'60%', minWidth:'30%', maxHeight:'100px'}} src={c.picture}/></td>
					  <td style={{verticalAlign: 'middle', height:'100px'}}>{c.charity_name}</td>
					  <td style={{verticalAlign: 'middle', height:'100px'}}><button className="button blueberry hover-apple-core right">Learn More</button></td>
					  <td style={{verticalAlign: 'middle', height:'100px'}}><button className="button apricot hover-apple-core right">Select</button></td>
					</tr>)):
			<tr><td style={{verticalAlign: 'middle', height:'100px'}}>No chariy</td></tr>;

        const page_html =
				<div>
					<div className="container content padding-64">
						<img className="center padding-16" src={c.picture}/>
					</div>
					<div className="container content padding-64" style={{maxWidth:'800px'}}>
					  <h2 className="wide center">{c.charity_name}></h2>
							<br />
							<br />
					  	<p className="opacity center"><i>About this charity</i></p><br />
					  	<p className="center padding-16">
								{c.summary}
						  </p>
					</div>
				</div>;

		return page_html;
    };
}

export default Charity;
