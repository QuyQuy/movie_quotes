import 'materliaze-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min'
import {Route} from 'react-router-dom';
import Home from './home'
import React from 'react';


const App = () => (
    <div>
        <div className="container">
            <Route exact path="/" component={Home}/>
        </div>
    </div>
);

export default App;
