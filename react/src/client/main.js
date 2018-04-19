"use strict";

import React, { Component } from 'react';
import { render } 			from 'react-dom';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';
import Landing				from './components/landing';
import Header               from './components/header';
import Register             from './components/register';
import Events 				from './components/events';
import GameInput            from './components/gameinput';
import HighScore            from './components/highscores';
import SimpleDonate         from './components/simpledonate';
import Profile              from './components/profile';
import Edit                 from './components/edit';
import Twenty48             from './components/2048';
import Charity              from './components/charity';
import Event 				        from './components/event';
import Game                 from './components/game';

import './app.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.user = new User(
            window.__PRELOADED_STATE__.username,
            window.__PRELOADED_STATE__.primary_email
        );
    }
    render() {
        return <BrowserRouter>
            <div>
                <Header user={this.user}/>
                <Route exact path="/" render={props => <Landing user={this.user}/>}/>
                <Route path="/register" component={Register}/>
				        <Route path="/events" component={Events}/>
                <Route path="/gameinput" component={GameInput}/>
                <Route path="/highscore" component={HighScore}/>
                <Route path="/simpledonate" render={props => <SimpleDonate user={this.user}/>}/>
                <Route exact path ="/profile/:username" render={props => <Profile user={this.user}/>}/>
                <Route path="/profile/:username/edit" render={props => <Edit user={this.user}/>}/>
                <Route path="/2048" component={Twenty48}/>
                <Route path="/charity/:charity" render={props => <Charity charity={this.charity}/>}/>
                <Route path="/event/:event" render={props => <Event event={this.event}/>}/>
                <Route path="/game/:game" render={props => <Game game={this.game}/>}/>

            </div>
        </BrowserRouter>;

    }
}

class User {
    constructor(username, primary_email) {
        if (username && primary_email) {
            this.data = {
                username: username,
                primary_email: primary_email
            };
        } else {
            this.data =  {
                username: "",
                primary_email: ""
            };
        }
    }

    loggedIn() {
        return this.data.username && this.data.primary_email;
    }

    username() {
        return this.data.username;
    }

    logIn(router, data) {
        // Store locally
        this.data = data;
        // Go to user profile
        router.push(`/profile/${data.username}`);
    }

    logOut(router) {
        // Remove user info
        this.data = {
            username: "",
            primary_email: ""
        };
        // Go to login page
        router.push('/');
    }

    getUser() {
        return this.data;
    }
}


render(<App/>, document.getElementById('mainDiv'));
