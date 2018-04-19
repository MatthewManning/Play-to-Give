'use strict';

import React, { Component }			from 'react';

class Game extends Component {
	constructor(props) {
        super(props);
        this.state = {game: {}};

		this.dateFormat = this.dateFormat.bind(this);
    }

	componentDidMount(){

		$.ajax({
			url: `/v1/games`,
			method: "get",
		})

			.then(data => {
				console.log(data.games);
				this.setState({game: data.games});
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

		let game_list = this.state.game.length > 0 ?
			this.state.game.map((g, index) => (<tr key = {index}>
					  <td style={{verticalAlign: 'middle', textAlign:'center', height:'100px'}}><img style={{maxWidth:'60%', minWidth:'30%', maxHeight:'100px'}} src={g.picture}/></td>
					  <td style={{verticalAlign: 'middle', height:'100px'}}>{g.game_name}</td>
					  <td style={{verticalAlign: 'middle', height:'100px'}}><button className="button blueberry hover-apple-core right">Learn More</button></td>
					  <td style={{verticalAlign: 'middle', height:'100px'}}><button className="button apricot hover-apple-core right">Select</button></td>
					</tr>)):
			<tr><td style={{verticalAlign: 'middle', height:'100px'}}>No game</td></tr>;

        const page_html =
				<div>
					<div className="container content padding-64">
						<img className="center padding-16" src={g.picture}/>
					</div>
					<div className="container content padding-64" style={{maxWidth:'800px'}}>
					  <h2 className="wide center">{g.game_name}></h2>
							<br />
							<br />
					  	<p className="opacity center"><i>About this game</i></p><br />
					  	<p className="center padding-16">
								{g.summary}
						  </p>
					</div>
				</div>;

		return page_html;
    };
}

export default Game;
