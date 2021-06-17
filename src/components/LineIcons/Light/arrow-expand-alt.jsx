import React from 'react';

function ArrowExpandAlt(props) {
	const title = props.title || "arrow expand alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M26.4 35.5L3.1 58.9l-.1-6c0-.8-.7-1.5-1.5-1.5S0 52 0 52.9l.1 8.2v.1c.1 1.5 1.3 2.7 2.8 2.8h8.4c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6l23.3-23.4c.6-.6.6-1.5 0-2.1-.7-.6-1.6-.6-2.2 0z"/>
		<path d="M64 2.8C63.9 1.3 62.7.1 61.2 0H52.9c-.8 0-1.5.7-1.5 1.5S52 3 52.9 3h6L35.5 26.4c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4s.8-.1 1.1-.4L61 5.1v6.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V2.8z"/>
	</g>
</svg>
	);
};

export default ArrowExpandAlt;