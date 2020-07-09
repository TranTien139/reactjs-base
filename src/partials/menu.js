import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getLogin, getLogout } from '../redux/actions'
import { NavLink } from 'react-router-dom'

class NavBarMenu extends Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }

    render () {
        return (
            <div className="" id="main-header">
               <ul>
                   <li>
                       <NavLink to={'/'}>Trang Chủ</NavLink>
                   </li>
                   <li>
                       <NavLink to={'/demo/1'}>Trang demo 1</NavLink>
                   </li>
                   <li>
                       <NavLink to={'/demo'}>Trang demo 2</NavLink>
                   </li>
               </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.reducerUser.isLogin,
        data: state.reducerUser.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username) => {
            dispatch(getLogin(username))
        },
        onLogout: () => {
            dispatch(getLogout())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarMenu);
