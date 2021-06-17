import React from 'react';

function WhiteboardAlt2(props) {
	const title = props.title || "whiteboard alt 2";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 22.3H51.3L36.9 6.4c.1-.4.2-.8.2-1.3C37.1 2.3 34.8 0 32 0s-5.1 2.3-5.1 5.1c0 .4.1.9.2 1.3L12.7 22.3H1.5c-.8 0-1.5.7-1.5 1.5v38.7c0 .8.7 1.5 1.5 1.5h60.9c.8 0 1.5-.7 1.5-1.5V23.8c.1-.9-.6-1.5-1.4-1.5zM32 3c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1-2.1-.9-2.1-2.1S30.8 3 32 3zm-3.3 6c.9.7 2 1.2 3.3 1.2 1.2 0 2.4-.5 3.3-1.2l12 13.2H16.7L28.7 9zM61 61H3V25.3h58V61z"/>
	</g>
</svg>
	);
};

export default WhiteboardAlt2;