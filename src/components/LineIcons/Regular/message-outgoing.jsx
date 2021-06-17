import React from 'react';

function MessageOutgoing(props) {
	const title = props.title || "message outgoing";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 38.7s0-.1 0 0c-.8-.9-1.9-1.5-3.1-1.5h-8.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h7.1L44.4 51.3c-.7.6-.8 1.8-.1 2.5.3.4.8.6 1.3.6.4 0 .8-.1 1.2-.5l11.6-10.5v6.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-8.7c-.1-.9-.4-1.7-1-2.4z"/>
		<path d="M56.9 9.6H7.1c-3.2 0-5.8 2.6-5.8 5.8v31.4c0 3.2 2.6 5.8 5.8 5.8h27.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H7.1c-1.3 0-2.3-1-2.3-2.3V15.6l24.1 14.6c1 .6 2.1.9 3.2.9s2.2-.3 3.2-.9l24.1-14.6v14.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V15.4c-.2-3.2-2.9-5.8-6.1-5.8zM33.4 27.2c-.8.5-1.9.5-2.7 0l-23.2-14h49.1l-23.2 14z"/>
	</g>
</svg>
	);
};

export default MessageOutgoing;