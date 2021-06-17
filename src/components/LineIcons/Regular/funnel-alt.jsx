import React from 'react';

function FunnelAlt(props) {
	const title = props.title || "funnel alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.8 62.7c-.4 0-.8-.1-1.1-.2L26 59c-1.3-.5-2.2-1.7-2.2-3.1v-20L7.2 15.2c-1-1.2-1.5-2.7-1.5-4.3V4.5c0-1.8 1.5-3.3 3.3-3.3h46.1c1.8 0 3.3 1.5 3.3 3.3v6.4c0 1.6-.5 3.1-1.5 4.3L40.1 35.9v23.6c0 1.1-.5 2.1-1.4 2.7-.6.3-1.2.5-1.9.5zm-9.4-6.9l9.3 3.4V35.3c0-.4.1-.8.4-1.1l17-21.2c.5-.6.7-1.3.7-2.1V4.8H9.1v6.1c0 .8.3 1.5.7 2.1L27 34.2c.3.3.4.7.4 1.1v20.5z"/>
	</g>
</svg>
	);
};

export default FunnelAlt;