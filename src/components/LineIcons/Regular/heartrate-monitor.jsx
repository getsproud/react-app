import React from 'react';

function HeartrateMonitor(props) {
	const title = props.title || "heartrate monitor";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.3 40.3v-25c0-2.6-2.1-4.8-4.8-4.8H9.4c-2.6 0-4.8 2.1-4.8 4.8v25c-2 .6-3.4 2.4-3.4 4.5v3.9c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8v-3.9c0-2.1-1.5-3.9-3.5-4.5zM8.2 29.4h10.1c.6 0 1.1-.3 1.4-.7l2.9-4.1 4.8 8.6c.3.5.8.9 1.5.9h.1c.6 0 1.1-.3 1.5-.8l3.2-4.7h22.2v11.5H8.2V29.4zM9.4 14h45.1c.7 0 1.3.6 1.3 1.3v9.9H32.7c-.6 0-1.1.3-1.5.8l-2.1 3-4.8-8.6c-.3-.5-.8-.9-1.4-.9-.6 0-1.2.2-1.5.7l-4 5.6H8.2V15.2c0-.7.6-1.2 1.2-1.2zm49.9 34.8c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3v-3.9c0-.7.6-1.3 1.3-1.3h52c.7 0 1.3.6 1.3 1.3v3.9z"/>
	</g>
</svg>
	);
};

export default HeartrateMonitor;