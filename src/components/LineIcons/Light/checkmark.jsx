import React from 'react';

function Checkmark(props) {
	const title = props.title || "checkmark";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M22.3 52.6c-1 0-2.1-.4-2.9-1.2L.4 32.8c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0l19 18.6c.4.4 1.1.4 1.5 0l38.4-37.5c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1L25.2 51.4c-.8.8-1.8 1.2-2.9 1.2z"/>
	</g>
</svg>
	);
};

export default Checkmark;