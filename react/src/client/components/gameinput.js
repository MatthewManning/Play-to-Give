import React, { Component }			from 'react';
import { Link, withRouter }           from 'react-router-dom';

class GameInput extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(ev) {
        ev.preventDefault();
        const user = this.props.user.getUser();
        let data = {
            owner: user,
            score: document.getElementById('score').value
        };
        $.ajax({
            url: '/v1/game/create',
            method: 'post',
            data: data
        }).then(
            console.log('game created')
        )
    }


    render() {

        return (
            <div>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="score">Score: </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="score" type="text" placeholder="Score"/>
                        </div>
                    </div>
                    <button onClick={this.onSubmit} className="button block blueberry hover-apple-core padding-16 section right">Submit Score</button>
                </form>
            </div>
        );

    }
}