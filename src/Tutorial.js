import React from 'react';

class Tutorial extends React.PureComponent {

	render() {
		return (
			<div className="Tutorial">
				<h1>How to export your data from <a href="https://www.google.com/maps/timeline">Google Timeline</a></h1>
				<ol>
					<li><a href="https://takeout.google.com/settings/takeout/custom/location_history">Click here</a> to take you to Google Takeout</li>
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
					<li><a href="/upload" target="iframe">Click here</a> to go to our upload page</li>
					<li>Select your location archive from your downloads folder</li>
					<li>Click "Upload"</li>
					<li>Celebrate because now you're done!!</li>
				</ol>
			</div>
		);
	}
}

export default Tutorial;