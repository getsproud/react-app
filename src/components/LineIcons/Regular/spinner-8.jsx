import React from 'react';

function Spinner8(props) {
	const title = props.title || "spinner 8";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<circle cx="32" cy="7.1" r="4.1"/>
		<circle cx="32" cy="56.9" r="4.1"/>
		<circle cx="49.6" cy="14.4" r="4.1"/>
		<circle cx="14.4" cy="49.6" r="4.1"/>
		<circle cx="56.9" cy="32" r="4.1"/>
		<circle cx="7.1" cy="32" r="4.1"/>
		<circle cx="49.6" cy="49.6" r="4.1"/>
		<circle cx="14.4" cy="14.4" r="4.1"/>
	</g>
</svg>
	);
};

export default Spinner8;