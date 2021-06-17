import React from 'react';

function VectorNode(props) {
	const title = props.title || "vector node";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.4 1.2h-7c-2.6 0-4.8 2.1-4.8 4.8v7c0 .7.1 1.3.4 1.9L16.4 46.7c-.6-.2-1.2-.4-1.9-.4h-7c-2.6 0-4.8 2.1-4.8 4.8v7c0 2.6 2.1 4.8 4.8 4.8h7c2.6 0 4.8-2.1 4.8-4.8v-7c0-.7-.1-1.3-.4-1.9l28.7-31.8c.6.2 1.2.4 1.9.4h7c2.6 0 4.8-2.1 4.8-4.8V6c-.1-2.6-2.3-4.8-4.9-4.8zM15.8 58c0 .7-.6 1.3-1.3 1.3h-7c-.7 0-1.3-.6-1.3-1.3v-7c0-.7.6-1.3 1.3-1.3h7c.7 0 1.3.6 1.3 1.3v7zm41.9-45c0 .7-.6 1.3-1.3 1.3h-7c-.7 0-1.3-.6-1.3-1.3V6c0-.7.6-1.3 1.3-1.3h7c.7 0 1.3.6 1.3 1.3v7z"/>
	</g>
</svg>
	);
};

export default VectorNode;