import React from 'react';

function Brain(props) {
	const title = props.title || "brain";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.7 30.2c-.1-3.5-1.9-6.8-4.5-8.8.2-3-.7-6-2.7-8.3-1.8-2.1-4.2-3.4-6.8-3.7-1.5-3.4-4.5-5.7-8.1-6.3-3.2-.4-6.3.6-8.6 2.9-2.3-2.2-5.4-3.2-8.6-2.8-3.6.5-6.6 2.9-8.1 6.3-2.6.3-5.1 1.6-6.8 3.7-1.9 2.3-2.9 5.3-2.7 8.3C3 23.6 1.3 27 1.3 30.7c0 4.4 2.4 8.3 6 10.1-.3 2.6.3 5.3 1.7 7.5 1.4 2.1 3.4 3.7 5.7 4.4 1 4 4 7 8 7.9 3.4.8 6.9-.2 9.4-2.6 1.9 1.8 4.4 2.9 7 2.9.8 0 1.6-.1 2.3-.3 4-.9 6.9-3.9 8-7.9 2.3-.7 4.3-2.3 5.7-4.4 1.4-2.2 2-4.9 1.8-7.5 3.6-2 6-6.1 5.8-10.6zm-39.3 27c-2.3-.5-4.9-2.4-5.5-6.2-.1-.7-.7-1.3-1.4-1.4-1.8-.4-3.5-1.5-4.5-3.2-1.2-1.8-1.6-4.1-1.1-6.3.2-.9-.3-1.8-1.1-2.1-3-1-5-4-5-7.4 0-2.8 1.5-5.5 3.8-6.8.6-.4 1-1.1.9-1.8-.4-2.4.2-4.8 1.8-6.6 1.4-1.6 3.2-2.5 5.2-2.5h.1c.8 0 1.4-.5 1.7-1.2.9-2.8 3.1-4.7 5.8-5.1 2.4-.4 4.7.6 6.3 2.6v45.5c-1.9 2.2-4.4 3.1-7 2.5zM54.3 38c-.9.3-1.4 1.2-1.1 2.1.5 2.2.1 4.5-1.1 6.3-1.1 1.7-2.7 2.8-4.5 3.2-.7.1-1.3.7-1.4 1.4-.6 3.8-3.3 5.7-5.5 6.2-2.6.6-5.1-.3-6.8-2.5V9.2c1.6-2 3.9-2.9 6.3-2.6 2.7.4 4.8 2.3 5.8 5.1.2.7 1 1.2 1.8 1.2 2 0 3.9.9 5.2 2.5 1.5 1.8 2.2 4.2 1.8 6.6-.1.7.2 1.4.9 1.8 2.2 1.3 3.7 3.8 3.8 6.5-.1 3.5-2.2 6.7-5.2 7.7z"/>
		<path d="M24.3 28.1c-.4.1-2.6 1-4.4 2.5-.6-.3-1.1-.8-1.3-1.3-.5-1.3 0-3 .2-3.5.4-.9 0-1.9-.8-2.3-.9-.4-1.9 0-2.3.8-.2.3-1.5 3.4-.3 6.4.4.9 1.1 1.9 2.4 2.8-.1.3-.2.5-.2.8-.4 2.1.6 4.1 2.8 5.9.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.5-1.8-.2-2.5-.8-.7-1.8-1.7-1.6-2.6.3-1.5 3.1-3 4.4-3.5.9-.3 1.4-1.3 1.1-2.2-.3-.9-1.3-1.4-2.2-1.1z"/>
		<path d="M47.9 23.5c-.9.4-1.2 1.5-.8 2.3 0 0 .9 2 .2 3.5-.2.5-.7 1-1.3 1.3-1.8-1.5-4-2.4-4.4-2.5-.9-.3-1.9.2-2.2 1.1-.3.9.1 1.9 1.1 2.2 1.3.5 4.2 2 4.4 3.5.2.9-.8 1.9-1.6 2.6-.7.6-.8 1.7-.2 2.5.3.4.8.6 1.3.6.4 0 .8-.1 1.1-.4 2.3-1.9 3.2-3.9 2.8-5.9-.1-.3-.1-.6-.2-.8 1.3-.9 2.1-1.9 2.4-2.8 1.3-2.9-.1-6-.3-6.4-.3-.8-1.4-1.2-2.3-.8z"/>
	</g>
</svg>
	);
};

export default Brain;