import React from 'react';

function DoorAlt(props) {
	const title = props.title || "door alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M44.5 25c-3.1 0-5.7 2.5-5.7 5.7 0 3.1 2.5 5.7 5.7 5.7s5.7-2.5 5.7-5.7c-.1-3.2-2.6-5.7-5.7-5.7zm0 8.3c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7c-.1 1.5-1.3 2.7-2.7 2.7z"/>
		<path d="M62.5 61h-6.8V3.5c0-1.9-1.6-3.5-3.5-3.5H11.8C9.9 0 8.3 1.6 8.3 3.5V61H1.5c-.8 0-1.5.7-1.5 1.5S.7 64 1.5 64H62.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5zm-51.2 0V3.5c0-.3.2-.5.5-.5h40.4c.3 0 .5.2.5.5V61H11.3z"/>
	</g>
</svg>
	);
};

export default DoorAlt;