import React from 'react';
import ExpansionPanel from 'material-expansion-panel';
require('material-expansion-panel/dist/material-expansion-panel.min.css');

const aIcons = [
	{
		callback: null,
		additionalParams: null
	}
];
export default class PoDetails extends React.Component {
	render() {
		return (
			<div className="" id="tab3">
				<form action="" method="post">
					<div className="modal-body row">
						<div className="col-md-6">
							<div className="form-group">
								<div className="input-group input-group-sm">
									<select type="select" className="basic-slide" name="division">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
									<label htmlFor="division">Division</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
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
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<div className="input-group input-group-sm">
									<select type="select" className="basic-slide" name="roll">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
									<label htmlFor="roll">Roll</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<select type="select" className="basic-slide" name="level">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
									<label htmlFor="level">Level</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<select type="select" className="basic-slide" name="project">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
									<label htmlFor="project">Project</label>
								</div>
							</div>
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
