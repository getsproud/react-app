import React from 'react';

function DropperAlt(props) {
	const title = props.title || "dropper alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.5 16.9l3.2-3.1c1.5-1.4 2.3-3.3 2.3-5.4 0-2-.8-3.9-2.3-5.4-3-2.9-7.9-2.9-10.9 0l-3.2 3.1-3.4-3.3c-1.6-1.6-4.3-1.6-6 0l-4.9 4.7c-.8.8-1.3 1.8-1.3 3 0 1.1.4 2.2 1.3 3l3.4 3.3L2.3 50.2C.8 51.6 0 53.5 0 55.5s.8 3.9 2.3 5.4c1.5 1.5 3.5 2.2 5.5 2.2s4-.7 5.5-2.2l34.4-33.4 3.4 3.3c.8.8 1.9 1.2 3 1.2s2.2-.4 3-1.2l4.9-4.7c.8-.8 1.3-1.8 1.3-3 0-1.1-.4-2.2-1.3-3l-3.5-3.2zM52.9 5.2c1.9-1.8 4.9-1.8 6.8 0 .9.9 1.4 2 1.4 3.2 0 1.2-.5 2.4-1.4 3.2l-3.2 3.1-6.7-6.5 3.1-3zM11.1 58.8c-1.9 1.8-4.9 1.8-6.8 0-.9-.9-1.4-2-1.4-3.2 0-1.2.5-2.4 1.4-3.2L38.7 19l6.7 6.5-34.3 33.3zM59.8 24l-4.9 4.7c-.5.5-1.3.5-1.8 0L35.3 11.4c-.2-.2-.3-.5-.3-.8 0-.3.1-.6.3-.8l4.9-4.7c.5-.5 1.3-.5 1.8 0l17.8 17.3c.2.2.4.5.4.8 0 .3-.2.5-.4.8z"/>
	</g>
</svg>
	);
};

export default DropperAlt;