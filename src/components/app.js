import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min'
import {Route} from 'react-router-dom';
import Home from './home'
import React from 'react';
import MovieList from './movie_list'
import Nav from './nav'
import About from './about'
import SignIn from './sign_in';
import SignUp from './sign_up';
import MovieQuote from './movie_qoute'

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route exact path="/" component={Home}/>
            <Route exact path='/movie-list' component={MovieList}/>
            <Route path='/movie-list/:type' component={MovieList}/>
            <Route path='/about' component={About}/>
            <Route path='/sign-in' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/movie-quotes' component={MovieQuote}/>
        </div>
    </div>
);

export default App;
