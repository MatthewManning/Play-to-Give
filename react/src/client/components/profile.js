'use strict';


import React, { Component }             from 'react';
import { Link, withRouter }             from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
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
        console.log(user);
        const isUser = this.props.match.params.username === this.props.user.getUser().username;
        return <div className="row content" style={{marginTop: 100}}>
            <div className="col-xs-4">
                <h4 style={{margin: 0}}><b>User Information</b></h4>
                { isUser ? <Link to={`/profile/${this.props.match.params.username}/edit`}>Edit Profile</Link> : undefined }
            </div>
            <div className="col-xs-10">
                <div className="row">
                    <div className="col-xs-11">
                        <div className="col-xs-3 text-right">
                            <p><b>Username:</b></p>
                            <p><b>First Name:</b></p>
                            <p><b>Last Name:</b></p>
                            <p><b>Email Address:</b></p>
                            <p><b>Main Charity:</b></p>
                        </div>
                        <div className="col-xs-6">
                            <p>{this.state.user.username}</p>
                            <p>{this.state.user.first_name}</p>
                            <p>{this.state.user.last_name}</p>
                            <p>{this.state.user.primary_email}</p>
                            <p>{this.state.user.main_charity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default withRouter(Profile);