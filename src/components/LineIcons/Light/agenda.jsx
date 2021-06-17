import React from 'react';

function Agenda(props) {
	const title = props.title || "agenda";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path className="st0" d="M-13-13h90v90h-90z" fill="#000000"/>
		<path d="M50 0H14c-1.4 0-2.5 1.1-2.5 2.5v52.3c0 1.4 1.1 2.5 2.5 2.5h1.7V64l2.7-2.3 2.7 2.3v-6.7H50c1.4 0 2.5-1.1 2.5-2.5V2.5C52.5 1.1 51.4 0 50 0zM38.7 54.3H14.5v-16h24.2v16zm0-19H14.5v-16h24.2v16zm0-19H14.5V3h24.2v13.3zm10.8 38h-7.9v-16h7.9v16zm0-19h-7.9v-16h7.9v16zm0-19h-7.9V3h7.9v13.3z"/>
	</g>
</svg>
	);
};

export default Agenda;