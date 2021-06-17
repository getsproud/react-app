import React from 'react';

function WeightMachine(props) {
	const title = props.title || "weight machine";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54.8 0H9.2C4.2 0 0 4.2 0 9.2v45.5C0 59.8 4.2 64 9.2 64h45.5c5.1 0 9.2-4.1 9.2-9.2V9.2c.1-5-4.1-9.2-9.1-9.2zM43.9 3v7.6c0 2.7-2.2 4.9-4.9 4.9h-6l2.9-5c.4-.7.2-1.6-.6-2-.7-.4-1.6-.2-2 .6l-3.7 6.5H25c-2.7 0-4.9-2.2-4.9-4.9V3h23.8zM61 54.8c0 3.4-2.8 6.2-6.2 6.2H9.2C5.8 61 3 58.2 3 54.8V9.2C3 5.8 5.8 3 9.2 3H17v7.6c0 4.3 3.5 7.9 7.9 7.9H39c4.3 0 7.9-3.5 7.9-7.9V3h7.8C58.2 3 61 5.8 61 9.2v45.6z"/>
	</g>
</svg>
	);
};

export default WeightMachine;