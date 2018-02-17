'use strict';

import React, { Component }         from 'react';
import { Link, withRouter }         from 'react-router-dom';


class Header extends Component {
	constructor(props) {
		super(props);
		this.loginClick = this.loginClick.bind(this);
	}

	loginClick(ev) {
        ev.preventDefault();

	}
    render() {
		//const user = this.props.user.getUser();
		const img_source = "/images/d-pad_example.png";


        return (
			<div className="top">
				<nav className="bar blueberry card">
					<Link to="/" className="bar-item button hover-apple-core padding-large"><img style={{height: '25px'}} src={img_source}/> PLAY TO GIVE</Link>
					<Link to="/" className="bar-item button hover-apple-core padding-large hide-small">EVENTS</Link>
					<Link to="/" className="bar-item button hover-apple-core padding-large hide-small">CHARITIES</Link>
					<Link to="/" className="bar-item button hover-apple-core padding-large hide-small">GAMES</Link>
					<Link to="/" className="bar-item button hover-apple-core padding-large hide-small">ABOUT US</Link>
					<Link to="/" className="bar-item button hover-apple-core padding-large hide-small">CONTACT</Link>
					<button className="bar-item button padding-large hover-apple-core hide-small right" onClick={this.loginClick}>login / sign up</button>
				</nav>
			</div>
        );
    }
}

export default withRouter(Header);