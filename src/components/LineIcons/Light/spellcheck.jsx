import React from 'react';

function Spellcheck(props) {
	const title = props.title || "spellcheck";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M22.7 29.7c-.4-.7-.9-1-1.5-1h-6.7c-.7 0-1.4.4-1.5 1L.1 58.9c-.5 1.2.4 2.4 1.5 2.4h5.5c.7 0 1.3-.5 1.5-1l1.8-4.5h13.8l1.7 4.5c.1.7.8 1 1.5 1h5.8c1.5-.1 2.3-1.3 1.8-2.4L22.7 29.7zm-9.6 18l4.6-11.8 4.6 11.8h-9.2z"/>
		<path d="M63.6 3.1c-.6-.6-1.5-.6-2.1 0l-24 23.8-6.5-6.4c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l7 6.9c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7L63.6 5.3c.5-.6.5-1.6 0-2.2z"/>
	</g>
</svg>
	);
};

export default Spellcheck;