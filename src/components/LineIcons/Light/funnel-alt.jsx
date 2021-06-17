import React from 'react';

function FunnelAlt(props) {
	const title = props.title || "funnel alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.6 0H5.4c-.9 0-1.5.7-1.5 1.5v8.2c0 1.6.6 3.1 1.6 4.3l18.1 21.6v22.1c0 .6.4 1.2 1 1.4l13.8 4.8c.2.1.3.1.5.1.3 0 .6-.1.9-.3.4-.3.6-.7.6-1.2V35.6L58.6 14c1-1.2 1.6-2.7 1.6-4.3V1.5C60.1.7 59.5 0 58.6 0zm-1.5 9.7c0 .9-.3 1.7-.9 2.4l-18.5 22c-.2.3-.4.6-.4 1v25.3l-10.8-3.8V35c0-.4-.1-.7-.4-1L7.6 12c-.6-.7-.9-1.5-.9-2.4V3H57v6.7z"/>
	</g>
</svg>
	);
};

export default FunnelAlt;