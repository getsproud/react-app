import React from 'react';

function CableCar(props) {
	const title = props.title || "cable car";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M64 1.3c-.1-.8-.9-1.4-1.7-1.2l-61 10.1c-.8.1-1.4.9-1.2 1.7.1.7.8 1.3 1.5 1.3h.2l28.7-4.8v11.1H15.3C8.4 19.4 2.8 25 2.8 31.9v19.6C2.8 58.4 8.4 64 15.3 64h33.5c6.9 0 12.5-5.6 12.5-12.5V31.9c0-6.9-5.6-12.5-12.5-12.5H33.5V7.8L62.7 3c.8-.1 1.4-.9 1.3-1.7zM48.7 61H15.3c-5.2 0-9.5-4.3-9.5-9.5v-6.9h52.5v6.9c-.1 5.2-4.3 9.5-9.6 9.5zm9.5-29.1v9.7H5.8v-9.7c0-5.2 4.3-9.5 9.5-9.5h33.5c5.2 0 9.4 4.3 9.4 9.5z"/>
	</g>
</svg>
	);
};

export default CableCar;