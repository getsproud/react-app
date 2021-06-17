import React from 'react';

function ConstructionHammer(props) {
	const title = props.title || "construction hammer";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.9 0H13.5c-1.6 0-3.1.9-3.8 2.4L1.3 19c-.7 1.3-.6 2.9.2 4.2.8 1.3 2.1 2 3.6 2h17v35.3c0 1.9 1.6 3.5 3.5 3.5h12.6c1.9 0 3.5-1.6 3.5-3.5V25.2h17.1c2.4 0 4.3-1.9 4.3-4.3V4.3c0-2.4-1.9-4.3-4.2-4.3zM38.8 60.5c0 .3-.2.5-.5.5H25.7c-.3 0-.5-.2-.5-.5V25.2h13.6v35.3zm21.3-39.6c0 .7-.6 1.3-1.3 1.3H5.2c-.6 0-1-.4-1.1-.6-.1-.2-.3-.7-.1-1.2l8.3-16.6c.2-.5.7-.8 1.2-.8h45.4c.7 0 1.3.6 1.3 1.3v16.6z"/>
	</g>
</svg>
	);
};

export default ConstructionHammer;