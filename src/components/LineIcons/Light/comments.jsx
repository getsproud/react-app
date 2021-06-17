import React from 'react';

function Comments(props) {
	const title = props.title || "comments";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 5.6h-61C.7 5.6 0 6.2 0 7.1V57c0 .5.3 1 .7 1.3.2.1.5.2.8.2.3 0 .5-.1.7-.2l19.1-10.9h41.2c.8 0 1.5-.7 1.5-1.5V7.1c0-.9-.7-1.5-1.5-1.5zM61 44.4H20.9c-.3 0-.5.1-.7.2L3 54.4V8.6h58v35.8z"/>
		<path d="M15.4 32.5c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6zm0-9c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"/>
		<path d="M32 32.5c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6zm0-9c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"/>
		<path d="M48.6 32.5c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6zm0-9c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.4-3 3-3z"/>
	</g>
</svg>
	);
};

export default Comments;