import React from 'react';
import Toggle from 'material-ui/Toggle';
import ResourcesRequestDescriptionModal from './ResourcesRequestDescriptionModal';
require('../css/formStyle.scss');
require('../css/commentStyle.css');

const ResourcesRequestView = ({ onSubmit, onChange, errors, successMessage, employeeRr }) => {
	return (
		<div className="" id="tab4">
			<form action="" method="post">
				<div className="modal-body row">
					<div className="col-md-6" id="divBorderBottom">
						<div className="form-group">
							<div className="input-group input-group-sm">
								<input className="gate" type="text" name="rrId" placeholder="Number" />
								<label htmlFor="rrId">RR id</label>
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-sm">
								<input className="gate" type="text" name="ritmId" placeholder="Number" />
								<label htmlFor="ritmId">Ritm id</label>
							</div>
						</div>

						<div className="form-group">
							<div className="input-group input-group-sm">
								<select className="basic-slide" name="title">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
								<label htmlFor="title">Title</label>
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-sm">
								<select className="basic-slide" name="type">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
								<label htmlFor="type">Type</label>
							</div>
						</div>
					</div>

					{/**top left side **/}
					<div className="col-md-6" id="divBorderBottom">
						<div className="form-group">
							<div className="input-group input-group-sm">
								<select className="basic-slide" name="contract">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
								<label htmlFor="contract">Contract</label>
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-sm" id="divBorderTop">
								<input type="date" name="requestDate" className="clean-slide" />
								<label htmlFor="requestDate">Request date</label>
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-sm" id="divBorderTop">
								<input type="date" name="expStartDate" className="clean-slide" />
								<label htmlFor="expStartDate">Expected start date</label>
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-sm" id="divBorderTop">
								<input type="date" name="expEndDate" className="clean-slide" />
								<label htmlFor="expEndDate">Expected end date</label>
							</div>
						</div>
					</div>
					{/**down right side**/}
					<div className="col-md-6">
						<div className="form-group">
							<div className="input-group input-group-sm" id="divBorderTop">
								<select className="basic-slide" name="division">
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
								<select className="basic-slide" name="role">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
								<label htmlFor="role">Role</label>
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-sm">
								<select className="basic-slide" name="primarySkills">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
								<label htmlFor="primarySkills">Primary skills</label>
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-sm">
								<select className="basic-slide" name="hmLevel">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
								<label htmlFor="hmLevel">H&M level</label>
							</div>
						</div>

						<div className="form-group">
							<div className="input-group input-group-sm">
								<select className="basic-slide" name="hmLevel">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
								<label htmlFor="hmLevel">IBM band</label>
							</div>
						</div>
					</div>
					{/**down left side **/}
					<div className="col-md-6">
						<div className="form-group">
							<div className="input-group input-group-sm" id="divBorderTop">
								<input type="date" name="onSiteStartDate" className="clean-slide" />
								<label htmlFor="onSiteStartDate">OnSite start date</label>
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-sm" id="divBorderTop">
								<input type="date" name="onSiteEndDate" className="clean-slide" />
								<label htmlFor="onSiteEndDate">Onsite end date</label>
							</div>
						</div>

						<div className="form-group">
							<div className="input-group input-group-sm">
								<select className="basic-slide" name="offShoreLocation">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
								<label htmlFor="offShoreLocation">OffShore Location</label>
							</div>
						</div>
						<div className="form-group">
							<div className="input-group input-group-sm">
								<select className="basic-slide" name="onSiteLocation">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
								<label htmlFor="onSiteLocation">OnSite Location</label>
							</div>
						</div>
						<div className="row col-md-8">
							<div className="form-group col-md-6">
								<Toggle label="Backfill" defaultToggled={false} labelPosition="right" />
							</div>
							<div className="form-group col-md-6">
								<Toggle label="Team Based" defaultToggled={true} labelPosition="right" />
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
			<ResourcesRequestDescriptionModal />
		</div>
	);
};

export default ResourcesRequestView;
