import React from 'react';

function MessagePeopleAlt(props) {
	const title = props.title || "message people alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.1 1.6H34.6c-2 0-3.6 1.6-3.6 3.6v18c0 1.3.7 2.5 1.8 3.1.6.3 1.2.5 1.8.5.6 0 1.2-.2 1.8-.5l5.8-3.3h17c2 0 3.6-1.6 3.6-3.6V5.2c0-1.9-1.7-3.6-3.7-3.6zm.2 17.8c0 .1 0 .1-.1.1h-17c-.6 0-1.2.2-1.8.5l-5.8 3.3s-.1 0-.2-.1v-18c0-.1 0-.1.1-.1H59c.1 0 .1 0 .1.1v14.2z"/>
		<path d="M14.3 41.2c4.3 0 7.8-3.4 7.8-7.6S18.6 26 14.3 26s-7.8 3.4-7.8 7.6 3.5 7.6 7.8 7.6zm0-11.6c2.4 0 4.3 1.8 4.3 4.1s-1.9 4.1-4.3 4.1-4.3-1.9-4.3-4.1 1.9-4.1 4.3-4.1z"/>
		<path d="M17.5 45h-6.4c-5.4 0-9.9 4.4-9.9 9.9v5c0 1.4 1.1 2.5 2.5 2.5h21.1c1.4 0 2.5-1.1 2.5-2.5v-5c0-5.5-4.4-9.9-9.8-9.9zm6.3 13.9h-19v-4c0-3.5 2.9-6.4 6.4-6.4h6.4c3.5 0 6.4 2.9 6.4 6.4v4z"/>
	</g>
</svg>
	);
};

export default MessagePeopleAlt;