import React from 'react';
import $ from 'jquery';
require('../css/formStyle.scss');
require('../../tabsLayout.css');

const InfoView = ({ onSubmit, onChange, errors, successMessage, employeeInfo }) => {
	return (
		<div id="tab1">
			<form action="" method="post">
				<div className="modal-body row">
					<div className="col-md-6" id="divBorderBottom">
						<div className="form-group">
							<div className="input-group input-group-sm">
								<input className="gate" type="text" placeholder="Number" id="gateTextIndent110" />
								<label htmlFor="name">Employee no</label>
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-sm">
								<input type="text" name="employeeName" className="gate" placeholder="Name" />
								<label htmlFor="employeeEmail">Name</label>
							</div>
						</div>

						<div className="form-group">
							<div className="input-group input-group-sm">
								<input type="text" name="employeeEmail" className="gate" placeholder="Email" />
								<label htmlFor="employeeEmail">Email</label>
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-sm">
								<select name="employeeBand" className="basic-slide">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
								<label htmlFor="employeeBand">Band</label>
							</div>
						</div>
					</div>
					<div className="col-md-6" id="divBorderBottom">
						<div className="form-group">
							<div className="input-group input-group-sm">
								<select name="fulfilmSource" className="basic-slide" id="basicSlideTextIndent120">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
								<label htmlFor="fulfilmSource">Fulfilm source</label>
							</div>
						</div>

						<div className="form-group">
							<div className="input-group input-group-sm">
								<input type="date" name="availabilityDate" className="clean-slide" />
								<label htmlFor="availabilityDate">Availability date</label>
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-sm">
								<input className="gate" id="gateTextIndent150" type="text" name="monthOfExpAtStart" placeholder="Number" />
								<label htmlFor="monthOfExpAtStart">Month of exp at start</label>
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-sm">
								<input className="gate" id="gateTextIndent150" type="text" name="currentMonthOfExp" placeholder="Number" />
								<label htmlFor="currentMonthOfExp">Current month of exp</label>
							</div>
						</div>
					</div>
					{/**page bottom left slice**/}
					<div className="col-md-6" id="divBorderTop">
						<div className="form-group">
							<div className="input-group input-group-sm">
								<input className="gate" type="text" name="offShoreCostRate" placeholder="Number" id="gateTextIndent110" />
								<label htmlFor="OffShoreCostRate">OffShore cost rate</label>
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-sm">
								<select name="employeeDivision" name="division" className="basic-slide">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
								<label htmlFor="employeeDivision">Division</label>
							</div>
						</div>
					</div>
					{/**page bottom right slice**/}
					<div className="col-md-6" id="divBorderTop">
						<div className="form-group">
							<div className="input-group input-group-sm">
								<input type="date" name="lockingStart" className="clean-slide" />
								<label htmlFor="lockingStart">Locking start</label>
							</div>
						</div>

						<div className="form-group" />

						<div className="form-group">
							<div className="input-group input-group-sm">
								<input type="date" name="lockingEnd" className="clean-slide" />
								<label htmlFor="lockingEnd">Locking End</label>
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
		</div>
	);
};
export default InfoView;
