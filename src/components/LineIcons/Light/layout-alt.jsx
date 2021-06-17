import React from 'react';

function LayoutAlt(props) {
	const title = props.title || "layout alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 0h-61C.7 0 0 .7 0 1.5v37c0 .9.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5v-37c0-.8-.7-1.5-1.5-1.5zM61 37H3V3h58v34z"/>
		<path d="M56.6 49.6H7.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h49.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M56.6 61H7.4c-.8 0-1.5.7-1.5 1.5S6.6 64 7.4 64h49.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default LayoutAlt;