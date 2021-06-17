import React from 'react';

function ArrowDoubleTop(props) {
	const title = props.title || "arrow double top";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M26.8 7.1c.4 0 .7-.1 1-.4l2.7-2.3v22.9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V4.4l2.7 2.3c.6.5 1.6.5 2.1-.1s.5-1.6-.1-2.1L33.7.6c-1-.8-2.4-.8-3.4 0l-4.4 3.9c-.6.5-.7 1.5-.1 2.1.2.4.6.5 1 .5z"/>
		<path d="M33.7 35.8c-1-.8-2.4-.8-3.4 0l-4.4 3.9c-.6.5-.7 1.5-.1 2.1.5.6 1.5.7 2.1.1l2.7-2.3v22.9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V39.6l2.7 2.3c.3.3.6.4 1 .4s.8-.2 1.1-.5c.5-.6.5-1.6-.1-2.1l-4.6-3.9z"/>
	</g>
</svg>
	);
};

export default ArrowDoubleTop;