import React from 'react';

function Enter(props) {
	const title = props.title || "enter";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M30.9 41.5c.3.3.7.5 1.1.5.4 0 .7-.1 1-.4l7.8-7.3c.6-.6 1-1.4 1-2.2 0-.8-.3-1.6-1-2.2L33 22.5c-.6-.6-1.6-.5-2.1.1-.6.6-.5 1.6.1 2.1l6.2 5.8H9.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h27.4L31 39.4c-.6.5-.7 1.5-.1 2.1z"/>
		<path d="M51.4 0H34.8c-2.4 0-4.3 1.9-4.3 4.3v11.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V4.3c0-.7.6-1.3 1.3-1.3h16.6c.7 0 1.3.6 1.3 1.3v55.5c0 .7-.6 1.3-1.3 1.3H34.8c-.7 0-1.3-.6-1.3-1.3V48.6c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v11.1c0 2.4 1.9 4.3 4.3 4.3h16.6c2.4 0 4.3-1.9 4.3-4.3V4.3c0-2.4-1.9-4.3-4.3-4.3z"/>
	</g>
</svg>
	);
};

export default Enter;