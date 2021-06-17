import React from 'react';

function CornerDoubleDownRight(props) {
	const title = props.title || "corner double down right";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.6 41.3l-9.9-11.7c-.6-.7-1.7-.8-2.5-.2-.7.6-.8 1.7-.2 2.5l9.9 11.7c.1.2.3.4.4.6H25.7c-2.4 0-4.3-1.9-4.3-4.3V5.2c.2.1.4.2.6.4l11.7 9.9c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.5-1.8-.2-2.5L24.2 2.9c-2.6-2.2-6.5-2.2-9.1 0L3.4 12.8c-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.5.2l11.7-9.9c.2-.1.4-.3.6-.4v34.6c0 4.3 3.5 7.8 7.8 7.8h31.6c-.1.2-.2.4-.4.6L47 59.9c-.6.7-.5 1.8.2 2.5.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6l9.9-11.7c2.3-2.7 2.3-6.6.1-9.2z"/>
	</g>
</svg>
	);
};

export default CornerDoubleDownRight;