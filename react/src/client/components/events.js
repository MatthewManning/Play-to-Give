'use strict';

import React, { Component }			from 'react';
import { Link, withRouter }           from 'react-router-dom';

class Events extends Component {
	constructor(props) {
        super(props);
		this.createEvent = this.createEvent.bind(this);
		this.createCharity = this.createCharity.bind(this);
    }
		
	createEvent() {
        const data = {
			event_id :    document.getElementById('event_id').value,
			event_name:   document.getElementById('event_name').value,
			location:     document.getElementById('location').value,
			date:         document.getElementById('date').value,
			time:         document.getElementById('time').value
        };

        $.ajax({
            url: `/v1/events`,
            method: "post",
            data: data
        })
            .then(data => {
                console.log("posted");
				document.getElementById('event_id').value = "";	// empty input boxes
				document.getElementById('event_name').value = "";
				document.getElementById('location').value = "";
            })
            .fail(err => {
				console.log("post failed");
                console.log(err.error);
            });
    };
	
	createCharity() {
        const data = {
			charity_name:    document.getElementById('charity_name').value,
			picture:    	 document.getElementById('picture').value,
			summary:         document.getElementById('summary').value,
			paypal:         document.getElementById('pay-pal').value
        };

        $.ajax({
            url: `/v1/charities`,
            method: "post",
            data: data
        })
            .then(data => {
                console.log("posted");
				document.getElementById('charity_name').value = "";	// empty input boxes
				document.getElementById('picture').value = "";
				document.getElementById('summary').value = "";
				document.getElementById('pay-pal').value = "";
            })
            .fail(err => {
				console.log("post failed");
                console.log(err.error);
            });
    };
	
	render() {
		const page_html =
		<div className="content" style={{maxWidth:'2000px', marginTop:'46px'}}>
			<p id="errorMsg" className="bg-danger"/>
			<div>
				<div className="form-group">
					<label>Event ID</label>
					<input className="form-control" id="event_id" type="text"/>
				</div>
				<div className="form-group">
						<label>Event Name</label>
						<input className="form-control" id="event_name" type="text"></input>
				</div>
				<div className="form-group">
						<label>Event Location</label>
						<input className="form-control" id="location" type="text"></input>
				</div>
				<div className="form-group">
						<label>Event Date</label>
						<input className="form-control" id="date" type="date"></input>
				</div>
				<div className="form-group">
						<label>Event Time</label>
						<input className="form-control" id="time" type="time"></input>
				</div>
				<button className="btn btn-primary" onClick={this.createEvent}>Create Event</button>
			</div>
			<div>
				<div className="form-group">
						<label>Charity Name</label>
						<input className="form-control" id="charity_name" type="text"></input>
				</div>
				<div className="form-group">
						<label>Charity Picture</label>
						<input className="form-control" id="picture" type="text"></input>
				</div>
				<div className="form-group">
						<label>Charity Summary</label>
						<input className="form-control" id="summary" type="text"></input>
				</div>
				<div className="form-group">
						<label>Charity PayPal</label>
						<input className="form-control" id="pay-pal" type="text"></input>
				</div>
				<button className="btn btn-primary" onClick={this.createCharity}>Create Charity</button>
			</div>
		</div>
		return <div>{page_html}</div>
	};
}

export default withRouter(Events);