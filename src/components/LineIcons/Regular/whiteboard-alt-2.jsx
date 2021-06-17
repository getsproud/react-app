import React from 'react';

function WhiteboardAlt2(props) {
	const title = props.title || "whiteboard alt 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 22.4h-6.5L37.1 7.6c.1-.4.1-.7.1-1.1 0-2.9-2.3-5.2-5.2-5.2-2.9 0-5.2 2.3-5.2 5.2 0 .4.1.8.1 1.1L13.5 22.4H7c-3.2 0-5.8 2.6-5.8 5.8V57c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V28.2c-.1-3.2-2.7-5.8-5.8-5.8zM32 4.8c.9 0 1.7.8 1.7 1.7s-.8 1.6-1.7 1.6-1.7-.8-1.7-1.7.8-1.6 1.7-1.6zm-3.1 5.8c.9.6 1.9 1 3.1 1 1.2 0 2.2-.4 3.1-1l10.7 11.8H18.2l10.7-11.8zM59.2 57c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V28.2c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3V57z"/>
	</g>
</svg>
	);
};

export default WhiteboardAlt2;