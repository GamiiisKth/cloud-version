import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SearchInput, { createFilter } from 'react-search-input';
import { observer, inject } from 'mobx-react';

require('./sidebarStyle.css');

@inject('searchConsultantState')
@observer
class Sidebar extends Component {
	constructor() {
		super();
	}

	handleClick(e) {
		e.preventDefault();
		e.target.parentElement.classList.toggle('open');
	}

	activeRoute(routeName) {
		return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
	}

	handleSearchInput(value) {
		this.props.searchConsultantState.searchForConsultant(value);
	}

	render() {
		const { foundedResult } = this.props.searchConsultantState;
		console.log(foundedResult);

		return (
			<div className="sidebar">
				<nav className="sidebar-nav">
					<ul className="nav">
						<li className="nav-item">
							<NavLink to={'/dashboard'} className="nav-link" activeClassName="active">
								<i className="icon-speedometer" /> Dashboard <span className="badge badge-info">NEW</span>
							</NavLink>
						</li>
						<li className="nav-title">UI Elements</li>

						{/**components**/}
						<li className={this.activeRoute('/components')}>
							<a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}>
								<i className="icon-puzzle" /> Components
							</a>
							<ul className="nav-dropdown-items">
								<li className="nav-item">
									<NavLink to={'/components/buttons'} className="nav-link" activeClassName="active">
										<i className="icon-puzzle" /> Buttons
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to={'/components/social-buttons'} className="nav-link" activeClassName="active">
										<i className="icon-puzzle" /> Social Buttons
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to={'/components/cards'} className="nav-link" activeClassName="active">
										<i className="icon-puzzle" /> Cards
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to={'/components/forms'} className="nav-link" activeClassName="active">
										<i className="icon-puzzle" /> Forms
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to={'/components/modals'} className="nav-link" activeClassName="active">
										<i className="icon-puzzle" /> Modals
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to={'/components/switches'} className="nav-link" activeClassName="active">
										<i className="icon-puzzle" /> Switches
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to={'/components/tables'} className="nav-link" activeClassName="active">
										<i className="icon-puzzle" /> Tables
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to={'/components/tabs'} className="nav-link" activeClassName="active">
										<i className="icon-puzzle" /> Tabs
									</NavLink>
								</li>
							</ul>
						</li>

						<li className="nav-item">
							<NavLink to={'/widgets'} className="nav-link" activeClassName="active">
								<i className="icon-calculator" /> Widgets <span className="badge badge-info">NEW</span>
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink to={'/charts'} className="nav-link" activeClassName="active">
								<i className="icon-pie-chart" /> Charts
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink to={'/charts'} className="nav-link" activeClassName="active">
								<i className="icon-pie-chart" /> Signed contract
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={'/boardings'} className="nav-link" activeClassName="active">
								<i className="icon-pie-chart" />Boardings
							</NavLink>
						</li>

						<li className="divider" />
						<li className="nav-title">Extras</li>

						<li className="nav-item">
							<NavLink to={'/consultant'} className="nav-link" activeClassName="active">
								<i className="fa fa-info-circle" /> Overview
							</NavLink>
						</li>

						{/**consultant**/}
						<li className="nav-item nav-dropdown">
							<a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}>
								<i className="fa fa-search" />
								<i className="icon-user" /> Consultant
							</a>

							{/**login**/}
							<ul className="nav-dropdown-items">
								<li className="nav-item">
									<SearchInput className="btn btn-primary btn-sm" onChange={this.handleSearchInput.bind(this)} />
								</li>
								<div className="progress">
									{/**TODO based on nr of result we will get from list set ht percentage of list if 4 result it means 25% if 10 it means 10%  **/}
									<div className="progress-bar" role="progressbar" id="one" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
										25%
									</div>
								</div>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Sidebar;
