import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const LoginForm = ({ onSubmit, onChange, errors, successMessage, user }) => (
	<div className="app flex-row align-items-center">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-7">
					<div className="card">
						<div className="view overlay hm-white-slight">
							<img src="img/ibm/hm_ibm.jpg" className="img-fluid" alt="" />
						</div>
						<div className="card-block p-4">
							<form action="/" onSubmit={onSubmit}>
								<h2 className="card-heading">Login</h2>

								{successMessage && <p className="success-message">{successMessage}</p>}
								{errors.summary && <p className="error-message">{errors.summary}</p>}

								<div className="md-form">
									<TextField floatingLabelText="Email" name="email" errorText={errors.email} onChange={onChange} value={user.email} />
								</div>

								<div className="md-form">
									<TextField floatingLabelText="Password" type="password" name="password" onChange={onChange} errorText={errors.password} value={user.password} />
								</div>

								<div className="md-form">
									<div className="button-line">
										<RaisedButton type="submit" label="Log in" primary />
									</div>

									<CardText>
										Don't have an account? <Link to={'/signup'}>Create one</Link>.
									</CardText>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

LoginForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	successMessage: PropTypes.string.isRequired,
	user: PropTypes.object.isRequired
};

export default LoginForm;
