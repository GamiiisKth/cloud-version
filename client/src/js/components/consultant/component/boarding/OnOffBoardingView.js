import React from 'react';
import ExpansionPanel from 'material-expansion-panel';

require('material-expansion-panel/dist/material-expansion-panel.min.css');

const aIcons = [
	{
		callback: null,
		additionalParams: null
	}
];
export default class OnOffBoardingView extends React.Component {
	render() {
		return (
			<div className="" id="tab5">
				<form action="" method="post">
					<h1 className="animatedtext text">
						<i className="material-icons">flight_land</i> OnBoarding
					</h1>
					<div className="modal-body row">
						<div className="col-md-6">
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="ndaSignedDate" className="clean-slide" />
									<label htmlFor="ndaSignedDate">NDA signed date</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="ndaSignedToClient" className="clean-slide" />
									<label htmlFor="ndaSignedToClient">NDA sent to date</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="completionDate" className="clean-slide" />
									<label htmlFor="completionDate">Completion date</label>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<div className="input-group input-group-sm">
									<select type="select" className="basic-slide" name="typeOfWorkStation">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
									<label htmlFor="typeOfWorkStation">Type of workstation</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<select type="select" className="basic-slide" name="typeOfPeripheralEquipment">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
									<label htmlFor="typeOfPeripheralEquipment">Peripheral equipment</label>
								</div>
							</div>

							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="inductionAttendedDate" className="clean-slide" />
									<label htmlFor="inductionAttendedDate">Induction attended date</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="securityTrainingCompletedDate" className="clean-slide" />
									<label htmlFor="securityTrainingCompletedDate">Security training completed date</label>
								</div>
							</div>
						</div>
					</div>
					<h1 className="animatedtext text">
						<i className="material-icons">flight_takeoff</i> OffBoarding
					</h1>
					<div className="modal-body row">
						<div className="col-md-6">
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="earlyRollOfDate" className="clean-slide" />
									<label htmlFor="earlyRollOfDate">Early roll of date</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="earlyRollOfNotification" className="clean-slide" />
									<label htmlFor="earlyRollOfNotification">Early roll notification </label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="actualEndDate" className="clean-slide" />
									<label htmlFor="actualEndDate">Actual end date </label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="offBoardingCompletionDate" className="clean-slide" />
									<label htmlFor="offBoardingCompletionDate">OffBoarding completion </label>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<div className="input-group input-group-sm">
									<select type="select" className="basic-slide" name="typeOfSeparation">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
									<label htmlFor="typeOfSeparation">Type of separation</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<select type="select" className="basic-slide" name="earlyRollInitiatedBy">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
									<label htmlFor="earlyRollInitiatedBy">Early roll initiated By</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<select type="select" className="basic-slide" name="earlyRollOfReason">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
									<label htmlFor="earlyRollOfReason">Early roll off reason</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<select type="select" className="basic-slide" name="RemovalOfClientDataConfirmed">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
									<label htmlFor="RemovalOfClientDataConfirmed">RemovalOfClientDataConfirmed</label>
								</div>
							</div>
						</div>
						<div className="row" id="paddingTop">
							<div className="col" id="paddingLeft">
								<button type="submit" className="btn btn-md btn-primary">
									<i className="fa fa-dot-circle-o" /> Submit
								</button>
							</div>

							<div className="col" id="paddingLeft" />
							<button type="reset" className="btn btn-md btn-danger">
								<i className="fa fa-ban" /> Reset
							</button>
						</div>
					</div>
				</form>
				<div className="form-group">
					<ExpansionPanel titleIcon="history" title="Boarding History" expandedTitle="Expanded Panel Title" actionIcons={aIcons}>
						<table className="table table-hover">
							<thead>
								<tr>
									<th>#</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Username</th>
								</tr>
							</thead>
							<tbody>
								<tr className="table-success">
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>Larry</td>
									<td>the Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</table>
						<nav aria-label="Page navigation example">
							<ul className="pagination justify-content-center">
								<li className="page-item disabled">
									<a className="page-link" href="#" tabIndex="-1">
										Previous
									</a>
								</li>
								<li className="page-item">
									<a className="page-link" href="#">
										1
									</a>
								</li>
								<li className="page-item">
									<a className="page-link" href="#">
										2
									</a>
								</li>
								<li className="page-item">
									<a className="page-link" href="#">
										3
									</a>
								</li>
								<li className="page-item">
									<a className="page-link" href="#">
										Next
									</a>
								</li>
							</ul>
						</nav>
					</ExpansionPanel>
				</div>
			</div>
		);
	}
}
