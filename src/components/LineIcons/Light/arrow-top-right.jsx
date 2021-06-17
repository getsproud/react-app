import React from 'react';

function ArrowTopRight(props) {
	const title = props.title || "arrow top right";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.1 0H37.5c-.8 0-1.5.7-1.5 1.5S36.7 3 37.5 3h20.6c.2 0 .4 0 .6.1L.5 61.4c-.6.6-.6 1.5 0 2.1.3.4.6.5 1 .5s.8-.1 1.1-.4L60.9 5.2c0 .2.1.4.1.6v20.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V5.8C64 2.6 61.3 0 58.1 0z"/>
	</g>
</svg>
	);
};

export default ArrowTopRight;