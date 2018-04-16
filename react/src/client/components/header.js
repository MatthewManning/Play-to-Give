'use strict';

import React, { Component }         from 'react';
import { Link, withRouter }         from 'react-router-dom';


class Header extends Component {
	constructor(props) {
		super(props);
		this.loginClick = this.loginClick.bind(this);
		this.modalClick = this.modalClick.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.logout = this.logout.bind(this);
	}

	logout(ev) {
		ev.preventDefault();
        this.props.user.logOut(this.props.history);
	}

	onSubmit(ev) {
		ev.preventDefault();
		const data = {
			username: document.getElementById('username').value,
			password: document.getElementById('password').value
		};
		$.ajax({
			url: '/v1/session',
			method: 'post',
			data: data
		}).then(data => {
			this.props.user.logIn(this.props.history, data);
            let loginModal = document.getElementById('loginModal');
            loginModal.style.display = 'none';
		}).fail(err => {
			let errorEl = document.getElementById('errorMsg');
			errorEl.innerHTML = `Error:  ${err.responseJSON.error}`;
		})
	}

	loginClick(ev) {
        ev.preventDefault();
		let loginModal = document.getElementById('loginModal');
		loginModal.style.display = 'block';

	}

	modalClick(ev) {
		ev.preventDefault();
		let loginModal = document.getElementById('loginModal');
		loginModal.style.display = 'none';

	}

    render() {
		const img_source = "/images/d-pad_example.png";
		const user = this.props.user.getUser();
		const loginModal = <div id="loginModal" className="modal">
			<div className="modal-content animate-top card-4">
				<header id="loginModalHeader" className="container blueberry center padding-32">
					<span onClick={this.modalClick} className="button blueberry hover-red xlarge display-topright">×</span>
					<h2 className="wide"><i className="fa fa-user margin-right"></i>Login</h2>
				</header>
				<form id="loginModalForm" className="container text-dark-grey">
					<p><label htmlFor="username"><i className="fa fa-user"></i> Username</label></p>
					<input className="input border" id="username" type="text" placeholder="Enter Username"/>
					<p><label htmlFor="password"><i className="fa fa-key"></i> Password</label></p>
					<input className="input border" id="password" type="password" placeholder="Enter Password"/>
					<button onClick={this.onSubmit} className="button block blueberry hover-apple-core padding-16 section right">LOGIN <i className="fa fa-check"></i></button>
					<p className="left">Not a member? <Link to="./register" className="text-blue">Sign Up</Link></p>
				</form>
			</div>
		</div>;
		const header = user.username === '' ?
				<nav className="bar blueberry card">
					<Link to="/" className="bar-item button hover-apple-core padding-large"><img style={{height: '25px'}} src={img_source}/> PLAY TO GIVE</Link>
					<Link to="/" className="bar-item button hover-apple-core padding-large hide-small">EVENTS</Link>
					<Link to="/" className="bar-item button hover-apple-core padding-large hide-small">CHARITIES</Link>
					<Link to="/" className="bar-item button hover-apple-core padding-large hide-small">GAMES</Link>
					<Link to="/" className="bar-item button hover-apple-core padding-large hide-small">ABOUT US</Link>
					<Link to="/" className="bar-item button hover-apple-core padding-large hide-small">CONTACT</Link>
					<button className="bar-item button padding-large hover-apple-core hide-small right" onClick={this.loginClick}>login / sign up</button>
					{loginModal}
				</nav>:
				<nav className="bar blueberry card">
					<Link to="/" className="bar-item button hover-apple-core padding-large"><img style={{height: '25px'}} src={img_source}/> PLAY TO GIVE</Link>
					<Link to="/" className="bar-item button hover-apple-core padding-large hide-small">EVENTS</Link>
					<Link to="/" className="bar-item button hover-apple-core padding-large hide-small">CHARITIES</Link>
					<Link to="/" className="bar-item button hover-apple-core padding-large hide-small">GAMES</Link>
					<Link to="/" className="bar-item button hover-apple-core padding-large hide-small">ABOUT US</Link>
					<Link to="/" className="bar-item button hover-apple-core padding-large hide-small">CONTACT</Link>
					<button className="bar-item button padding-large hover-apple-core hide-small right" onClick={this.logout}>Logout</button>
					{loginModal}
				</nav>;



        return (
			<div className="top">
				{header}
			</div>
        );
    }
}

export default withRouter(Header);