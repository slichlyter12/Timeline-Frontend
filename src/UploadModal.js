import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

const URL = 'http://localhost:3001/api';

function getModalStyle() {
	const top = 50;
	const left = 50;
	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const styles = theme => ({
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
	},
});

class UploadModal extends React.PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			success: false,
		}

		this.handleUpload = this.handleUpload.bind(this);
		this.fileInput = React.createRef();
		this.renderForm = this.renderForm.bind(this);
	}

	handleUpload(event) {
		event.preventDefault();

		const data = new FormData();
		data.append('file', this.fileInput.current.files[0]);

		fetch(URL, {
			method: "POST",
			body: data,
		}).then(response => {
			console.log(response);
			this.setState({ success: true });
		});
	}

	renderForm() {
		const { success } = this.state;
		if (success) {
			return <Typography variant="h3" style={{color: "green"}}>
				Upload Success!
			</Typography>
		} else {
			return <Typography variant="body1">
				<form onSubmit={this.handleUpload}>
					<input type="file" name="file" ref={this.fileInput} />
					<Button variant="contained" type="submit">Upload</Button>
				</form>
			</Typography> 
		}
	}

	render() {
		const { classes } = this.props;

		return (
			<Slide direction="up">
				<Modal
					aria-labelledby="modal-title"
					aria-describedby="modal-description"
					open={this.props.open}
					onClose={this.props.onClose}
				>
					<div style={getModalStyle()} className={classes.paper}>
						<Typography variant="h6" id="modal-title">Upload</Typography>
						<Typography variant="subtitle1" id="modal-description">
							Upload your Google Timeline Archive here.
						</Typography>
						{this.renderForm()}
					</div>
				</Modal>
			</Slide>
		)
	}
}

UploadModal.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadModal);