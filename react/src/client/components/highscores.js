import React, { Component }			from 'react';
import { Link, withRouter }           from 'react-router-dom';

class HighScore extends Component {
    constructor(props) {
        super(props);
        this.state = {highscores: {}}
    }

    componentDidMount() {
        $.ajax({
            url: '/v1/game/highscores',
            method: 'get'
        })
            .then(data => {
                console.log(data.highscores);
                this.setState({highscores: data.highscores});
            })
    }

    render() {

        let highscore_list = this.state.highscores.length > 0 ?
            this.state.highscores.map((highscore, index) => (<tr key = {index}>
                <td style={{verticalAlign: 'middle', height:'50px'}}>{highscore.score}</td>
                <td style={{verticalAlign: 'middle', height:'50px'}}>{highscore.owner}</td>
            </tr>)):
            <tr><td style={{verticalAlign: 'middle', height:'50px'}}>No highscores</td></tr>;

        return (
            <div className="container content center padding-64" style={{maxWidth:'800px'}} id="highscores">
                <h2 className="wide">Highscores</h2>
                <table style={{margin: 'auto'}} className = 'col-xs-12'>
                    <thead style={{width:'80%', maxWidth:'600px', margin: 'auto'}} className="table-all white text-grey">
                    {highscore_list}
                    </thead>
                </table>
            </div>
        )
    }
}

export default withRouter(HighScore);