import React from 'react';

function MagicWand(props) {
	const title = props.title || "magic wand";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.4 58.1L23.1 24.4l7.3-2.4c.5-.2.9-.6 1-1.2s-.2-1.1-.6-1.5L23.3 14l.2-9.3c0-.6-.3-1.1-.8-1.4-.5-.3-1.1-.2-1.6.1l-7.5 5.7L5 6.3c-.5-.2-1.1 0-1.5.4-.5.4-.6.9-.4 1.5L6 17 .4 24.6c-.4.4-.5 1.1-.2 1.6s.7.8 1.4.8l9.2-.2 5.2 7.5c.3.4.7.6 1.2.6h.2c.6-.1 1-.5 1.2-1l2.3-7.4 40.5 33.9c.3.2.6.3 1 .3s.9-.2 1.2-.5c.6-.6.5-1.5-.2-2.1zM18.9 23.3l-2.2 6.8-4-5.7c-.3-.4-.7-.6-1.2-.6l-7 .2 4.3-5.7c.3-.4.4-.9.2-1.4l-2.2-6.7 6.7 2.2c.5.2 1 .1 1.4-.2l5.6-4.3-.2 7c0 .5.2 1 .6 1.3l5.7 4-6.8 2.2c-.4.1-.7.4-.9.9z"/>
	</g>
</svg>
	);
};

export default MagicWand;