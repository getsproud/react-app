import React from 'react';

function Door(props) {
	const title = props.title || "door";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.2 0H11.8C9.9 0 8.3 1.6 8.3 3.5v57c0 1.9 1.6 3.5 3.5 3.5h40.4c1.9 0 3.5-1.6 3.5-3.5v-57c0-1.9-1.6-3.5-3.5-3.5zm.5 60.5c0 .3-.2.5-.5.5H11.8c-.3 0-.5-.2-.5-.5v-57c0-.3.2-.5.5-.5h40.4c.3 0 .5.2.5.5v57z"/>
		<path d="M44.5 25c-3.1 0-5.7 2.5-5.7 5.7s2.5 5.7 5.7 5.7c3.1 0 5.7-2.5 5.7-5.7S47.6 25 44.5 25zm0 8.3c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7-.1 1.5-1.3 2.7-2.7 2.7z"/>
	</g>
</svg>
	);
};

export default Door;