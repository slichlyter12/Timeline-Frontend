import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Titlebar from './Titlebar';
import Tutorial from './Tutorial';
import Google from './Google';

const styles = {
	grow: {
		flexGrow: 1,
		display: 'inline-block',
		width: '45%'
	},
	container: {
		display: 'inline-block'
	}
}

class App extends React.PureComponent {
	render() {

		const { classes } = this.props;

		return (
			<div className="App">
				<Titlebar />
				<div className={classes.container}>
					<Tutorial className={classes.grow} />
					<Google className={classes.grow}/>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(App);