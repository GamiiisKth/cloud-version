import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Dropdown, DropdownMenu, DropdownItem, Progress } from 'reactstrap';

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandDanger = '#f86c6b';

// Card Chart 1
const cardChartData1 = {
	labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
	datasets: [
		{
			label: 'My First dataset',
			backgroundColor: brandPrimary,
			borderColor: 'rgba(255,255,255,.55)',
			data: [ 65, 59, 84, 84, 51, 55, 40 ]
		}
	]
};

const cardChartOpts1 = {
	maintainAspectRatio: false,
	legend: {
		display: false
	},
	scales: {
		xAxes: [
			{
				gridLines: {
					color: 'transparent',
					zeroLineColor: 'transparent'
				},
				ticks: {
					fontSize: 2,
					fontColor: 'transparent'
				}
			}
		],
		yAxes: [
			{
				display: false,
				ticks: {
					display: false,
					min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
					max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5
				}
			}
		]
	},
	elements: {
		line: {
			borderWidth: 1
		},
		point: {
			radius: 4,
			hitRadius: 10,
			hoverRadius: 4
		}
	}
};

// Card Chart 2
const cardChartData2 = {
	labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
	datasets: [
		{
			label: 'My First dataset',
			backgroundColor: brandInfo,
			borderColor: 'rgba(255,255,255,.55)',
			data: [ 1, 18, 9, 17, 34, 22, 11 ]
		}
	]
};

const cardChartOpts2 = {
	maintainAspectRatio: false,
	legend: {
		display: false
	},
	scales: {
		xAxes: [
			{
				gridLines: {
					color: 'transparent',
					zeroLineColor: 'transparent'
				},
				ticks: {
					fontSize: 2,
					fontColor: 'transparent'
				}
			}
		],
		yAxes: [
			{
				display: false,
				ticks: {
					display: false,
					min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
					max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5
				}
			}
		]
	},
	elements: {
		line: {
			tension: 0.00001,
			borderWidth: 1
		},
		point: {
			radius: 4,
			hitRadius: 10,
			hoverRadius: 4
		}
	}
};

// Card Chart 3
const cardChartData3 = {
	labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
	datasets: [
		{
			label: 'My First dataset',
			backgroundColor: 'rgba(255,255,255,.2)',
			borderColor: 'rgba(255,255,255,.55)',
			data: [ 78, 81, 80, 45, 34, 12, 40 ]
		}
	]
};

const cardChartOpts3 = {
	maintainAspectRatio: false,
	legend: {
		display: false
	},
	scales: {
		xAxes: [
			{
				display: false
			}
		],
		yAxes: [
			{
				display: false
			}
		]
	},
	elements: {
		line: {
			borderWidth: 2
		},
		point: {
			radius: 0,
			hitRadius: 10,
			hoverRadius: 4
		}
	}
};

// Card Chart 4
const cardChartData4 = {
	labels: [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ],
	datasets: [
		{
			label: 'My First dataset',
			backgroundColor: 'rgba(255,255,255,.3)',
			borderColor: 'transparent',
			data: [ 78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98 ]
		}
	]
};

const cardChartOpts4 = {
	maintainAspectRatio: false,
	legend: {
		display: false
	},
	scales: {
		xAxes: [
			{
				display: false,
				barPercentage: 0.6
			}
		],
		yAxes: [
			{
				display: false
			}
		]
	}
};

// Main Chart

// convert Hex to RGBA
function convertHex(hex, opacity) {
	hex = hex.replace('#', '');
	var r = parseInt(hex.substring(0, 2), 16);
	var g = parseInt(hex.substring(2, 4), 16);
	var b = parseInt(hex.substring(4, 6), 16);

	var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
	return result;
}

//Random Numbers
function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
	data1.push(random(50, 200));
	data2.push(random(80, 100));
	data3.push(65);
}

const mainChart = {
	labels: [ 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S' ],
	datasets: [
		{
			label: 'My First dataset',
			backgroundColor: convertHex(brandInfo, 10),
			borderColor: brandInfo,
			pointHoverBackgroundColor: '#fff',
			borderWidth: 2,
			data: data1
		},
		{
			label: 'My Second dataset',
			backgroundColor: 'transparent',
			borderColor: brandSuccess,
			pointHoverBackgroundColor: '#fff',
			borderWidth: 2,
			data: data2
		},
		{
			label: 'My Third dataset',
			backgroundColor: 'transparent',
			borderColor: brandDanger,
			pointHoverBackgroundColor: '#fff',
			borderWidth: 1,
			borderDash: [ 8, 5 ],
			data: data3
		}
	]
};

const mainChartOpts = {
	maintainAspectRatio: false,
	legend: {
		display: false
	},
	scales: {
		xAxes: [
			{
				gridLines: {
					drawOnChartArea: false
				}
			}
		],
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
					maxTicksLimit: 5,
					stepSize: Math.ceil(250 / 5),
					max: 250
				}
			}
		]
	},
	elements: {
		point: {
			radius: 0,
			hitRadius: 10,
			hoverRadius: 4,
			hoverBorderWidth: 3
		}
	}
};

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	render() {
		return (
			<div className="animated fadeIn">
				<div className="row">
					<div className="col-sm-6 col-lg-3">
						<div className="card card-inverse card-primary">
							<div className="card-block pb-0">
								<div className="btn-group float-right">
									<Dropdown
										isOpen={this.state.card1}
										toggle={() => {
											this.setState({ card1: !this.state.card1 });
										}}>
										<button
											onClick={() => {
												this.setState({ card1: !this.state.card1 });
											}}
											className="btn btn-transparent active dropdown-toggle p-0"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded={this.state.card1}>
											<i className="icon-settings" />
										</button>
										<DropdownMenu>
											<DropdownItem>Action</DropdownItem>
											<DropdownItem>Another action</DropdownItem>
											<DropdownItem>Something else here</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
								<h4 className="mb-0">9.823</h4>
								<p>Members online</p>
							</div>
							<div className="chart-wrapper px-3">
								<Line data={cardChartData1} options={cardChartOpts1} height={70} />
							</div>
						</div>
					</div>
				</div>

				<div className="card">
					<div className="card-block">
						<div className="row">
							<div className="col-sm-5">
								<h4 className="card-title mb-0">Traffic</h4>
								<div className="small text-muted">November 2015</div>
							</div>
							<div className="col-sm-7 hidden-sm-down">
								<button type="button" className="btn btn-primary float-right">
									<i className="icon-cloud-download" />
								</button>
								<div className="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
									<div className="btn-group mr-3" data-toggle="buttons" aria-label="First group">
										<label className="btn btn-outline-secondary">
											<input type="radio" name="options" id="option1" /> Day
										</label>
										<label className="btn btn-outline-secondary active">
											<input type="radio" name="options" id="option2" defaultChecked /> Month
										</label>
										<label className="btn btn-outline-secondary">
											<input type="radio" name="options" id="option3" /> Year
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
							<Line data={mainChart} options={mainChartOpts} height={300} />
						</div>
					</div>
					<div className="card-footer">
						<ul>
							<li>
								<div className="text-muted">Visits</div>
								<strong>29.703 Users (40%)</strong>
								<Progress className="progress-xs mt-2" color="success" value="40" />
							</li>
							<li className="hidden-sm-down">
								<div className="text-muted">Unique</div>
								<strong>24.093 Users (20%)</strong>
								<Progress className="progress-xs mt-2" color="info" value="20" />
							</li>
							<li>
								<div className="text-muted">Pageviews</div>
								<strong>78.706 Views (60%)</strong>
								<Progress className="progress-xs mt-2" color="warning" value="60" />
							</li>
							<li className="hidden-sm-down">
								<div className="text-muted">New Users</div>
								<strong>22.123 Users (80%)</strong>
								<Progress className="progress-xs mt-2" color="danger" value="80" />
							</li>
							<li className="hidden-sm-down">
								<div className="text-muted">Bounce Rate</div>
								<strong>40.15%</strong>
								<Progress className="progress-xs mt-2" color="primary" value="40" />
							</li>
						</ul>
					</div>
				</div>

				<table className="table table-hover table-outline mb-0 hidden-sm-down">
					<thead className="thead-default">
						<tr>
							<th className="text-center">
								<i className="icon-people" />
							</th>
							<th>User</th>
							<th className="text-center">Country</th>
							<th>Usage</th>
							<th className="text-center">Payment Method</th>
							<th>Activity</th>
						</tr>
					</thead>

					<tbody id="">
						<tr>
							<td className="text-center">
								<div className="avatar">
									<img src={'/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
									<span className="avatar-status badge-success" />
								</div>
							</td>
							<td>
								<div>Yiorgos Avraamu</div>
								<div className="small text-muted">
									<span>New</span> | Registered: Jan 1, 2015
								</div>
							</td>
							<td className="text-center">
								<img src={'/img/flags/USA.png'} alt="USA" style={{ height: 24 + 'px' }} />
							</td>
							<td>
								<div className="clearfix">
									<div className="float-left">
										<strong>50%</strong>
									</div>
									<div className="float-right">
										<small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
									</div>
								</div>
								<Progress className="progress-xs" color="success" value="50" />
							</td>
							<td className="text-center">
								<i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }} />
							</td>
							<td>
								<div className="small text-muted">Last login</div>
								<strong>10 sec ago</strong>
							</td>
						</tr>
						<tr>
							<td className="text-center">
								<div className="avatar">
									<img src={'/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
									<span className="avatar-status badge-danger" />
								</div>
							</td>
							<td>
								<div>Avram Tarasios</div>
								<div className="small text-muted">
									<span>Recurring</span> | Registered: Jan 1, 2015
								</div>
							</td>
							<td className="text-center">
								<img src={'/img/flags/Brazil.png'} alt="Brazil" style={{ height: 24 + 'px' }} />
							</td>
							<td>
								<div className="clearfix">
									<div className="float-left">
										<strong>10%</strong>
									</div>
									<div className="float-right">
										<small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
									</div>
								</div>
								<Progress className="progress-xs" color="info" value="10" />
							</td>
							<td className="text-center">
								<i className="fa fa-cc-visa" style={{ fontSize: 24 + 'px' }} />
							</td>
							<td>
								<div className="small text-muted">Last login</div>
								<strong>5 minutes ago</strong>
							</td>
						</tr>
						<tr>
							<td className="text-center">
								<div className="avatar">
									<img src={'/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
									<span className="avatar-status badge-warning" />
								</div>
							</td>
							<td>
								<div>Quintin Ed</div>
								<div className="small text-muted">
									<span>New</span> | Registered: Jan 1, 2015
								</div>
							</td>
							<td className="text-center">
								<img src={'/img/flags/India.png'} alt="India" style={{ height: 24 + 'px' }} />
							</td>
							<td>
								<div className="clearfix">
									<div className="float-left">
										<strong>74%</strong>
									</div>
									<div className="float-right">
										<small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
									</div>
								</div>
								<Progress className="progress-xs" color="warning" value="74" />
							</td>
							<td className="text-center">
								<i className="fa fa-cc-stripe" style={{ fontSize: 24 + 'px' }} />
							</td>
							<td>
								<div className="small text-muted">Last login</div>
								<strong>1 hour ago</strong>
							</td>
						</tr>
						<tr>
							<td className="text-center">
								<div className="avatar">
									<img src={'/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
									<span className="avatar-status badge-default" />
								</div>
							</td>
							<td>
								<div>Enéas Kwadwo</div>
								<div className="small text-muted">
									<span>New</span> | Registered: Jan 1, 2015
								</div>
							</td>
							<td className="text-center">
								<img src={'/img/flags/France.png'} alt="France" style={{ height: 24 + 'px' }} />
							</td>
							<td>
								<div className="clearfix">
									<div className="float-left">
										<strong>98%</strong>
									</div>
									<div className="float-right">
										<small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
									</div>
								</div>
								<Progress className="progress-xs" color="danger" value="98" />
							</td>
							<td className="text-center">
								<i className="fa fa-paypal" style={{ fontSize: 24 + 'px' }} />
							</td>
							<td>
								<div className="small text-muted">Last login</div>
								<strong>Last month</strong>
							</td>
						</tr>
						<tr>
							<td className="text-center">
								<div className="avatar">
									<img src={'/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
									<span className="avatar-status badge-success" />
								</div>
							</td>
							<td>
								<div>Agapetus Tadeáš</div>
								<div className="small text-muted">
									<span>New</span> | Registered: Jan 1, 2015
								</div>
							</td>
							<td className="text-center">
								<img src={'/img/flags/Spain.png'} alt="Spain" style={{ height: 24 + 'px' }} />
							</td>
							<td>
								<div className="clearfix">
									<div className="float-left">
										<strong>22%</strong>
									</div>
									<div className="float-right">
										<small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
									</div>
								</div>
								<Progress className="progress-xs" color="info" value="22" />
							</td>
							<td className="text-center">
								<i className="fa fa-google-wallet" style={{ fontSize: 24 + 'px' }} />
							</td>
							<td>
								<div className="small text-muted">Last login</div>
								<strong>Last week</strong>
							</td>
						</tr>
						<tr>
							<td className="text-center">
								<div className="avatar">
									<img src={'/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
									<span className="avatar-status badge-danger" />
								</div>
							</td>
							<td>
								<div>Friderik Dávid</div>
								<div className="small text-muted">
									<span>New</span> | Registered: Jan 1, 2015
								</div>
							</td>
							<td className="text-center">
								<img src={'/img/flags/Poland.png'} alt="Poland" style={{ height: 24 + 'px' }} />
							</td>
							<td>
								<div className="clearfix">
									<div className="float-left">
										<strong>43%</strong>
									</div>
									<div className="float-right">
										<small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
									</div>
								</div>
								<Progress className="progress-xs" color="success" value="43" />
							</td>
							<td className="text-center">
								<i className="fa fa-cc-amex" style={{ fontSize: 24 + 'px' }} />
							</td>
							<td>
								<div className="small text-muted">Last login</div>
								<strong>Yesterday</strong>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Dashboard;
