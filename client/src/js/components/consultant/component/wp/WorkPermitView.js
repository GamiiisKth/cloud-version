import React from 'react';
import ExpansionPanel from 'material-expansion-panel';

require('material-expansion-panel/dist/material-expansion-panel.min.css');
const aIcons = [
	{
		callback: null,
		additionalParams: null
	}
];
export default class WorkPermitView extends React.Component {
	render() {
		return (
			<div className="" id="tab6">
				<form action="" method="post">
					<div className="modal-body row">
						<div className="col-md-6" id="divBorderBottom">
							<div className="form-group">
								<div className="input-group input-group-sm">
									<select type="select" className="basic-slide" name="category">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
									<label htmlFor="category">Category</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="startDate" className="clean-slide" />
									<label htmlFor="startDate">Start date</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="endDate" className="clean-slide" />
									<label htmlFor="endDate">End date</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<select type="select" className="basic-slide" name="status">
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
						<div className="col-md-6" id="divBorderBottom">
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="clientRequestedDate" className="clean-slide" />
									<label htmlFor="clientRequestedDate">Client requested date</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="dmJustificationDate" className="clean-slide" />
									<label htmlFor="dmJustificationDate">DM justification date</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="startDate" className="clean-slide" />
									<label htmlFor="initialDate">Initial date</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="fieldDate" className="clean-slide" />
									<label htmlFor="fieldDate">Field date</label>
								</div>
							</div>
							<div className="form-group">
								<div className="input-group input-group-sm">
									<input type="date" name="startDate" className="clean-slide" />
									<label htmlFor="startDate">UT card received date</label>
								</div>
							</div>
						</div>
						<div className="col-md-6" id="divBorderTop">
							<h1>?</h1>
						</div>
						<div className="col-md-6" id="divBorderTop">
							<div className="form-group">
								<span className="input input--jiro ">
									<textarea className="input__field input__field--jiro" type="text" id="comment" />
									<label className="input__label input__label--jiro" htmlFor="comment">
										<span className="input__label-content input__label-content--jiro">Comment</span>
									</label>
								</span>
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
