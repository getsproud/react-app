import React from 'react';

function ThumbsDown(props) {
	const title = props.title || "thumbs down";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54.8 6.7C50.1 3.6 43.3 1.8 36 1.8c-1.3 0-2.4 0-3.7.1C21.6 2.9 17.1 4.7 15 6l-.8.6h-10C1.9 6.5 0 8.5 0 10.9v24.9c0 2.4 1.9 4.3 4.3 4.3h12.9c.4 0 .7.1.9.4 2.3 2.4 8.3 8.9 14.5 18.6 1.3 2 3.3 3.1 5.6 3.1h.5c2.5-.2 4.6-1.5 5.6-3.7 1.6-3-.2-13.2-.6-15.7h1.1c5.5.1 14.7.4 17.2-5.3 4.2-9 1.6-25-7.2-30.8zM3 35.8V10.9c0-.7.6-1.3 1.3-1.3h6.8v27.5H4.3c-.7 0-1.3-.6-1.3-1.3zm56.4.5c-1.8 3.9-10 3.7-14.5 3.6H40l.8 3.4c1.4 7.9 1.4 12.9.9 13.9-.6 1.2-1.7 1.9-3.2 2-1.4.1-2.6-.5-3.4-1.7-6.4-10-12.6-16.7-14.9-19.1-.8-.8-1.9-1.3-3.1-1.3H14V9.5h1.2l1.5-1.1c1.4-.9 5.2-2.5 15.9-3.5 1.2-.1 2.1-.1 3.4-.1 6.6 0 12.9 1.6 17.1 4.4 7.4 4.9 9.8 19.4 6.3 27.1z"/>
	</g>
</svg>
	);
};

export default ThumbsDown;