import React from 'react';

function ChevronDownCircle(props) {
	const title = props.title || "chevron down circle";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.8 25.2L32 35.9 16.2 25.2c-.7-.5-1.6-.3-2.1.4s-.3 1.6.4 2.1l16.2 11c.4.3.9.4 1.3.4s1-.1 1.3-.4l16.1-11c.7-.5.9-1.4.4-2.1-.4-.7-1.3-.9-2-.4z"/>
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
	</g>
</svg>
	);
};

export default ChevronDownCircle;