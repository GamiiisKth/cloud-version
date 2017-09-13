import React from 'react';
import ExpansionPanel from 'material-expansion-panel';
import $ from 'jquery';
import datepicker from 'jquery';

require('../css/formStyle.scss');
require('../css/commentStyle.css');
require('material-expansion-panel/dist/material-expansion-panel.min.css');

const aIcons = [
	{
		callback: null,
		additionalParams: null
	}
];

export default class RfsWiew extends React.Component {
	render() {
		const { onSubmit, onChange, errors, successMessage, employeeRfs } = this.props;

		return (
			<div className="" id="tab3">
				<form action="" method="post">
					<div className="modal-body row">
						<div className="col-md-6" id="divBorderBottom">
							{/**left side of page **/}

							<div className="form-group">
								<div className="input-group input-group-sm">
									<input className="gate" type="text" name="ritmId" placeholder="Number" />
									<label htmlFor="ritmId">Ritm id</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<select type="select" className="basic-slide" name="backfill">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
									<label htmlFor="backfill">Category</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input className="balloon" type="text" name="valueSek" placeholder="Number" />
									<label htmlFor="valueSek">Value SEK</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input className="balloon " type="text" name="valueUsd" placeholder="$" />
									<label htmlFor="valueUsd">Value USDD</label>
								</div>
							</div>
						</div>
						{/**right side of page **/}
						<div className="col-md-6" id="divBorderBottom">
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="createDate" id="date" className="clean-slide" />
									<label htmlFor="createDate">Create date</label>
								</div>
							</div>

							<div className="form-group">
								<div className="input-group input-group-sm">
									<select className="basic-slide" name="assignedTo" id="basicSlideTextIndent110">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
									<label htmlFor="assignedTo">Assigned To</label>
								</div>
							</div>

							<div className="form-group">
								<div className="input-group input-group-sm">
									<select className="basic-slide" name="status">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
									<label htmlFor="status">Status</label>
								</div>
							</div>
						</div>

						<div className="col-md-6">
							<div className="form-group">
								<div className="input-group input-group-sm" id="divBorderTop">
									<input type="date" name="poStartDate" className="clean-slide" />
									<label htmlFor="poStartDate">Po start date</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="poEndDate" className="clean-slide" />
									<label htmlFor="poEndDate">Po end date</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input className="gate" type="text" name="backfillFor" placeholder="Number" />
									<label htmlFor="backfillFor">Backfill for</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input className="gate" type="text" name="newDivision" placeholder="Number" />
									<label htmlFor="newDivision">New division</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input className="gate" type="text" name="newRoll" placeholder="Number" />
									<label htmlFor="newRoll">New roll</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input className="gate" type="text" name="newLevel" placeholder="Number" />
									<label htmlFor="newLevel">New level</label>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<div className="input-group input-group-sm" id="divBorderTop">
									<input type="date" name="onSiteStartDate" className="clean-slide" />
									<label htmlFor="onSiteStartDate">OnSite start date</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="onSiteEndDate" className="clean-slide" />
									<label htmlFor="onSiteEndDate">OnSite end date</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="lastWorkingDate" className="clean-slide" />
									<label htmlFor="lastWorkingDate">Last working date</label>
								</div>
							</div>
							<div className="form-group">
								<span className="input input--jiro ">
									<textarea className="input__field input__field--jiro" type="text" id="comment" />
									<label className="input__label input__label--jiro" htmlFor="comment">
										<span className="input__label-content input__label-content--jiro">Comment</span>
									</label>
								</span>
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
					<ExpansionPanel titleIcon="comment" title="Comments" expandedTitle="Expanded Panel Title" actionIcons={aIcons}>
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
				{/**comments history**/}
				<div className="form-group">
					<ExpansionPanel titleIcon="history" title="RFS History" expandedTitle="Expanded Panel Title" actionIcons={aIcons}>
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
