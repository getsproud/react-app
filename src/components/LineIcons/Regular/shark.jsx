import React from 'react';

function Shark(props) {
	const title = props.title || "shark";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M21.1 37.5c.1 0 3-.2 6.4-1 4.1-1 7-2.3 8.6-3.9.3-.3.8-.5 1.2-.5H42c9.5 0 17.3-7.8 17.3-17.3L41 14.7c-.9 0-1.6-.6-1.7-1.5-.8-4.8-5-8.5-9.9-8.5h-.2v8.2c0 1-.8 1.8-1.8 1.8h-4.6c-4.8 0-9.4 1.9-12.8 5.3-3.4 3.4-5.3 8-5.3 12.8 0 4.7 2 9.4 5.4 12.8l1.7 1.7c.6.6.7 1.5.3 2.2-1.6 2.7-2.1 6-1.2 9l.2.8h.1l6.9-8.6c.2-.3.5-.5.8-.6 4.4-1.5 8.5-2.3 10-2.6-.8-.5-1.1-1.5-.7-2.4.4-.9 1.5-1.3 2.3-.8 1.2.6 2 1.8 2 3.2 0 1.4-.8 2.6-2 3.2-.2.1-.3.1-.5.2 0 0-4.6.8-9.6 2.4l-6.6 8.2c-.7.9-1.7 1.3-2.8 1.3-.2 0-.5 0-.7-.1-1.3-.3-2.4-1.2-2.7-2.5l-.2-.8c-1-3.5-.7-7.3.9-10.6l-.6-.8c-4.1-4-6.4-9.6-6.5-15.2 0-5.8 2.2-11.2 6.3-15.3 4.1-4.1 9.5-6.3 15.2-6.3h2.9V4.8c0-1.8 1.4-3.6 3.7-3.6 6.1 0 11.5 4.2 13.1 10h16.9c2 0 3.6 1.6 3.6 3.6 0 11.5-9.3 20.8-20.8 20.8H38c-2.1 1.9-5.4 3.3-9.7 4.3-3.5.8-6.5 1.1-6.9 1.1-1.4.1-2.7-.6-3.4-1.8-.7-1.1-.6-2.5.1-3.6h-3c.1.7.3 1.6.7 2.5.4.9 0 1.9-.8 2.3-.9.4-1.9 0-2.3-.8-.8-1.6-1.5-4.3-1-6.2.2-.8.9-1.3 1.7-1.3h8.1c.7 0 1.3.4 1.6.9.3.6.3 1.3-.1 1.8l-1.9 2.7c0-.1-.1 0 0 0z"/>
	</g>
</svg>
	);
};

export default Shark;