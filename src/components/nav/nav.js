import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './nav.scss';
import SideNav from './side_nav'

class Nav extends Component  {
    state = {
        commonLinks: [
            {
                text: 'Home',
                to: '/',
            },
            {
              text: 'About us',
              to: '/about'
            },
            {
                text: 'Movie List',
                to: '/movie-list'
            }
        ],
        noAuthLinks: [
            {
                text: 'Sign In',
                to: '/sign-in'
            },
            {
                text: 'Sign Up',
                to: '/sign-up'
            }
        ],
        authLinks: [
            {
                text: 'Private Movie List',
                to: '/movie-list/private'
            },
            {
                text: 'Movie Quotes',
                to: '/movie-quotes'
            }
        ]
    }
    buildLink(link) {
        return (
            <li>
                <Link to={link.to}>{link.text}</Link>
            </li>
        )
    }
    handleSignOut = () => {
        console.log('sig nout button clicked')
    }
    renderLinks() {
        const {authLinks, commonLinks, noAuthLinks} = this.state;
        const auth = true;

        let links = [...commonLinks];

        if(auth) {
            links = [...links, ...authLinks].map(this.buildLink);

            links.push(
                <li className='sign-out' key='sign-out'>
                    <button onClick="this.handleSignOut" className='btn blue'>Sign Out</button>
                </li>
            )
        } else {
            links = [...links, ...noAuthLinks]
        }
        return links;
    }
    render () {
        const links = this.renderLinks();

        return (
            <Fragment>
                <nav className='blue darken-4'>
                    <Link className='brand-logo ' to='/'> Movie Quotes</Link>
                    <a href='#' data-target="side-nav" className='sidenav-trigger'>
                        <i className='material-icons'>menu</i>
                    </a>
                    <ul className='right hide-on-med-and-down'>
                        {this.renderLinks()}
                    </ul>
                </nav>
                <SideNav links={this.renderLinks()}/>
            </Fragment>

        )
    }
}

export default Nav