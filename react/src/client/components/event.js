'use strict';

import React, { Component }			from 'react';
import { withRouter }						from 'react-router-dom';

class Event extends Component {
	constructor(props) {
        super(props);
        this.state = {event: {}};

		this.dateFormat = this.dateFormat.bind(this);
    }

	componentDidMount(){
		console.log(this.props.match.params.event);
		$.ajax({
			url: `/v1/events/${this.props.match.params.event}`,
			method: "get",
		})

			.then(data => {
				console.log(data.event);
				this.setState({event: data.event});
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
				<div className="container content padding-64" style={{maxWidth:'800px'}}>
				  <h2 className="wide center">{this.state.event.event_name}</h2>
						<br />
						<br />
				  	<p className="opacity center"><i>About this event</i></p><br />
						<table style={{margin: 'auto'}} className = "table-all white text-grey">
							<tbody>
								<tr>
									<td style={{verticalAlign: 'middle', height:'100px'}}>Location: </td>
									<td style={{verticalAlign: 'middle', height:'100px'}}>{this.state.event.location} </td>
								</tr>
								<tr>
									<td style={{verticalAlign: 'middle', height:'100px'}}>Date: </td>
									<td style={{verticalAlign: 'middle', height:'100px'}}>{this.state.event.date} </td>
								</tr>
								<tr>
									<td style={{verticalAlign: 'middle', height:'100px'}}>Time: </td>
									<td style={{verticalAlign: 'middle', height:'100px'}}>{this.state.event.time} </td>
								</tr>
							</tbody>
						</table>
						<br />
						<br />
						<p className="center padding-16">
							{this.state.event.summary}
					  </p>
				</div>
			</div>;

		return page_html;
    };
}

export default withRouter(Event);
