import React from 'react';

function Plate(props) {
	const title = props.title || "plate";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
		<path d="M32 10.9c-11.7 0-21.1 9.5-21.1 21.1 0 11.7 9.5 21.1 21.1 21.1 11.7 0 21.1-9.5 21.1-21.1 0-11.7-9.4-21.1-21.1-21.1zm0 39.2C22 50.1 13.9 42 13.9 32c0-10 8.1-18.1 18.1-18.1 10 0 18.1 8.1 18.1 18.1 0 10-8.1 18.1-18.1 18.1z"/>
	</g>
</svg>
	);
};

export default Plate;