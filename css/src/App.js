import React from 'react';
import './App.css';

function App() {
	return (
		<div className='App'>
			<div className='buttons'>
				<button className='button-one'>Hover Me</button>
				<button className='button-two'>Hover Me</button>
			</div>
			<div className='smoky'>
				<ul>
					<li>M</li>
					<li>r</li>
					<li>.</li>
					<li>S</li>
					<li>t</li>
					<li>a</li>
					<li>r</li>
					<li>k</li>
				</ul>
			</div>

			<div className='loading'></div>
			<div className='loading2'>
				<span />
				<span />
				<span />
				<span />
			</div>
		</div>
	);
}

export default App;
