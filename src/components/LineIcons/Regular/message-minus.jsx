import React from 'react';

function MessageMinus(props) {
	const title = props.title || "message minus";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.7 42.5H44.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h15.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M56.9 10.5H7.1c-3.2 0-5.8 2.6-5.8 5.8v31.4c0 3.2 2.6 5.8 5.8 5.8h27.6c1 0 1.8-.8 1.8-1.8s-.9-1.7-1.9-1.7H7.1c-1.3 0-2.3-1-2.3-2.3V16.4l24 14.6c1 .6 2.1.9 3.2.9s2.2-.3 3.2-.9l24.1-14.6v14.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V16.3c-.1-3.2-2.8-5.8-6-5.8zM33.4 28c-.8.5-1.9.5-2.7 0L7.5 14h49.1L33.4 28z"/>
	</g>
</svg>
	);
};

export default MessageMinus;