import React from 'react';

function Bookmark(props) {
	const title = props.title || "bookmark";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M15.4 64c-.6 0-1.2-.1-1.8-.4-1.6-.7-2.5-2.2-2.5-3.9V4.3C11.1 1.9 13 0 15.4 0h33.3C51.1 0 53 1.9 53 4.3v55.3c0 1.7-1 3.2-2.5 3.9-1.6.7-3.3.4-4.6-.7l-12-10.5c-1.1-.8-2.5-.8-3.6 0l-12 10.6c-.9.7-1.9 1.1-2.9 1.1zm0-61c-.7 0-1.3.6-1.3 1.3v55.4c0 .8.6 1.1.8 1.2.2.1.8.3 1.4-.2l12-10.7c2.2-1.7 5.2-1.7 7.4-.1l.2.2 11.8 10.4c.6.5 1.2.3 1.4.2.2-.1.8-.4.8-1.2V4.3c0-.7-.6-1.3-1.3-1.3H15.4z"/>
	</g>
</svg>
	);
};

export default Bookmark;