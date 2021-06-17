import React from 'react';

function BricksAlt(props) {
	const title = props.title || "bricks alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.5 36H47.4v-8.6c0-1.4-1.1-2.5-2.5-2.5H25.2v-8.6c0-1.4-1.1-2.5-2.5-2.5H2.5C1.1 13.9 0 15 0 16.4v9.1c0 .4.1.7.2 1-.1.3-.2.6-.2 1v9.1c0 .4.1.7.2 1-.1.3-.2.6-.2 1v9.1c0 1.4 1.1 2.5 2.5 2.5h20.2c.4 0 .7-.1 1-.2.3.1.6.2 1 .2h20.2c.4 0 .7-.1 1-.2.3.1.6.2 1 .2h14.6c1.4 0 2.5-1.1 2.5-2.5v-9.1c0-1.4-1.1-2.6-2.5-2.6zm-17.1 0H25.2v-8h19.2v8zM3 28h19.2v8H3v-8zm0-11.1h19.2V25H3v-8.1zM3 39h19.2v8.1H3V39zm22.2 0h19.2v8.1H25.2V39zM61 47.1H47.4V39H61v8.1z"/>
	</g>
</svg>
	);
};

export default BricksAlt;