import React from 'react';

function Inbox(props) {
	const title = props.title || "inbox";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 30.5c-.8 0-1.5.7-1.5 1.5v20.5c0 4.7-3.6 8.5-8.1 8.5H11.1C6.6 61 3 57.2 3 52.5V32c0-.8-.7-1.5-1.5-1.5S0 31.2 0 32v20.5C0 58.8 5 64 11.1 64H53c6 0 11-5.2 11-11.5V32c0-.8-.7-1.5-1.5-1.5z"/>
		<path d="M30.9 44.1c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4l11.1-11c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0l-8.5 8.4V1.5C33.5.7 32.8 0 32 0s-1.5.7-1.5 1.5v38L22 31c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l11 11z"/>
	</g>
</svg>
	);
};

export default Inbox;