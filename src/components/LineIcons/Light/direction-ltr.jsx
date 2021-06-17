import React from 'react';

function DirectionLtr(props) {
	const title = props.title || "direction ltr";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M23.8 24.2h2.1V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V3h9.8v37c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V3h14.8c.8 0 1.5-.7 1.5-1.5S57.4 0 56.6 0H23.9h-.1C17 0 11.7 5.3 11.7 12.1c0 6.6 5.4 12.1 12.1 12.1zm0-21.2h2.1v18.1h-2.1c-5 0-9.1-4.1-9.1-9.1s4-9 9.1-9z"/>
		<path d="M48.6 45.4c-.6-.5-1.6-.4-2.1.2-.5.6-.4 1.6.2 2.1l6.6 5.3H7.4c-.8 0-1.5.7-1.5 1.5S6.6 56 7.4 56h45.9l-6.6 5.3c-.6.5-.7 1.5-.2 2.1.3.4.7.6 1.2.6.3 0 .7-.1.9-.3l8.2-6.6c.8-.6 1.2-1.5 1.2-2.5s-.4-1.9-1.2-2.5l-8.2-6.7z"/>
	</g>
</svg>
	);
};

export default DirectionLtr;