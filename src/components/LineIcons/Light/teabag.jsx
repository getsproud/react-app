import React from 'react';

function Teabag(props) {
	const title = props.title || "teabag";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M14 30.7h5.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H14c-.8 0-1.5.7-1.5 1.5 0 .9.6 1.5 1.5 1.5z"/>
		<path d="M61.8 44.5l-4.7-2.4V21.3C57.1 9.6 47.7 0 36.2 0 24.4 0 16.3 6.6 15.3 16.6H6.2c-1.4 0-2.6 1-2.8 2.4l-1.8 7.7c-.1.4-.1.7-.1.9V61c0 1.6 1.3 3 3 3h24.8c1.6 0 2.8-1.3 2.9-3V27.5c0-.2 0-.3-.1-.5l-1.9-7.9c-.3-1.4-1.5-2.4-2.8-2.4h-8.9C19.3 8.3 26 3 36.2 3c9.9 0 17.9 8.2 17.9 18.3v20.8l-4.7 2.4c-.5.3-.8.8-.8 1.3v16.6c0 .8.7 1.5 1.5 1.5h11.1c.8 0 1.5-.7 1.5-1.5V45.9c-.1-.6-.4-1.1-.9-1.4zM27.2 19.6s0 .1 0 0l1.9 7.7c0 .1 0 .2.1.3V61H4.4V27.6l1.9-8h20.9zM59.6 61h-8.1V46.8l4-2 4 2V61z"/>
	</g>
</svg>
	);
};

export default Teabag;