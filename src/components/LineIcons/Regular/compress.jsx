import React from 'react';

function Compress(props) {
	const title = props.title || "compress";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M20.1 20.8c-.6-.7-1.7-.8-2.5-.2-.7.6-.8 1.7-.2 2.5l6.1 7.2H3c-1 0-1.8.8-1.8 1.8S2 33.8 3 33.8h20.5L17.4 41c-.6.7-.5 1.8.2 2.5.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6l6.6-7.8c1.7-2 1.7-4.8 0-6.8l-6.5-7.9z"/>
		<path d="M61 30.3H40.5l6.1-7.2c.6-.7.5-1.8-.2-2.5-.7-.6-1.8-.5-2.5.2l-6.6 7.8c-1.7 2-1.7 4.8 0 6.8l6.6 7.8c.3.4.8.6 1.3.6.4 0 .8-.1 1.1-.4.7-.6.8-1.7.2-2.5l-6.1-7.2H61c1 0 1.8-.8 1.8-1.8s-.8-1.6-1.8-1.6z"/>
	</g>
</svg>
	);
};

export default Compress;