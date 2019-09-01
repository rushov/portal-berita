import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMenu,selectMenu2} from '../actions/index';

class Header extends Component {
	createMenuList(){
		return this.props.menus.map((menu, index) =>{
			var active='';
			if(menu.id==="1"){
				active='nav-link active'
			}else{
				active='nav-link';
			}
			
			return(
				<li className="nav-item" key={menu.id} >
					<Link className={active} onClick={()=>{this.props.selectMenu(menu); this.props.selectMenu2(menu);}}>{menu.title}</Link>
				</li>
			)
		})
	}
	
	render() {
		const url_logo = window.location.hostname;
		
		return (
			<Router>
				<div className="header">
					<div className="header__logo">
						<a className="navbar-brand" href={url_logo}>PZ News</a>
					</div>
					<div className="header__navigation">
						<nav className="navbar navbar-expand-lg navbar-light bg-light">
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarNav">
								<ul className="navigation__list navbar-nav">
									{this.createMenuList()}
								</ul>
							</div>
						</nav>
					</div>
				</div>				
			</Router>
		)
	}
}

function mapStateToProps(state){
	return{
		menus:state.menus,
		activeMenu:state.activeMenu
	}
}

function matchDispatchToDrops(dispatch){
	return bindActionCreators({selectMenu:selectMenu, selectMenu2:selectMenu2},dispatch)
}


export default connect(mapStateToProps,matchDispatchToDrops)(Header);