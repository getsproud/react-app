import React from 'react';

function BaloonAlt(props) {
	const title = props.title || "baloon alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.8 21.8C53.8 9.8 44 0 32 0S10.2 9.8 10.2 21.8c0 22.4 14 29.5 19.4 31.4l-8.2 8.2c-.4.4-.6 1.1-.3 1.6.2.6.8.9 1.4.9h19.2c.6 0 1.2-.4 1.4-.9s.1-1.2-.3-1.6l-8.2-8.2c5.2-1.9 19.2-8.9 19.2-31.4zM38 61H26l6-6 6 6zm-6-10.2c-2.4-.5-18.8-5.2-18.8-29C13.2 11.5 21.6 3 32 3s18.8 8.4 18.8 18.8c0 23.9-16.4 28.5-18.8 29z"/>
		<path d="M36.5 11.5c-.6.6-.7 1.5-.1 2.1 1.1 1.2 3.8 5 3.2 8-.2 1.4-1.2 2.6-2.9 3.5-.7.4-1 1.3-.6 2 .3.5.8.8 1.3.8.2 0 .5-.1.7-.2 2.5-1.4 4-3.3 4.4-5.7.8-5.1-3.8-10.3-4-10.5-.4-.5-1.3-.6-2 0z"/>
	</g>
</svg>
	);
};

export default BaloonAlt;