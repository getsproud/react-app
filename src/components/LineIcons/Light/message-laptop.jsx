import React from 'react';

function MessageLaptop(props) {
	const title = props.title || "message laptop";

	return (
		<svg height="64" id="Layer_2" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M16.8 26h30.4c1.7 0 3.2-1.4 3.2-3.2v-19c0-1.7-1.4-3.2-3.2-3.2H16.8c-1.7 0-3.2 1.4-3.2 3.2v19c0 1.7 1.4 3.2 3.2 3.2zm30.4-3H16.8c-.1 0-.2-.1-.2-.2V5.4L30 13.5c.6.4 1.3.6 2 .6s1.4-.2 2-.6l13.4-8.1v17.4c0 .1-.1.2-.2.2zM19.6 3.6h24.9L32.4 11c-.3.2-.6.2-.9 0L19.6 3.6z"/>
		<path d="M63.9 58.4l-3.5-18.7c.2-.5.3-1 .3-1.5V14.6c0-2.3-1.8-4.1-4.1-4.1-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5c.6 0 1.1.5 1.1 1.1v23.6c0 .6-.5 1.1-1.1 1.1H7.3c-.6 0-1.1-.5-1.1-1.1V14.6c0-.6.5-1.1 1.1-1.1.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5c-2.3 0-4.1 1.9-4.1 4.1v23.6c0 .5.1 1 .3 1.5L.1 58.4c-.2 1.2.1 2.5.9 3.4.8.9 1.9 1.5 3.1 1.5h55.8c1.2 0 2.3-.5 3.1-1.5.8-.9 1.2-2.1.9-3.4zM60.7 60c-.1.1-.4.4-.8.4H4.1c-.4 0-.7-.2-.8-.4-.3-.3-.3-.7-.3-1l3.1-16.6h51.7L61 59c0 .3 0 .7-.3 1z"/>
	</g>
</svg>
	);
};

export default MessageLaptop;