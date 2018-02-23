'use strict';

import React, { Component }			from 'react';

class Landing extends Component {
	constructor(props) {
        super(props);
        this.state = { slideshow: {} };
    }
	
	componentDidMount(){
		/*$.ajax({
			url: 'php/slideshow.php',
			type: "GET",
			dataType: "json",
			success: function(data) {
				console.log('Success');
				console.log(data);
				this.setState({slideshow: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.log('Error');
				console.log(err);
			}.bind(this)
		});*/
		
		$.ajax({
            url: 'php/slideshow.php',
            method: "get"
        })
            .then(data => {
                this.setState({slideshow: data});
            })
            .fail(err => {
                console.log('error');
            });
	}
	
	render() {
        const page_html = <div className="content" style={{maxWidth:'2000px', marginTop:'46px'}}>

			  <div className="container content center padding-64" style={{maxWidth:'800px'}} id="events">
				<h2 className="wide">EVENTS</h2>
				<p className="opacity center"><i>Find one near you!</i></p>
				<table style={{width:'80%', maxWidth:'600px', margin: 'auto'}} className="table-all white text-grey">

				</table>
			  </div>
				
			  <div className="blueberry" id="charities">
				<div className="container content padding-64" style={{maxWidth:'90%'}}>
				  <h2 className="wide center">CHARITIES</h2>
				  <p className="opacity center"><i>Contribute to one of these great organizations!</i></p><br />
				  <table className="table-all white text-grey">

				  </table>
				</div>
			  </div>

			  <div className="container content center padding-64" style={{maxWidth:'800px'}} id="games">
				<h2 className="wide">GAMES</h2>
				<p className="opacity center"><i>Which one will you choose?</i></p><br />
				<table className="table-all white text-grey">
					
				</table>
			  </div>

			  <div className="blueberry" id="about">
				<div className="container content padding-64" style={{maxWidth:'800px'}}>
				  <h2 className="wide center">ABOUT US</h2>
				  <p className="opacity center"><i>This is who we are.</i></p><br />
				  <p className="center padding-16">
					Play to Give is a not-for-profit whose goal is to provide players
					with a fun gaming experience that also makes a positive impact on
					the world.
					How does this work? Well, we host a variety of games for players to
					enjoy for a small fee which is put into a pot. When players sign up,
					they must pay their fee and register to support the charity of their
					choice.  Then, at the end of the day, the players who have the
					highest scores each receive a portion of the total pot to go to the
					charity that they championed.
				  </p>
				  <p className="center">
					Pretty cool, huh?
				  </p>
				</div>
			  </div>

			  <div className="container content padding-64" style={{maxWidth:'800px'}} id="contact">
				<h2 className="wide center">CONTACT</h2>
				<p className="opacity center"><i>Question? Comment? Here's how to let us know</i></p>
				<div className="row padding-32">
				  <div className="col m6 large margin-bottom">
					<i className="fa fa-map-marker" style={{width:'30px'}}></i> Nashville, TN, USA<br />
					<i className="fa fa-phone" style={{width:'30px'}}></i> Phone: +1-800-867-5309<br />
					<i className="fa fa-envelope" style={{width:'30px'}}> </i> Email: playtogive@gmail.com<br />
				  </div>
				  <div className="col m6">
					<form action="./mail.php" target="_blank">
					  <div className="row-padding" style={{margin:'0 -16px 8px -16px'}}>
						<div className="half">
						  <input className="input border" type="text" placeholder="Name" required name="Name" />
						</div>
						<div className="half">
						  <input className="input border" type="text" placeholder="Email" required name="Email" />
						</div>
					  </div>
					  <input className="input border" type="text" placeholder="Message" required name="Message" />
					  <button className="button blueberry section right" type="submit">SEND</button>
					</form>
				  </div>
				</div>
			  </div>
			  
			  <footer className="container padding-64 center opacity light-grey xlarge">
				  <i className="fa fa-facebook-official hover-opacity"></i>
				  <i className="fa fa-instagram hover-opacity"></i>
				  <i className="fa fa-snapchat hover-opacity"></i>
				  <i className="fa fa-pinterest-p hover-opacity"></i>
				  <i className="fa fa-twitter hover-opacity"></i>
				  <i className="fa fa-linkedin hover-opacity"></i>
			  </footer>
			</div>;
        
		return page_html;
    };
}

export default Landing;