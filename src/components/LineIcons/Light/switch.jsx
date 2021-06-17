import React from 'react';

function Switch(props) {
	const title = props.title || "switch";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.1 37c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l9.2 9.6h-.1l-58.6.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5l58.5-.2h.1L51 61.5c-.6.6-.5 1.6.1 2.1.3.3.7.4 1 .4.4 0 .8-.2 1.1-.5L63 53l.1-.1c1.3-1.6 1.3-4 0-5.5L53.1 37z"/>
		<path d="M10.8 27.4c.3.3.7.5 1.1.5.4 0 .7-.1 1-.4.6-.6.6-1.5.1-2.1l-9.1-9.6H4l58.5-.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5L4 12.7h-.1l9.6-10.1c.6-.6.5-1.5-.1-2.1-.6-.6-1.5-.5-2.1.1L1 11.3v.1c-1.3 1.6-1.3 4 0 5.5l9.8 10.5z"/>
	</g>
</svg>
	);
};

export default Switch;