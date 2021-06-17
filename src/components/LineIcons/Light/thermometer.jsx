import React from 'react';

function Thermometer(props) {
	const title = props.title || "thermometer";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M41.3 38.5V4.6c0-2.5-2.1-4.6-4.6-4.6h-9.3c-2.5 0-4.6 2.1-4.6 4.6v33.9c-3.3 2.8-5.2 6.7-5.2 11.1C17.5 57.5 24 64 32 64s14.5-6.5 14.5-14.4c0-4.3-1.9-8.3-5.2-11.1zM32 61c-6.3 0-11.5-5.1-11.5-11.4 0-3.6 1.7-7 4.6-9.1.4-.3.6-.7.6-1.2V4.6c0-.9.7-1.6 1.6-1.6h9.3c.9 0 1.6.7 1.6 1.6v34.6c0 .5.2.9.6 1.2 2.9 2.2 4.6 5.5 4.6 9.1C43.5 55.9 38.3 61 32 61z"/>
		<path d="M33.5 45.7V11.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v34.4c-1.5.6-2.7 2.1-2.7 3.8 0 2.3 1.9 4.1 4.2 4.1s4.2-1.9 4.2-4.1c0-1.7-1.2-3.2-2.7-3.8z"/>
	</g>
</svg>
	);
};

export default Thermometer;