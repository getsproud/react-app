import React from 'react';

function Spinner8(props) {
	const title = props.title || "spinner 8";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<circle cx="32" cy="4.5" r="4.5"/>
		<circle cx="32" cy="59.5" r="4.5"/>
		<ellipse cx="51.4" cy="12.6" rx="4.5" ry="4.5" transform="rotate(-45.001 51.446 12.555)"/>
		<ellipse cx="12.6" cy="51.4" rx="4.5" ry="4.5" transform="rotate(-45.001 12.554 51.446)"/>
		<circle cx="59.5" cy="32" r="4.5"/>
		<circle cx="4.5" cy="32" r="4.5"/>
		<ellipse cx="51.4" cy="51.4" rx="4.5" ry="4.5" transform="rotate(-45.001 51.446 51.446)"/>
		<ellipse cx="12.6" cy="12.6" rx="4.5" ry="4.5" transform="rotate(-45.001 12.555 12.555)"/>
	</g>
</svg>
	);
};

export default Spinner8;