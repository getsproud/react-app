import React from 'react';

function FastForward(props) {
	const title = props.title || "fast forward";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.4 30.8L31.5 7.4c-.5-.3-1.1-.4-1.6-.1-.5.3-.8.8-.8 1.3V27L2.4 7.4c-.5-.3-1.1-.3-1.6-.1-.5.3-.8.8-.8 1.3v46.7c0 .6.3 1.1.8 1.3.2.1.4.2.7.2.3 0 .6-.1.9-.3L29.1 37v18.3c0 .6.3 1.1.8 1.3.2.1.4.2.7.2.3 0 .6-.1.9-.3l31.9-23.3c.4-.3.6-.7.6-1.2s-.2-.9-.6-1.2zM3 52.4V11.6l26.1 19.1v2.7L3 52.4zm29.1 0V34.1 30 11.6L59.9 32 32.1 52.4z"/>
	</g>
</svg>
	);
};

export default FastForward;