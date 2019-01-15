import React, { Component } from 'react';
import auth from '../hoc/auth'

class MovieQuote extends Component {
    render() {
        return (
            <div className='center' >

                <h1> Movie Quote</h1>
                <h5>movie quote: have you met my friend ted</h5>

            </div>
        )
    }
}
export default auth(MovieQuote);