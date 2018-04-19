'use strict';

import React, { Component }			from 'react';

class Event extends Component {
	constructor(props) {
        super(props);
        this.state = {event: {}};

		this.dateFormat = this.dateFormat.bind(this);
    }

	componentDidMount(){

		$.ajax({
			url: `/v1/events`,
			method: "get",
		})

			.then(data => {
				console.log(data.events);
				this.setState({event: data.events});
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

		let event_list = this.state.event.length > 0 ?
			this.state.event.map((e, index) => (<tr key = {index}>
					  <td style={{verticalAlign: 'middle', textAlign:'center', height:'100px'}}><img style={{maxWidth:'60%', minWidth:'30%', maxHeight:'100px'}} src={e.picture}/></td>
					  <td style={{verticalAlign: 'middle', height:'100px'}}>{e.event_name}</td>
					  <td style={{verticalAlign: 'middle', height:'100px'}}><button className="button blueberry hover-apple-core right">Learn More</button></td>
					  <td style={{verticalAlign: 'middle', height:'100px'}}><button className="button apricot hover-apple-core right">Select</button></td>
					</tr>)):
			<tr><td style={{verticalAlign: 'middle', height:'100px'}}>No event</td></tr>;

        const page_html =
				<div>
					<div className="container content padding-64">
						<img className="center padding-16" src={e.picture}/>
					</div>
					<div className="container content padding-64" style={{maxWidth:'800px'}}>
					  <h2 className="wide center">{e.event_name}></h2>
							<br />
							<br />
					  	<p className="opacity center"><i>About this event</i></p><br />
							<table style={{margin: 'auto'}} className = "table-all white text-grey">
								<tr>
									<td style={{verticalAlign: 'middle', height:'100px'}}>Location: </td>
									<td style={{verticalAlign: 'middle', height:'100px'}}>{e.location} </td>
								</tr>
								<tr>
									<td style={{verticalAlign: 'middle', height:'100px'}}>Date: </td>
									<td style={{verticalAlign: 'middle', height:'100px'}}>{e.date} </td>
								</tr>
								<tr>
									<td style={{verticalAlign: 'middle', height:'100px'}}>Time: </td>
									<td style={{verticalAlign: 'middle', height:'100px'}}>{e.time} </td>
								</tr>
							</table>
							<br />
							<br />
							<p className="center padding-16">
								{e.summary}
						  </p>
					</div>
				</div>;

		return page_html;
    };
}

export default Event;
