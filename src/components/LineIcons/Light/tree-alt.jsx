import React from 'react';

function TreeAlt(props) {
	const title = props.title || "tree alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.5 41.8l-14.1-19h7.1c.6 0 1.1-.3 1.3-.8.3-.5.2-1.1-.1-1.6L33.2.6c-.6-.8-1.8-.8-2.4 0L16.2 20.4c-.3.5-.4 1.1-.1 1.6.3.5.8.8 1.3.8h7.1l-14.1 19c-.3.5-.4 1.1-.1 1.6.3.5.8.8 1.3.8h18.8v18.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V44.3v-.2h18.8c.6 0 1.1-.3 1.3-.8.4-.5.3-1.1 0-1.5zm-38.8-.6l14.1-19c.3-.5.4-1.1.1-1.6-.3-.5-.8-.8-1.3-.8h-7.1L32 4l11.6 15.7h-7.1c-.6 0-1.1.3-1.3.8-.3.5-.2 1.1.1 1.6l14.1 19H14.7z"/>
	</g>
</svg>
	);
};

export default TreeAlt;