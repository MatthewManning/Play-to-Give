'use strict';

import React, { Component }			from 'react';
import Slider					    from 'react-slick';


const Event = ({ event, index}) => {
	return <tr key={index}>
		<td style={{verticalAlign: 'middle', height:'50px'}}>{event.location}</td>
		<td style={{verticalAlign: 'middle', height:'50px'}}><button className='button apricot hover-apple-core right' style={{width:'70%'}}>{event.date}</button></td>
	</tr>
};

class Landing extends Component {
	constructor(props) {
        super(props);
        this.state = { events: {}, charities: {}, games: {}};
		
		this.dateFormat = this.dateFormat.bind(this);
    }
	
	componentDidMount(){

		$.ajax({
			url: `/v1/events`,
			method: "get",
		})

			.then(data => {
				console.log('test');
				console.log(data.events);
				this.setState({events: data.events});
			})
			.fail(err => {
				console.log(err.error);
			});
			
		/*$.ajax({
			url : `/images/slideshow/`
		})
			.then(data => {
				$(data).find("a").attr("href", function (i, val) {
					if( val.match(/\.(jpe?g|png|gif)$/) ) { 
						this.state.slides.concat("<div><img src='"+ folder + val +"'></div>");
					} 
				})
			})
			.fail(err => {
				console.log("Image load failed");
				console.log(err.error);
			});*/
	}
	
	dateFormat(d){
		return ["January", "February", "March", "April", "May", "June",
		 "July", "August", "September", "October", "November", "December"][d.getMonth()] +
		 ' ' + d.getDate() + ' ' + d.getFullYear();
	}

	render() {
		const settings = {
			speed: 5000,
			autoplay: true,
			infinite: true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
			centerMode: true,
			pauseOnHover: false
		}
		let slides_list = this.state.slides.length > 0 ?
			this.state.slides : <div>No Images</div>;
		let event_list = this.state.events.length > 0 ? 
			this.state.events.map((e, index) => (<tr>
					<td style={{verticalAlign: 'middle', height:'50px'}}>{e.location}</td>
					<td style={{verticalAlign: 'middle', height:'50px'}}><button className="button apricot hover-apple-core right" style={{width:'70%'}}>{this.dateFormat(new Date(e.date))}</button></td>
				</tr>)):
			<tr><td style={{verticalAlign: 'middle', height:'50px'}}>No events</td></tr>;
        const page_html = <div className="content" style={{maxWidth:'2000px', marginTop:'46px'}}>
			  <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
			  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
			  <Slider style={{width:'100%'}} {...settings}>
				  <div style={{textAlign:'center'}}><img style={{width:'70vw', margin:'auto'}} src="/images/slideshow/just_monika_example.jpg"/></div>
				  <div style={{textAlign:'center'}}><img style={{width:'70vw', margin:'auto'}} src="/images/slideshow/rooster_teeth_example.jpg"/></div>
				  <div style={{textAlign:'center'}}><img style={{width:'70vw', margin:'auto'}} src="/images/slideshow/trevor_project_example.jpg"/></div>
			  </Slider>
			  <div className="container content center padding-64" style={{maxWidth:'800px'}} id="events">
				<h2 className="wide">EVENTS</h2>
				<p className="opacity center"><i>Find one near you!</i></p>

				<thead style={{width:'80%', maxWidth:'600px', margin: 'auto'}} className="table-all white text-grey">
					{event_list}
				</thead>
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