import React from 'react';

function ChatAlt7(props) {
	const title = props.title || "chat alt 7";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M44.1 9.3H19.9C9.6 9.3 1.3 17.7 1.3 28v21c0 3.1 2.5 5.7 5.7 5.7h37.1c10.3 0 18.7-8.4 18.7-18.7v-8c0-10.3-8.4-18.7-18.7-18.7zM59.3 36c0 8.4-6.8 15.2-15.2 15.2H6.9c-1.2 0-2.2-1-2.2-2.2V28c0-8.4 6.8-15.2 15.2-15.2H44c8.4 0 15.2 6.8 15.2 15.2v8z"/>
		<path d="M16.7 29.4c-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6 1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.2-2.6-2.6-2.6z"/>
		<path d="M47.3 29.4c-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6 1.4 0 2.6-1.2 2.6-2.6 0-1.4-1.1-2.6-2.6-2.6z"/>
		<circle cx="32" cy="32" r="2.6"/>
	</g>
</svg>
	);
};

export default ChatAlt7;