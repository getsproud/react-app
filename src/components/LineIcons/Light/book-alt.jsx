import React from 'react';

function BookAlt(props) {
	const title = props.title || "book alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M14.8 51c1.1-1.1 2.6-1.7 4.2-1.7h33.5c.8 0 1.5-.7 1.5-1.5V1.5c0-.8-.7-1.5-1.5-1.5H11.6c-.8 0-1.5.7-1.5 1.5v54.2c0 .1 0 .3.1.4.5 4.4 4.3 7.9 8.8 7.9h33.2c.8 0 1.5-.7 1.5-1.5S53 61 52.2 61H18.9c-3.2 0-5.9-2.6-5.9-5.8v-.1c.1-1.5.7-3 1.8-4.1zM50.9 3v43.3h-32c-2.2 0-4.3.8-5.9 2.2V3h37.9z"/>
		<path d="M24.4 15.4h15.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H24.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default BookAlt;