import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import UploadModal from './UploadModal';

const styles = {
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
};

class Titlebar extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		}

		this.handleUploadClick = this.handleUploadClick.bind(this);
	}

	handleUploadClick() {
		this.setState({ open: !this.state.open });
	}

	render() {

		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" color="inherit" className={classes.grow}>
							Google Timeline Exporter
						</Typography>
						<Button color="inherit" onClick={this.handleUploadClick}>Upload</Button>
						<UploadModal 
							open={this.state.open}
							onClose={this.handleUploadClick}
						/>
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