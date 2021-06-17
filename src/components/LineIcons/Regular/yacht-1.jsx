import React from 'react';

function Yacht1(props) {
	const title = props.title || "yacht 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.9 45.1H31.6v-4.4h17.7c.6 0 1.2-.3 1.5-.9s.3-1.2 0-1.7l-19.4-36c-.4-.7-1.2-1.1-2-.9-.8.2-1.3.9-1.3 1.7v7.6L13.2 38.2c-.3.5-.3 1.2 0 1.7s.9.9 1.5.9H28v4.4H6c-1 0-1.8.8-1.8 1.8v6c0 5.4 4.4 9.8 9.8 9.8h35.7c5.4 0 9.8-4.4 9.8-9.8v-6.2c.1-.9-.7-1.7-1.6-1.7zM31.6 9.9l14.7 27.3H31.6V9.9zm-3.5 8v19.3H17.7l10.4-19.3zm28 35.1c0 3.4-2.8 6.3-6.3 6.3H14.1c-3.4 0-6.3-2.8-6.3-6.3v-4.4H56V53z"/>
	</g>
</svg>
	);
};

export default Yacht1;