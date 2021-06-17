import React from 'react';

function Pointer(props) {
	const title = props.title || "pointer";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.9 29.9L5.7.5c-1.6-.8-3.3-.6-4.6.6s-1.5 3-.7 4.5l29.5 56.3c.7 1.3 2 2.1 3.4 2.1h.2c1.5-.1 2.8-1 3.4-2.5l6.9-17.7 17.7-6.9c1.4-.6 2.4-1.8 2.5-3.4.1-1.5-.7-2.9-2.1-3.6zm-1.4 4.2l-18.3 7.1c-.4.2-.7.5-.9.9l-7.1 18.3c-.2.5-.7.6-.8.6-.2 0-.6 0-.8-.5L3.1 4.3c-.3-.5 0-.9.2-1 .1-.1.3-.3.6-.3.1 0 .2 0 .4.1l56.3 29.5c.4.2.5.6.5.8-.1.1-.2.6-.6.7z"/>
	</g>
</svg>
	);
};

export default Pointer;