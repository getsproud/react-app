import React from 'react';

function Folder(props) {
	const title = props.title || "folder";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.8 19.1c0-.1.1-.3.1-.4v-5.3c0-2.3-1.9-4.2-4.2-4.2H31.5c-.2 0-.4 0-.6.1L30 7c-.4-1-1.4-1.7-2.5-1.7H2.7C1.2 5.3 0 6.5 0 8v48c0 1.5 1.2 2.7 2.7 2.7h58.7c1.5 0 2.7-1.2 2.7-2.7V21.3c-.1-.9-.6-1.7-1.3-2.2zm-4.1-6.9c.6 0 1.2.5 1.2 1.2v5.3H34.7l-2.6-6.5h26.6zM61 55.7H3V8.3h24.3l4.6 11.4c.5 1.1 1.6 1.9 2.8 1.9H61v34.1z"/>
	</g>
</svg>
	);
};

export default Folder;