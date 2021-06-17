import React from 'react';

function BookmarkAlt(props) {
	const title = props.title || "bookmark alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.7 22.2H28v-11c0-1.6-1.3-2.9-2.9-2.9H11.2c-1.6 0-2.9 1.3-2.9 2.9v11H4.2c-2.3 0-4.2 1.9-4.2 4.2v25c0 2.3 1.9 4.2 4.2 4.2h55.5c2.4 0 4.3-1.9 4.3-4.3v-25c0-2.2-1.9-4.1-4.3-4.1zM11.3 11.3H25v20.3l-4.6-3.7-.1-.1c-1.3-.8-3-.8-4.2.1l-4.7 3.8V11.3zM61 51.4c0 .7-.6 1.3-1.3 1.3H4.2c-.7 0-1.2-.6-1.2-1.2v-25c0-.7.6-1.2 1.2-1.2h4.1V32c0 1.1.6 2.1 1.6 2.6.4.2.8.3 1.3.3.6 0 1.3-.2 1.8-.6l4.9-3.9c.2-.1.4-.1.6 0l4.8 3.8c.9.7 2 .8 3 .3s1.6-1.5 1.6-2.6v-6.6h31.8c.7 0 1.3.6 1.3 1.3v24.8z"/>
	</g>
</svg>
	);
};

export default BookmarkAlt;