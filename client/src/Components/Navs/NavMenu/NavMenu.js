import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './NavMenu.less';

import { MenuItem } from './index';

@connect((store) => {
    return {
        homeState: store.home
    }
})
export default class NavMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.hamburgerClickHandler = this.hamburgerClickHandler.bind(this);
        this.routeClickHandler = this.routeClickHandler.bind(this);
    };

    componentWillUnmount() {
        return this.setState({
            ...this.state,
            isOpen: false
        });
    };

    hamburgerClickHandler() {
        return this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        });
    };

    routeClickHandler() {
        return this.setState({
            ...this.state,
            isOpen: false
        });
    };

    render() {
        const homeState = this.props.homeState;

        return (
            <section className='NavMenu'>
                <div className='navBuffer' />

                <nav>
                    <div
                        className={this.state.isOpen ? 'hamburger active' : 'hamburger'}
                        onClick={this.hamburgerClickHandler}
                    >
                        <i className='material-icons'>menu</i>
                    </div>

                    <Link className='logo' to='/'>
                        <img src={homeState.navLogo} />
                    </Link>

                    <div className={this.state.isOpen ? 'menuList active' : 'menuList'}>
                        <MenuItem label='About' url='/about' icon='cake' color='red' onClick={this.routeClickHandler} />
                        <MenuItem label='Profiles' url='/profiles' icon='face' color='black' onClick={this.routeClickHandler} />
                        <MenuItem label='Projects' url='/projects' icon='security' color='brown' onClick={this.routeClickHandler} />
                        <MenuItem label='Blog' url='/blog' icon='school' color='blue' onClick={this.routeClickHandler} />
                    </div>
                </nav>
            </section>
        );
    };
};