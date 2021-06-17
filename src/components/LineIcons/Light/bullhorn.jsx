import React from 'react';

function Bullhorn(props) {
	const title = props.title || "bullhorn";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59 1.9H46.6c-2.8 0-5 2.2-5 5v.7l-26.3 2.6H5.7c-3.1 0-5.7 2.4-5.7 5.4v17.1c0 2.3 1.5 4.2 3.5 5l3.7 20.5c.6 2.8 3.3 4.9 6.4 4.9 2.1 0 4.1-.9 5.3-2.5 1.1-1.4 1.5-3.1 1.1-4.7l-3.2-18.3 24.7 5.5v1c0 2.8 2.2 5 5 5H59c2.8 0 5-2.2 5-5V6.9c0-2.8-2.2-5-5-5zM3 15.6c0-1.3 1.2-2.4 2.7-2.4h8.2v22H5.7c-1.5 0-2.7-1.1-2.7-2.4V15.6zm13.6 43.2c-.7.8-1.8 1.3-2.9 1.3-1.7 0-3.2-1.1-3.5-2.5L6.7 38.1H14l3.2 18.5c.1.8-.1 1.6-.6 2.2zm.3-24.2V13l24.7-2.5v29.6l-24.7-5.5zM61 44.2c0 1.1-.9 2-2 2H46.6c-1.1 0-2-.9-2-2V6.9c0-1.1.9-2 2-2H59c1.1 0 2 .9 2 2v37.3z"/>
	</g>
</svg>
	);
};

export default Bullhorn;