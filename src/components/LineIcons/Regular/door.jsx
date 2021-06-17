import React from 'react';

function Door(props) {
	const title = props.title || "door";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48.3 1.3H15.7C12.6 1.3 10 3.8 10 7v50c0 3.2 2.6 5.8 5.8 5.8h32.5c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.8-5.7zM50.5 57c0 1.2-1 2.3-2.3 2.3H15.7c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h32.5c1.2 0 2.3 1 2.3 2.3v50z"/>
		<path d="M42.9 28c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4 3.4-1.5 3.4-3.4-1.6-3.4-3.4-3.4z"/>
	</g>
</svg>
	);
};

export default Door;