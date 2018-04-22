'use strict';

import React, { Component }			from 'react';
import { withRouter }						from 'react-router-dom';

class Game extends Component {
	constructor(props) {
        super(props);
        this.state = {game: {}};

		this.dateFormat = this.dateFormat.bind(this);
    }

	componentDidMount(){
		console.log(this.props.match.params.game);
		$.ajax({
			url: `/v1/games/${this.props.match.params.game}`,
			method: "get",
		})

			.then(data => {
				console.log(data.game);
				this.setState({game: data.game});
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
				<div className="container content padding-64">
					<img className="center padding-16" src={this.state.game.picture}/>
				</div>
				<div className="container content padding-64" style={{maxWidth:'800px'}}>
				  <h2 className="wide center">{this.state.game.game_name}</h2>
				  	<p className="opacity center"><i>About this game</i></p><br />
				  	<p className="center padding-16">
							{this.state.game.summary}
					  </p>
				</div>
			</div>;

		return page_html;
    };
}

export default withRouter(Game);
