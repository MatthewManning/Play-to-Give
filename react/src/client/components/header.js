'use strict';

import React, { Component }         from 'react';
import { Link, withRouter }         from 'react-router-dom';


class Header extends Component {
	constructor(props) {
		super(props);
	}
    render() {
		const user = this.props.user.getUser();


        return (
			<div className="top">
				<nav className="bar blueberry card">

				</nav>
			</div>
        );
    }
}

export default withRouter(Header);