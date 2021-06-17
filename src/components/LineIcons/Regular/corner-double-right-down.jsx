import React from 'react';

function CornerDoubleRightDown(props) {
	const title = props.title || "corner double right down";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.3 47.3c-.6-.7-1.7-.8-2.5-.2L48.1 57c-.2.1-.4.3-.6.4V25.7c0-4.3-3.5-7.8-7.8-7.8H5.2c.1-.2.2-.4.4-.6l9.9-11.7c.6-.7.5-1.8-.2-2.5-.7-.6-1.8-.5-2.5.2L2.9 15.1c-2.2 2.6-2.2 6.5 0 9.1L12.8 36c.3.4.8.6 1.3.6.4 0 .8-.1 1.1-.4.7-.6.8-1.7.2-2.5L5.6 22c-.1-.2-.3-.4-.4-.6h34.6c2.4 0 4.3 1.9 4.3 4.3v31.6c-.2-.1-.4-.2-.6-.4L31.8 47c-.7-.6-1.8-.5-2.5.2-.6.7-.5 1.8.2 2.5l11.7 9.9c1.3 1.1 2.9 1.7 4.6 1.7 1.6 0 3.2-.6 4.6-1.7l11.7-9.9c.8-.6.9-1.7.2-2.4z"/>
	</g>
</svg>
	);
};

export default CornerDoubleRightDown;