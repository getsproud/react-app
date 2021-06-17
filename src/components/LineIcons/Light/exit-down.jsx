import React from 'react';

function ExitDown(props) {
	const title = props.title || "exit down";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M29.8 40.9c.6.6 1.4 1 2.2 1 .8 0 1.6-.3 2.2-1l7.3-7.8c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1l-5.8 6.2V9.8c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v27.4L24.6 31c-.6-.6-1.5-.6-2.1-.1-.6.6-.6 1.5-.1 2.1l7.4 7.9z"/>
		<path d="M59.7 30.5H48.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h11.1c.7 0 1.3.6 1.3 1.3v16.6c0 .7-.6 1.3-1.3 1.3H4.3c-.7 0-1.3-.6-1.3-1.3V34.8c0-.7.6-1.3 1.3-1.3h11.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H4.3c-2.4 0-4.3 1.9-4.3 4.3v16.6c0 2.4 1.9 4.3 4.3 4.3h55.5c2.4 0 4.3-1.9 4.3-4.3V34.8c-.1-2.4-2-4.3-4.4-4.3z"/>
	</g>
</svg>
	);
};

export default ExitDown;