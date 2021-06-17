import React from 'react';

function PlayStore(props) {
	const title = props.title || "play store";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.2 30.7L2.2.2c-.5-.3-1-.2-1.5 0C.3.5 0 1 0 1.5v61c0 .5.3 1 .7 1.3.3.1.5.2.8.2.2 0 .5-.1.7-.2l61-30.5c.5-.3.8-.8.8-1.3s-.3-1.1-.8-1.3zM3 58.1V5.9L23.2 32 3 58.1zm22.1-23.7l8.2 10.5L6.7 58.2l18.4-23.8zM6.7 5.8L33.2 19l-8.1 10.5L6.7 5.8zM36 43.6L27 32l9-11.6L59.1 32 36 43.6z"/>
	</g>
</svg>
	);
};

export default PlayStore;