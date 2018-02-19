import React, { Component }     from 'react';
import { withRouter }           from 'react-router';

/*************************************************************************/

class Register extends Component {
    constructor(props) {
        super(props);
      //  this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const contentStyle = {
            width:'2000px',
        };
        const containerStyle = {
            width: '800px'
        };
        return (
            <div className="content" style={contentStyle}>
                <div className="container content center padding-64" style={containerStyle} id="info">
                    <h2 className="wide">Sign Up</h2>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="first_name">First Name:</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="first_name" type="text" placeholder="First Name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="last_name">Last Name:</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="last_name" type="text" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="primary_email">Email:</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="primary_email" type="email" placeholder="Email Address"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="username">Username:</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="username_register" type="text" placeholder="Username"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="password">Password:</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="password_register" type="password" placeholder="Password"/>
                            </div>
                        </div>
                        <button className="button block blueberry hover-apple-core padding-16 section right">Register <i className="fa fa-check"></i></button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);