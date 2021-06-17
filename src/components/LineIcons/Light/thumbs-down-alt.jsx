import React from 'react';

function ThumbsDownAlt(props) {
	const title = props.title || "thumbs down alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M8.8 3.8H5.3C2.4 3.8 0 6.2 0 9.1v25.5c0 2.9 2.4 5.3 5.3 5.3h3.5c2.9 0 5.3-2.4 5.3-5.3V9.1c0-2.9-2.4-5.3-5.3-5.3zm2.3 30.7c0 1.3-1 2.3-2.3 2.3H5.3c-1.3 0-2.3-1-2.3-2.3V9.1c0-1.3 1-2.3 2.3-2.3h3.5c1.3 0 2.3 1 2.3 2.3v25.4z"/>
		<path d="M63.7 30c0-.7 0-1.7-.4-2.5L55 8c-1.1-2.6-3.6-4.2-6.4-4.2h-25c-3.9 0-7 3.1-7 7v27.5c0 2.1.8 3.9 2.2 5l15.3 15.2c1.1 1.1 2.6 1.7 4.1 1.7 1.4 0 2.8-.5 3.9-1.5.1-.1.2-.2.2-.3.9-1.3 1.4-2.6 1.4-3.9v-.8-.3l-2.4-10.8H57c3.9 0 7-3.1 7-7.1l-.3-5.5zM57 39.6H39.5c-.5 0-.9.2-1.2.6-.3.3-.4.8-.3 1.2l2.7 12.5v.7c0 .6-.3 1.3-.7 2-1.1.9-2.7.8-3.8-.2L20.9 41.1c-.1 0-.1-.1-.2-.1-.9-.7-1.1-1.8-1.1-2.7V10.8c0-2.2 1.8-4 4-4h25c1.5 0 3 1 3.6 2.4l8.4 19.6c.1.2.1 1 .1 1.3v.1l.3 5.4c0 2.2-1.8 4-4 4z"/>
	</g>
</svg>
	);
};

export default ThumbsDownAlt;