import React from 'react';

function RoundBoxMinus(props) {
	const title = props.title || "round box minus";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.4.1H1.6C.8.1.1.8.1 1.6v60.9c0 .8.7 1.5 1.5 1.5h60.9c.8 0 1.5-.7 1.5-1.5V1.6C63.9.7 63.3.1 62.4.1zm-1.5 60.8H3.1V3.1H61v57.8z"/>
		<path d="M19.1 33.5h25.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H19.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default RoundBoxMinus;