import React from 'react';

function ArrowDoubleLeft(props) {
	const title = props.title || "arrow double left";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M27.4 30.5H4.5l2.3-2.7c.5-.6.5-1.6-.1-2.1s-1.6-.5-2.1.1L.7 30.2c-.8 1-.8 2.4 0 3.4L4.6 38c.3.3.7.5 1.1.5.4 0 .7-.1 1-.4.6-.5.7-1.5.1-2.1l-2.3-2.7h22.9c.8 0 1.5-.7 1.5-1.5s-.7-1.3-1.5-1.3z"/>
		<path d="M62.5 30.5H39.6l2.3-2.7c.5-.6.5-1.6-.1-2.1s-1.6-.5-2.1.1l-3.9 4.5c-.8 1-.8 2.4 0 3.4l3.9 4.4c.3.3.7.5 1.1.5.4 0 .7-.1 1-.4.6-.5.7-1.5.1-2.1l-2.3-2.7h22.9c.8 0 1.5-.7 1.5-1.5s-.7-1.4-1.5-1.4z"/>
	</g>
</svg>
	);
};

export default ArrowDoubleLeft;