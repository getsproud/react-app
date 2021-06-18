import React from 'react';

function UserKey(props) {
	const title = props.title || "user key";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.6 31.9c-.9-.4-1.9-.1-2.3.8l-.7 1.5-2.7-1.3c-.9-.4-1.9-.1-2.3.8-.4.9-.1 1.9.8 2.3l2.7 1.3-3.9 8c-1.6-.4-3.3-.3-4.9.2-2.2.8-3.9 2.3-4.9 4.4s-1.1 4.4-.4 6.5c.8 2.2 2.3 3.9 4.4 4.9 1.2.6 2.4.8 3.7.8.9 0 1.9-.2 2.8-.5 2.2-.8 3.9-2.3 4.9-4.4s1.1-4.4.4-6.5c-.6-1.6-1.6-2.9-2.9-3.9l6.1-12.7c.5-.8.1-1.8-.8-2.2zm-5.9 23.9c-.6 1.2-1.6 2.1-2.9 2.6-1.3.4-2.6.4-3.9-.2-1.2-.6-2.1-1.6-2.6-2.9-.3-1.3-.3-2.6.3-3.8.6-1.2 1.6-2.1 2.9-2.6.5-.2 1.1-.3 1.7-.3.7 0 1.5.2 2.2.5 1.2.6 2.1 1.6 2.6 2.9.4 1.3.3 2.6-.3 3.8z"/>
		<path d="M32.7 59c-1.6.2-3.3.3-4.8.3-8.9 0-17.4-3.5-21-5.1.3-6.8 2.5-12.9 6.3-17.4 3.9-4.6 9.1-7.1 14.7-7.1s10.8 2.5 14.7 7.1c.6.7 1.7.8 2.5.2.7-.6.8-1.7.2-2.5-3.4-4.1-7.8-6.8-12.6-7.8 4.9-2 8.3-6.7 8.3-12.3 0-7.2-5.9-13.1-13.1-13.1S14.8 7.1 14.8 14.4c0 5.6 3.5 10.3 8.4 12.2-4.8 1.1-9.2 3.8-12.6 7.8-4.5 5.3-7 12.6-7.1 20.7 0 .7.4 1.3 1 1.6 2.8 1.4 12.9 6 23.6 6 1.7 0 3.5-.1 5.2-.3 1-.1 1.6-1 1.5-1.9-.2-1-1.1-1.6-2.1-1.5zM18.3 14.4c0-5.3 4.3-9.6 9.6-9.6s9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6-9.6-4.3-9.6-9.6z"/>
	</g>
</svg>
	);
};

export default UserKey;