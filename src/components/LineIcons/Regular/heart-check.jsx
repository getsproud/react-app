import React from 'react';

function HeartCheck(props) {
	const title = props.title || "heart check";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.2 59.8L43.6 41.2c8.2-9.5 7.8-23.8-1.2-32.8C33-1.1 17.7-1.1 8.3 8.3c-9.4 9.4-9.4 24.7 0 34.1 4.7 4.7 10.9 7.1 17.1 7.1 5.6 0 11.3-2 15.8-5.9l18.6 18.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.6.7-1.8 0-2.4zM10.8 40c-8-8-8-21.1 0-29.2 4-4 9.3-6 14.6-6s10.6 2 14.6 6c8 8 8 21.1 0 29.2-8.1 8-21.2 8-29.2 0z"/>
		<path d="M30.1 15c-1.6 0-3.1.5-4.5 1.5l-.3.3c-.1-.1-.2-.2-.3-.2-1.3-1-2.8-1.5-4.5-1.5-2.2 0-4.2.9-5.6 2.4-1.4 1.5-2.2 3.6-2.2 5.8 0 2.2.8 4.3 2.6 6.4 1.4 1.7 3.3 3.3 5.6 5.2l.1.1c.7.6 1.6 1.3 2.4 2.1.6.5 1.3.7 2 .7s1.4-.3 2-.7c.9-.8 1.7-1.5 2.4-2.1 2.2-1.9 4.2-3.5 5.6-5.2 1.7-2.1 2.6-4.1 2.6-6.4 0-2.2-.8-4.3-2.2-5.8-1.5-1.7-3.5-2.6-5.7-2.6zm2.6 12.4c-1.2 1.5-3 3-5.2 4.8-.7.6-1.4 1.2-2.2 1.9l-2.1-1.8-.1-.1c-2.1-1.8-3.9-3.3-5.2-4.8-1.2-1.4-1.7-2.7-1.7-4.1 0-1.3.4-2.5 1.2-3.4.8-.8 1.9-1.3 3-1.3.9 0 1.6.3 2.3.8.3.2.6.5.8.8.8 1 2.5 1 3.3 0 .3-.3.5-.6.8-.8.7-.5 1.5-.8 2.3-.8 1.2 0 2.3.5 3 1.3.8.9 1.2 2.1 1.2 3.4.3 1.4-.2 2.6-1.4 4.1z"/>
	</g>
</svg>
	);
};

export default HeartCheck;