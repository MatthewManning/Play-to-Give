import React, { Component }			from 'react';
import { Link, withRouter }           from 'react-router-dom';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import Twenty48 from "./2048"

class SimpleDonate extends Component {
    constructor(props) {
        super(props);
    	this.donateClick = this.donateClick.bind(this);
		this.modalClick = this.modalClick.bind(this);

		 this.state = {games: {}};
	}

	// hide the game by default, get a list of playable games
	componentDidMount(){
		let game = document.getElementById('game');
		game.style.display = 'none';

		// watch for game completion
		window.addEventListener('score', function(e) {
			console.log(e.data);

			const data = {
				score: e.data
			};

			$.ajax({
				url: `/v1/game/create`,
				method: 'post',
				data: data
			}).then(data => {
				console.log('score updated');
			}).fail(err => {
				let errorEl = document.getElementById('errorMsg');
				errorEl.innerHTML = `Error:  ${err.responseJSON.error}`;
			})
		}, false);

		$.ajax({
			url: `/v1/games`,
			method: "get",
		})
			.then(data => {
				this.setState({games: data.games});
			})
			.fail(err => {
				console.log(err.error);
			});
	}

	donateClick(username) {

		// check that the user has paid,
		// if they have, show the game
		$.ajax({
				url: `/v1/user/timestamp/${username}`,
				method: 'get',
			}).then(data => {
				if(data.valid){
					console.log("user has paid");

					let game = document.getElementById('game');
					game.style.display = 'block';
					ReactDOM.render(<Twenty48/>, game);

					let play = document.getElementById('play');
					play.style.display = 'none';
				} else {
					let donateModal = document.getElementById('donateModal');
					donateModal.style.display = 'block';
				}
			}).fail(err => {
				let errorEl = document.getElementById('errorMsg');
				errorEl.innerHTML = `Error:  ${err.responseJSON.error}`;
			})
	}

	// hide modal
	modalClick(ev) {
		ev.preventDefault();
		let donateModal = document.getElementById('donateModal');
		donateModal.style.display = 'none';

	}

    render() {
        let env = 'sandbox';
        let currency = 'USD';
        let total = 1;

		const user = this.props.user.getUser();
        const onSuccess = (payment) => {
            console.log("The payment was successful!", payment);

			// get the time the user paid
			const data = {
				username: user.username,
				timestamp: new Date().getTime()
			};

			//set some state on user account info via api call to let them play games
			$.ajax({
				url: '/v1/user/timestamp',
				method: 'put',
				data: data
			}).then(data => {
				let donateModal = document.getElementById('donateModal');
				donateModal.style.display = 'none';
				console.log('updated user timestamp');
			}).fail(err => {
				let errorEl = document.getElementById('errorMsg');
				errorEl.innerHTML = `Error:  ${err.responseJSON.error}`;
			})
        };
        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        };
        const onError = (err) => {
            console.log("Error!", err);
        };
        const client = {
			// jacob's sandbox facilitator
			//sandbox:	'AQ-fj_iUQju9vVqDH5WQTD1ZZrS6YiwWn7KlLuq-Pnq4Lya5UvCf4_w2NQRVC34SvDJ0FBj9SBs3gBaX',

            sandbox:    'AXNyaNk-cU4QvxtUq3g-_LBO22hiFggLx8i5-k-j1QWmqfuE9AWy06ThkkPOOpqtde-XHwUPwcYWLM3A',
            production: 'YOUR-PRODUCTION-APP-ID',
        };

		let game_list = this.state.games.length > 0 ?
			this.state.games.map((g, index) => (
			<tr key = {index}>
				<td style={{verticalAlign: 'middle', height:'100px'}}><img src={g.picture} style={{maxWidth:'267px', maxHeight:'100px'}}/></td>
				<td style={{verticalAlign: 'middle', height:'100px'}}>{g.game_name}</td>
				<td style={{verticalAlign: 'middle', height:'100px'}}><Link className="button blueberry hover-apple-core right" to={`/game/${g._id}`}>Learn More</Link></td>
				<td style={{verticalAlign: 'middle', height:'100px'}}><button className="button apricot hover-apple-core right" onClick={this.donateClick.bind(this, user.username)}>Play</button></td>
			 </tr>
			)):
			<tr><td style={{verticalAlign: 'middle', height:'100px'}}>No games</td></tr>;

		// pop-up asking user to donate
		const donateModal = <div id="donateModal" className="modal">
			<div className="modal-content animate-top card-4">
				<header id="donateModalHeader" className="modal-header blueberry center padding-32">
					<span onClick={this.modalClick} className="button blueberry hover-red xlarge display-topright">×</span>
					<h2>Donate to Play!</h2>
				</header>
				<div className="modal-body">
				  <div className="container-fluid">
					<div className="row">
					  <div className="col-sm-2 col-sm-offset-5 text-center">
						<PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
					  </div>
					</div>
				  </div>
				</div>
			</div>
		</div>;

        return user.username !== '' ?
			<div className="content" style={{marginTop:'46px'}}>
				<div id="errorMsg"></div>
				<div className="container content center padding-64" style={{maxWidth:'800px'}} id="play">
					<h2 className="wide">GAMES</h2>
					<p className="opacity center"><i>Which one will you choose?</i></p><br />
					  <table style={{margin: 'auto'}} className = 'col-xs-12'>
						  <thead style={{width:'80%', maxWidth:'600px', margin: 'auto'}} className="table-all white text-grey">
						  {game_list}
						  </thead>
					  </table>
				  </div>
				{donateModal}
				<div id="game"></div>
			</div>:
			<div className="content" style={{marginTop:'100px'}}>
				<div className="alert alert-warning">You must log in to play!</div>
			</div>;
    }
}

export default withRouter(SimpleDonate);
