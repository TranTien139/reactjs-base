import React, { Component } from 'react';
// @ts-ignore
import { connect } from 'react-redux'
import { getLogin, getLogout } from '../redux/actions'
// @ts-ignore
import { NavLink } from 'react-router-dom'

// @ts-ignore
export const Layout = ({children}) => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
				<NavLink to={'/'} className="navbar-brand">Trang Chủ</NavLink>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<NavLink to={'/demo/1'} className="nav-item nav-link">Trang demo 1</NavLink>
						<NavLink to={'/demo'} className="nav-item nav-link">Trang demo 2</NavLink>
					</div>
				</div>
				</div>
			</nav>
			<div className="container">
				{children}
			</div>
		</div>
	);
}

const mapStateToProps = (state: any) => {
	return {
		isLogin: state.reducerUser.isLogin,
		data: state.reducerUser.data
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		onLogin: (username: string, password: string) => {
			dispatch(getLogin(username, password))
		},
		onLogout: () => {
			dispatch(getLogout())
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

