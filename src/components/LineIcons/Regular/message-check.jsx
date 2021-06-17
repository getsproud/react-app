import React from 'react';

function MessageCheck(props) {
	const title = props.title || "message check";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.7 41.7l-8.4 8.2c-.4.4-1.1.4-1.5 0l-4.7-4.6c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l4.7 4.6c.9.9 2 1.3 3.2 1.3s2.3-.4 3.2-1.3l8.4-8.2c.7-.7.7-1.8 0-2.5-.6-.7-1.7-.7-2.4 0z"/>
		<path d="M56.9 10.3H7.1c-3.2 0-5.8 2.6-5.8 5.8v31.4c0 3.2 2.6 5.8 5.8 5.8h27.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H7.1c-1.3 0-2.3-1-2.3-2.3V16.3l24.1 14.6c1 .6 2.1.9 3.2.9s2.2-.3 3.2-.9l24.1-14.6v14.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V16.1c-.2-3.2-2.9-5.8-6.1-5.8zM33.4 27.9c-.8.5-1.9.5-2.7 0l-23.2-14h49.1l-23.2 14z"/>
	</g>
</svg>
	);
};

export default MessageCheck;