import React from 'react';

function Italic(props) {
	const title = props.title || "Italic";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.1 0H19.8c-.8 0-1.5.7-1.5 1.5S18.9 3 19.8 3h15.9L25.3 61H8.9c-.8 0-1.5.7-1.5 1.5S8.1 64 8.9 64h35.3c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.5-1.5H28.4L38.7 3h16.4c.8 0 1.5-.7 1.5-1.5S55.9 0 55.1 0z"/>
	</g>
</svg>
	);
};

export default Italic;