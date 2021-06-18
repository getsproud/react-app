import React from 'react';

function MessageBlock(props) {
	const title = props.title || "message block";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.8 36.6c-2 2-3.1 4.7-3.1 7.5s1.1 5.5 3.1 7.5 4.7 3.1 7.5 3.1 5.5-1.1 7.5-3.1c4.2-4.2 4.2-10.9 0-15.1-4.1-4-10.9-4-15 .1zm2.4 2.5c1.4-1.4 3.2-2.1 5.1-2.1 1.3 0 2.5.3 3.7 1l-9.8 9.8c-.7-1.1-1-2.4-1-3.7-.1-1.8.7-3.6 2-5zm10.2 10.1c-1.4 1.4-3.2 2.1-5.1 2.1-1.3 0-2.6-.4-3.7-1l9.8-9.8c1.7 2.8 1.3 6.4-1 8.7z"/>
		<path d="M56.9 9.2H7.1c-3.2 0-5.8 2.6-5.8 5.8v31.4c0 3.2 2.6 5.8 5.8 5.8h27.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H7.1c-1.3 0-2.3-1-2.3-2.3V15.1l24.1 14.6c1 .6 2.1.9 3.2.9s2.2-.3 3.2-.9l24.1-14.6v14.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V15c-.2-3.2-2.9-5.8-6.1-5.8zM33.4 26.7c-.8.5-1.9.5-2.7 0l-23.2-14h49.1l-23.2 14z"/>
	</g>
</svg>
	);
};

export default MessageBlock;