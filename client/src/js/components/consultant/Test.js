import React, { Component } from 'react';

require('./component/css/formStyle.scss');
require('./component/css/animation.scss');
require('material-expansion-panel/dist/material-expansion-panel.min.css');

class Test extends Component {
	constructor() {
		super();

		this.handleModelChange = this.handleModelChange.bind(this);

		this.state = {
			model: ''
		};
	}

	handleModelChange(model) {
		this.setState({
			model: model
		});
	}

	render() {
		return (
			<h1 className="animatedtext text">
				<i className="material-icons">flight_land</i> OnBoarding
			</h1>
		);
	}
}
export default Test;
