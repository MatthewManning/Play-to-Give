'use strict';

import React, { Component } from 'react';
import { withRouter }       from 'react-router';


class Edit extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.changeCharity = this.changeCharity.bind(this);
        this.state = { charities: {}};
    }

    componentDidMount() {
        $.ajax({
            url: "/v1/charities",
            method: 'get'
        })
            .then(
                data => {
                    this.setState({charities: data.charities})
                }
            ).fail(err => {
                console.log(err.error)
        })
    }

    onSubmit(ev) {
        ev.preventDefault();
        const first_name  = document.getElementById('first_name') !== null ?
            document.getElementById('first_name').value :
            '';
        const last_name = document.getElementById('last_name') !== null ?
            document.getElementById('last_name').value :
            '';

        const data = {
            first_name:      first_name,
            last_name:      last_name
        };

        $.ajax({
            url: "/v1/user",
            method: 'put',
            data: data
        })
            .then(() => {
                this.props.history.push(`/profile/${this.props.match.params.username}`);
            })
            .fail(err => {
                let errorEl = document.getElementById('errorMsg');
                errorEl.innerHTML = `Error: ${err.error}`;
            });
    }

    changeCharity(ev) {
        ev.preventDefault();
        let charityId = ev.target.id;
        $.ajax({
            url: "/v1/user/charity",
            method: 'put',
            data: {charityId}
        })
            .then(() => {
                this.props.history.push(`/profile/${this.props.match.params.username}`);
            }).fail(err => {
            let errorEl = document.getElementById('errorMsg');
            errorEl.innerHTML = `Error: ${err.error}`;
        })
    }


    render() {
        let charity_list = this.state.charities.length > 0 ?
            this.state.charities.map((c, index) => (<tr key = {index}>
                <td style={{verticalAlign: 'middle', textAlign:'center', height:'100px'}}><img style={{maxWidth:'60%', minWidth:'30%', maxHeight:'100px'}} src={c.picture}/></td>
                <td style={{verticalAlign: 'middle', height:'100px'}}>{c.charity_name}</td>
                <td style={{verticalAlign: 'middle', height:'100px'}}><button className="button blueberry hover-apple-core right">Learn More</button></td>
                <td style={{verticalAlign: 'middle', height:'100px'}}><button id={c._id} onClick={this.changeCharity} className="button apricot hover-apple-core right">Select</button></td>
            </tr>)):
            <tr><td style={{verticalAlign: 'middle', height:'100px'}}>No charities</td></tr>;
        const isUser = this.props.match.params.username === this.props.user.getUser().username;
        const page_html = isUser ?
            <div className="row" style={{margin: 100}}>
                <div className="col-xs-2"/>
                <div className="col-xs-8">
                    <div className="center-block">
                        <p id="errorMsg" className="bg-danger"/>
                    </div>
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
                            <div className="col-sm-offset-2 col-sm-10">
                                <button onClick={this.onSubmit} className="btn btn-default">Edit</button>
                            </div>
                        </div>
                    </form>
                    <div>
                        <h2>Change your main charity:</h2>
                        <table style={{margin: 'auto'}} className = 'col-xs-12'>
                            <thead style={{width:'60%', maxWidth:'600px', margin: 'auto'}} className="table-all white text-grey">
                            {charity_list}
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="col-xs-2"/>
            </div>:
            <div>
                <h4>You must be logged in as this user to edit this profile</h4>
            </div>;
        return <div>
            {page_html}
        </div>
    };
}

export default withRouter(Edit);