import React from 'react';

function Air(props) {
	const title = props.title || "air";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.5 10.7c0-5.4-4.4-9.8-9.7-9.8-.8 0-1.5.7-1.5 1.5S47.9 4 48.8 4c3.7 0 6.7 3 6.7 6.8 0 3.7-3 6.8-6.7 6.8H1.5C.7 17.5 0 18.2 0 19s.7 1.5 1.5 1.5h47.3c5.3 0 9.7-4.4 9.7-9.8z"/>
		<path d="M11.1 31.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h32.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H11.1z"/>
		<path d="M54.3 45.7H7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h47.3c3.7 0 6.7 3 6.7 6.8 0 1.9-.8 3.7-2.2 5-.6.6-.7 1.5-.1 2.1.3.3.7.5 1.1.5.4 0 .7-.1 1-.4 2-1.9 3.2-4.5 3.2-7.2 0-5.4-4.4-9.8-9.7-9.8z"/>
	</g>
</svg>
	);
};

export default Air;