'use strict';


import React, { Component }             from 'react';
import { Link, withRouter }             from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
        this.playGame = this.playGame.bind(this);
    }

    playGame(ev) {
        ev.preventDefault();
        this.props.history.push('/simpledonate');
    }

    fetchUser(username) {
        $.ajax({
            url: `/v1/user/${username}`,
            method: "get"
        })
            .then(data => {
                this.setState({ user: data });
                console.log(data);
                console.log(this.state.user)
            })
            .fail(err => {
                console.log(err)
            });
    }

    componentDidMount() {
        this.fetchUser(this.props.match.params.username);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchUser(nextProps.match.params.username);
    }

    render() {
        // Is the logged in user viewing their own profile
        const user = this.props.match.params.username;
        const isUser = this.props.match.params.username === this.props.user.getUser().username;
        return <div>
          <div className="container content padding-64" style={{maxWidth:'800px'}}>
                { isUser ?
                  <h2 className="wide center">{this.state.user.username}
                    <br />
                    <br />
                    <Link className="button blueberry hover-apple-core padding-12 xlarge large-font" to={`/profile/${this.props.match.params.username}/edit`}>Edit Profile</Link>
                  </h2>
                  : <h2 className="wide center">{this.state.user.username}</h2>}

          </div>
          <table style={{margin: 'auto'}} className = "table-all white text-grey">
            <tbody>
              <tr>
                <td style={{verticalAlign: 'middle', height:'100px'}}><b>First Name:</b></td>
                <td style={{verticalAlign: 'middle', height:'100px'}}>{this.state.user.first_name}</td>
              </tr>
              <tr>
                <td style={{verticalAlign: 'middle', height:'100px'}}><b>Last Name:</b></td>
                <td style={{verticalAlign: 'middle', height:'100px'}}>{this.state.user.last_name}</td>
              </tr>
              <tr>
                <td style={{verticalAlign: 'middle', height:'100px'}}><b>Email Address:</b></td>
                <td style={{verticalAlign: 'middle', height:'100px'}}>{this.state.user.primary_email}</td>
              </tr>
              <tr>
                <td style={{verticalAlign: 'middle', height:'100px'}}><b>Charity:</b></td>
                <td style={{verticalAlign: 'middle', height:'100px'}}>{this.state.user.main_charity}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.playGame} className="button block blueberry hover-apple-core padding-16 section right large-font">Play Game </button>
        </div>
    }
}

export default withRouter(Profile);
