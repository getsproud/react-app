import React from 'react';

function PinAlt(props) {
	const title = props.title || "pin alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56 35.4l-7.2-11.6V4.5c0-2.5-2-4.5-4.5-4.5H19.8c-2.5 0-4.5 2-4.5 4.5v19.3L8 35.4c-.9 1.4-.9 3.1-.1 4.6.8 1.5 2.3 2.3 3.9 2.3h13.4l5.3 20.6c.2.7.8 1.1 1.5 1.1s1.3-.5 1.5-1.1l5.3-20.6h13.4c1.7 0 3.1-.9 3.9-2.3.8-1.5.8-3.2-.1-4.6zM18.3 4.5c0-.8.7-1.5 1.5-1.5h24.5c.8 0 1.5.7 1.5 1.5v18.2H18.3V4.5zm13.7 52l-3.6-14.2h7.3L32 56.5zm21.5-18c-.1.2-.5.8-1.3.8H11.8c-.8 0-1.2-.5-1.3-.8s-.4-.8 0-1.5l7-11.2h28.8l7 11.2c.6.7.3 1.3.2 1.5z"/>
	</g>
</svg>
	);
};

export default PinAlt;