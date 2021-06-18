import React from 'react';

function ChatRemove(props) {
	const title = props.title || "chat remove";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.6 10.1C47.1 3.6 38.1.5 28.9 1.4c-14.2 1.5-25.5 12.8-27 27-.7 6.6.7 13.1 4.1 18.7L1.7 58.3c-.5 1.3-.2 2.7.9 3.6.6.6 1.4.9 2.2.9.5 0 1-.1 1.5-.4l9.9-4.9c5.7 3.5 12.2 5 18.9 4.4 14.4-1.4 25.8-12.8 27.3-27.1.9-9.2-2.3-18.2-8.8-24.7zm5.3 24.3c-1.3 12.7-11.4 22.8-24.1 24-6.3.6-12.4-.9-17.6-4.4-.5-.3-1.2-.4-1.8-.1L5.2 59l4.4-11.4c.2-.5.1-1.1-.2-1.6-3.3-5.1-4.7-11.1-4-17.3C6.7 16.2 16.7 6.2 29.2 4.9c1-.1 1.9-.1 2.9-.1 7.1 0 13.9 2.8 19 7.8 5.7 5.7 8.6 13.7 7.8 21.8z"/>
		<path d="M39.7 30.3H24.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h15.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default ChatRemove;