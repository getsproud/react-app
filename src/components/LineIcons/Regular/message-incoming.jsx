import React from 'react';

function MessageIncoming(props) {
	const title = props.title || "message incoming";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59 40.1l-7.8 7.6v-5.2c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v7.6c0 2 1.7 3.6 3.7 3.6h7.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-5.4l7.8-7.7c.7-.7.7-1.8 0-2.5-.5-.5-1.6-.5-2.3.2z"/>
		<path d="M56.9 10.3H7.1c-3.2 0-5.8 2.6-5.8 5.8v31.4c0 3.2 2.6 5.8 5.8 5.8h27.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H7.1c-1.3 0-2.3-1-2.3-2.3V16.2l24.1 14.6c1 .6 2.1.9 3.2.9s2.2-.3 3.2-.9l24.1-14.6v14.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V16.1c-.2-3.2-2.9-5.8-6.1-5.8zM33.4 27.8c-.8.5-1.9.5-2.7 0l-23.2-14h49.1l-23.2 14z"/>
	</g>
</svg>
	);
};

export default MessageIncoming;