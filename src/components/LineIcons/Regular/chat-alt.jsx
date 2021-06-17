import React from 'react';

function ChatAlt(props) {
	const title = props.title || "chat alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M6.8 56c-1 0-1.9-.3-2.8-.8-1.7-1-2.8-2.8-2.8-4.8V13.6C1.3 10.5 3.7 8 6.8 8h35.9c11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1H22.5c-.4 0-.7.1-1 .3L9.6 55.2c-.9.5-1.9.8-2.8.8zm0-44.5c-1.1 0-2.1.9-2.1 2.1v36.8c0 1 .7 1.6 1 1.8.6.4 1.4.4 2.1 0l11.9-6.7c.8-.5 1.8-.7 2.8-.7h20.2c9.1 0 16.6-7.4 16.6-16.6 0-9.2-7.4-16.6-16.6-16.6H6.8z"/>
	</g>
</svg>
	);
};

export default ChatAlt;