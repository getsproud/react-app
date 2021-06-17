import React from 'react';

function CornerDoubleDownLeft(props) {
	const title = props.title || "corner double down left";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.1 14.3L50.4 4.4c-2.6-2.2-6.5-2.2-9.1 0l-11.7 9.9c-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.5.2l11.7-9.9c.2-.1.4-.3.6-.4v31.6c0 2.4-1.9 4.3-4.3 4.3H5.2c.1-.2.2-.4.4-.6l9.9-11.7c.6-.7.5-1.8-.2-2.5-.7-.6-1.8-.5-2.5.2L2.9 39.8c-2.2 2.6-2.2 6.5 0 9.1l9.9 11.7c.3.4.8.6 1.3.6.4 0 .8-.1 1.1-.4.7-.6.8-1.7.2-2.5L5.6 46.6c-.1-.2-.3-.4-.4-.6h34.6c4.3 0 7.8-3.5 7.8-7.8V6.7c.2.1.4.3.5.4L59.9 17c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.7-.8.6-1.9-.2-2.5z"/>
	</g>
</svg>
	);
};

export default CornerDoubleDownLeft;