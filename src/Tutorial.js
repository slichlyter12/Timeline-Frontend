import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	
}

class Tutorial extends React.PureComponent {

	render() {

		const { classes } = this.props;

		return (
			<div className={classes.tutorial}>
				<h1>How to export your data from <a href="https://www.google.com/maps/timeline" target="_blank" rel="noopener noreferrer">Google Timeline</a></h1>
				<ol>
					<li><a href="https://takeout.google.com/settings/takeout/custom/location_history" target="_blank" rel="noopener noreferrer">Click here</a> to take you to Google Takeout</li>
					<li>Sign in if you aren't already</li>
					<li>Click "Next"</li>
					<li>Click "Create Archive"</li>
					<li>Grab a cup of coffee while your data exports...</li>
					<li>Once the page reloads and your archive is availabe, click the "Download" button</li>
					<li>Enter your password</li>
					<li>Celebrate because now you have all your location data!</li>
					<li>Continue below to send us your data.</li>
				</ol>

				<h1>How to send us your location data</h1>
				<ol>
					<li><a href="#">Click here</a> to go to our upload page</li>
					<li>Select your location archive from your downloads folder</li>
					<li>Click "Upload"</li>
					<li>Celebrate because now you're done!!</li>
				</ol>
			</div>
		);
	}
}

Tutorial.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tutorial);