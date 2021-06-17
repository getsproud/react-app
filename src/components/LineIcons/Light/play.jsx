import React from 'react';

function Play(props) {
	const title = props.title || "play";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M9.3 64c-.6 0-1.3-.2-1.8-.5-1.2-.7-1.9-1.8-1.9-3.2V3.6c0-1.3.7-2.5 1.9-3.2 1.2-.7 2.7-.6 3.8.1L56.8 29c1.1.7 1.7 1.8 1.7 3s-.6 2.4-1.7 3L11.3 63.4c-.6.4-1.3.6-2 .6zm0-61c-.2 0-.4.1-.4.1-.2.1-.4.2-.4.5v56.7c0 .3.2.5.3.6.1.1.4.2.8 0l45.5-28.4c.3-.2.3-.4.3-.5 0-.1 0-.3-.3-.5L9.6 3.1C9.5 3 9.4 3 9.3 3z"/>
	</g>
</svg>
	);
};

export default Play;