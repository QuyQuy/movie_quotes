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
import MovieQuote from './movie_qoute';
import auth from '../hoc/auth';


const App = () => (
    <div>
        <Nav/>
        <div className="container">

            <Route exact path="/" component={Home}/>
            <Route exact path='/movie-list' component={MovieList}/>
            <Route path='/movie-list/:type' component={auth(MovieList)}/>
            <Route path='/about' component={About}/>
            <Route path='/sign-in' component={auth(SignIn, './movie-quotes',true)}/>
            <Route path='/signup' component={auth(SignUp, './movie-quotes',true)}/>
            <Route path='/movie-quotes' component={auth(MovieQuote)}/>
        </div>
    </div>
);

export default App;
