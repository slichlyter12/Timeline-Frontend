import React from 'react';

import Titlebar from './Titlebar';
import Tutorial from './Tutorial';

class App extends React.PureComponent {
	render() {
		return (
			<div className="App">
				<Titlebar />
				<Tutorial />
			</div>
		);
	}
}

export default App;