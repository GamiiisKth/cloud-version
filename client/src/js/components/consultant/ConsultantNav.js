import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import InfoView from '../consultant/component/info/InfoView';
import RfsView from '../consultant/component/rfs/RfsView';
import ResourcesRequestView from '../consultant/component/rr/ResourcesRequestView';
import WorkPermitView from '../consultant/component/wp/WorkPermitView';
import OnOffBoardingView from '../consultant/component/boarding/OnOffBoardingView';
import PoDetails from '../consultant/component/po/PoDetails';
import Test from '../consultant/Test';
import $ from 'jquery';

require('./tabsLayout.css');

export default class ConsultantNav extends React.Component {
	componentDidMount() {
		$('#tabs a').click(function(e) {
			if ($(this).closest('li').attr('id') == 'current') {
				//detection for current tab
				return;
			} else {
				$('#content').find("[id^='tab']").hide(); // Hide all content
				$('#tabs li').attr('id', ''); //Reset id's
				$(this).parent().attr('id', 'current'); // Activate this
				$('#' + $(this).attr('name')).fadeIn(); // Show content for the current tab
			}
		});
	}
	render() {
		const { match } = this.props;
		return (
			<div>
				<ul id="tabs">
					<li>
						<NavLink id="tab1" name="tab1" to={'/consultant/info'} activeClassName={`${match.url}/info` ? 'active' : ''}>
							<i className="fa fa-info-circle" /> Info
						</NavLink>
					</li>
					<li>
						<NavLink id="tab2" name="tab2" to={'/consultant/podetails'} activeClassName={`${match.url}/podetails` ? 'active' : ''}>
							<i className="fa fa-bar-chart" /> Po Details
						</NavLink>
					</li>
					<li>
						<NavLink
							id="tab3"
							name="tab3"
							className="nav-link"
							to={'/consultant/rfs'}
							activeClassName={`${match.url}/rfs` ? 'active' : ''}>
							<i className="fa fa-exchange" /> RFS
						</NavLink>
					</li>
					<li>
						<NavLink id="tab4" name="tab4" to={'/consultant/rr'} activeClassName={`${match.url}/rr` ? 'active' : ''}>
							<i className="fa fa-question-circle" /> RR
						</NavLink>
					</li>
					<li>
						<NavLink id="tab5" name="tab5" to={'/consultant/onoffboard'} activeClassName={`${match.url}/onoffboard` ? 'active' : ''}>
							<i className="fa fa-plane" /> ON/OFF board
						</NavLink>
					</li>
					<li>
						<NavLink id="tab6" name="tab6" to={'/consultant/workpremit'} activeClassName={`${match.url}/workpremit` ? 'active' : ''}>
							<i className="fa fa-firefox" /> Work premit
						</NavLink>
					</li>
				</ul>

				<div id="current">
					<div id="tab1">
						<Route exact path={`${match.url}/info`} component={InfoView} />
					</div>
					<div id="tab2">
						<Route exact path={`${match.url}/podetails`} component={PoDetails} />
					</div>
					<div id="tab3">
						<Route exact path={`${match.url}/rfs`} component={RfsView} />
					</div>
					<div id="tab4">
						<Route exact path={`${match.url}/rr`} component={ResourcesRequestView} />
					</div>
					<div id="tab5">
						<Route exact path={`${match.url}/onoffboard`} component={OnOffBoardingView} />
					</div>
					<div id="tab6">
						<Route exact path={`${match.url}/workpremit`} component={WorkPermitView} />
					</div>
				</div>
			</div>
		);
	}
}
