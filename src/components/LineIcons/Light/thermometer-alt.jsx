import React from 'react';

function ThermometerAlt(props) {
	const title = props.title || "thermometer alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M41.3 38.5V4.6c0-2.5-2.1-4.6-4.6-4.6h-9.3c-2.5 0-4.6 2.1-4.6 4.6v33.9c-3.3 2.8-5.2 6.7-5.2 11.1C17.6 57.5 24 64 32 64s14.4-6.5 14.4-14.4c0-4.3-1.8-8.3-5.1-11.1zM32 61c-6.3 0-11.4-5.1-11.4-11.4 0-3.6 1.7-7 4.6-9.1.4-.3.6-.7.6-1.2V4.6c0-.9.7-1.6 1.6-1.6h9.3c.9 0 1.6.7 1.6 1.6v34.6c0 .5.2.9.6 1.2 2.9 2.2 4.6 5.5 4.6 9.1C43.4 55.9 38.3 61 32 61z"/>
		<path d="M33.5 45.3V31c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v14.3c-1.5.6-2.5 2-2.5 3.7 0 2.2 1.8 4 4 4s4-1.8 4-4c0-1.7-1-3.1-2.5-3.7z"/>
	</g>
</svg>
	);
};

export default ThermometerAlt;