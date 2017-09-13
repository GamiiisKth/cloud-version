import React from 'react';
import ExpansionPanel from 'material-expansion-panel';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import $ from 'jquery';
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
require('froala-editor/css/froala_style.min.css');
require('froala-editor/css/froala_editor.pkgd.min.css');
require('material-expansion-panel/dist/material-expansion-panel.min.css');
require('./overideStyle.css');

const aIcons = [
	{
		callback: null,
		additionalParams: null
	}
];

export default class ResourcesRequestDescriptionModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			large: false,
			model: ''
		};
		this.toggleLarge = this.toggleLarge.bind(this);
		this.handleModelChange = this.handleModelChange.bind(this);
	}

	toggleLarge() {
		this.setState({
			large: !this.state.large
		});
	}

	handleModelChange(model) {
		this.setState({ model });
	}
	render() {
		if (!this.state.large) {
			return (
				<div className="form-group">
					<ExpansionPanel titleIcon="description" title="Resources Request description" expandedTitle="Expanded Panel Title" actionIcons={aIcons}>
						<header>
							<button className="btn btn-sm btn-info float-right" onClick={this.toggleLarge}>
								Edit
							</button>
						</header>
						<FroalaEditorView model={this.state.model} />
					</ExpansionPanel>
				</div>
			);
		} else {
			return (
				<div>
					<Modal isOpen={this.state.large} toggle={this.toggleLarge}>
						<ModalBody className="row col-md-12" style={{ marginLeft: '20px' }}>
							<div className="col-md-6">
								<FroalaEditor model={this.state.model} onModelChange={this.handleModelChange} id="test" />
							</div>
							<div className="col-md-6">
								<FroalaEditorView model={this.state.model} />
							</div>
						</ModalBody>
					</Modal>
				</div>
			);
		}
	}
}
