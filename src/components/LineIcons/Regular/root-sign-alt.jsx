import React from 'react';

function RootSignAlt(props) {
	const title = props.title || "root sign alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.3 22.8H30.7c-1.2 0-2.2.7-2.7 1.8l-5.3 12.5-2.9-3.8c-.5-.7-1.3-1.1-2.2-1.1-.9-.1-1.7.3-2.3 1l-1.9 2.2c-.6.7-.6 1.8.2 2.5.7.6 1.8.6 2.5-.2l1.4-1.6 3.1 4c.6.7 1.4 1.1 2.3 1.1h.4c1-.1 1.9-.8 2.3-1.7l5.5-13.1h18.2c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M58 1.3H6C3.4 1.3 1.3 3.4 1.3 6v52c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V6c-.1-2.6-2.3-4.7-4.9-4.7zM59.3 58c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3V6c0-.7.6-1.3 1.3-1.3h52c.7 0 1.3.6 1.3 1.3v52z"/>
	</g>
</svg>
	);
};

export default RootSignAlt;