import React from 'react';

function Farenheit(props) {
	const title = props.title || "farenheit";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 3.4H37.8c-3.4 0-6.2 2.8-6.2 6.3v51.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V30.4h24c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-24V9.7c0-1.8 1.5-3.3 3.2-3.3h24.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M9.9 1.7H5.5C2.5 1.7 0 4.1 0 7.2v4.6c0 3 2.5 5.5 5.5 5.5h4.4c3 0 5.5-2.5 5.5-5.5V7.2c0-3.1-2.5-5.5-5.5-5.5zm2.5 10c0 1.4-1.1 2.5-2.5 2.5H5.5c-1.4 0-2.5-1.1-2.5-2.5V7.2c0-1.4 1.1-2.5 2.5-2.5h4.4c1.4 0 2.5 1.1 2.5 2.5v4.5z"/>
	</g>
</svg>
	);
};

export default Farenheit;