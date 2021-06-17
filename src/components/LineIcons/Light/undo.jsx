import React from 'react';

function Undo(props) {
	const title = props.title || "undo";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.4 20H17.3V6.4c0-.6-.4-1.2-.9-1.4s-1.2-.1-1.6.4L.4 20.5c-.5.6-.5 1.5 0 2.1l14.3 15.1c.3.3.7.5 1.1.5.2 0 .4 0 .6-.1.6-.2.9-.8.9-1.4V23h28.1C54 23 61 30.4 61 39.5S54 56 45.4 56H29.8c-.8 0-1.5.7-1.5 1.5S29 59 29.8 59h15.6C55.7 59 64 50.2 64 39.5S55.6 20 45.4 20zM14.3 32.8L3.6 21.5l10.7-11.3v22.6z"/>
	</g>
</svg>
	);
};

export default Undo;