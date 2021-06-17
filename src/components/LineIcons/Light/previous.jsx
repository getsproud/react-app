import React from 'react';

function Previous(props) {
	const title = props.title || "previous";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62 .2c-.5-.3-1.1-.2-1.5.1l-43 29.1V4.7c0-.8-.7-1.5-1.5-1.5H2.7c-.8 0-1.5.7-1.5 1.5v54.5c0 .8.7 1.5 1.5 1.5H16c.8 0 1.5-.7 1.5-1.5V34.7l43 29.1c.3.2.5.3.8.3.2 0 .5-.1.7-.2.5-.3.8-.8.8-1.3v-61c0-.7-.3-1.2-.8-1.4zM14.5 57.8H4.2V6.2h10.3v51.6zm45.3 1.9L18.9 32 59.8 4.3v55.4z"/>
	</g>
</svg>
	);
};

export default Previous;