import React from 'react';

function BackwardAlt(props) {
	const title = props.title || "backward alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.2 7.3c-.5-.3-1.1-.2-1.6.1L34.9 27V8.7c0-.6-.3-1.1-.8-1.3-.5-.3-1.1-.2-1.6.1L.6 30.8c-.4.3-.6.7-.6 1.2s.2.9.6 1.2l31.9 23.3c.3.2.6.3.9.3.2 0 .5-.1.7-.2.5-.3.8-.8.8-1.3V37l26.7 19.5c.3.2.6.3.9.3.2 0 .5-.1.7-.2.5-.3.8-.8.8-1.3V8.6c0-.5-.3-1-.8-1.3zM4.1 32L32 11.6V52.4L4.1 32zM61 52.4L34.9 33.3v-2.6L61 11.6v40.8z"/>
	</g>
</svg>
	);
};

export default BackwardAlt;