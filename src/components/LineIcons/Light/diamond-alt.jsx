import React from 'react';

function DiamondAlt(props) {
	const title = props.title || "diamond alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.6 23.8L54.1 2.2c-.4-.9-1-1.5-1.9-1.9-.1-.1-.3-.2-.4-.2-.2-.1-.4-.1-.7-.1H13.2c-1.4 0-2.7.8-3.3 2.2L.4 23.8c-.5 1.2-.4 2.6.5 3.7l28.3 34.8c.5.7 1.1 1.1 1.9 1.3.2.1.3.2.6.3.1 0 .3.1.4.1.4 0 .7-.1 1-.4.7-.2 1.4-.6 1.9-1.3l28.4-34.9c.6-1 .7-2.4.2-3.6zM49.3 3l-6.5 19.3-9-19.3h15.5zm-8.6 21.9H23.3L32 6.3l8.7 18.6zM30.2 3L21 22.5 13.6 3h16.6zM11.5 5.9l7.2 19H3.2l8.3-19zM5 27.9h14.8l9.1 29.4L5 27.9zm27 29.4l-9-29.4h18.1L32 57.3zm3.2-.2l9-29.3H59L35.2 57.1zm9.9-32.2l6.8-20.3 8.9 20.3H45.1z"/>
	</g>
</svg>
	);
};

export default DiamondAlt;