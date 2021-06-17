import React from 'react';

function LaptopAltSwitch(props) {
	const title = props.title || "laptop alt switch";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 42.6h-3.9V12.2c0-2.9-2.3-5.2-5.2-5.2H10.7c-2.9 0-5.2 2.3-5.2 5.2v30.4h-4c-.8 0-1.5.7-1.5 1.5v4.4C0 53.2 3.8 57 8.5 57h47c4.7 0 8.5-3.8 8.5-8.5v-4.4c0-.8-.7-1.5-1.5-1.5zm-54-30.4c0-1.2 1-2.2 2.2-2.2h42.6c1.2 0 2.2 1 2.2 2.2v30.4H39.1c-.4 0-.9.2-1.1.5l-1.5 1.8H27l-1.6-1.8c-.3-.3-.7-.5-1.1-.5H8.5V12.2zM61 48.5c0 3-2.5 5.5-5.5 5.5h-47c-3 0-5.5-2.5-5.5-5.5v-2.9h20.6l1.6 1.8c.3.3.7.5 1.1.5h10.8c.4 0 .9-.2 1.1-.5l1.5-1.8H61v2.9z"/>
		<path d="M29.9 17H34c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.4-1.5H30c-.8 0-1.5.7-1.5 1.5s.6 1.5 1.4 1.5z"/>
	</g>
</svg>
	);
};

export default LaptopAltSwitch;