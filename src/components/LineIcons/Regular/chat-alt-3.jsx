import React from 'react';

function ChatAlt3(props) {
	const title = props.title || "chat alt 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M30.7 58.7c-.4 0-.8-.1-1.2-.3C9.4 49.4 1.3 40.6 1.3 28c0-12.5 10.5-22.7 23.5-22.7h14.5c13 0 23.5 10.2 23.5 22.7S52.3 50.7 39.3 50.7h-5.5v5c0 1-.5 2-1.4 2.5-.5.4-1.1.5-1.7.5zM24.8 8.8c-11 0-20 8.6-20 19.2 0 11 7.2 18.6 25.5 27v-4.7c0-1.7 1.3-3 3-3h6c11 0 20-8.6 20-19.2s-9-19.2-20-19.2H24.8z"/>
	</g>
</svg>
	);
};

export default ChatAlt3;