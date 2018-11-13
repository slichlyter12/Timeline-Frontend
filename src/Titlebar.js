import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	}
}

class Titlebar extends React.PureComponent {

	constructor(props) {
		super(props);

		this.handleUploadClick = this.handleUploadClick.bind(this);
	}

	handleUploadClick() {
		this.refs.fileUploader.click();
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<Typography className={classes.grow} variant="h6" color="inherit">
							Google Timeline Exporter
						</Typography>
						<input type="file" id="file" ref="fileUploader" style={{display: "none"}} />
						<Button color="default" variant="contained" onClick={this.handleUploadClick}>Upload</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

Titlebar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Titlebar);