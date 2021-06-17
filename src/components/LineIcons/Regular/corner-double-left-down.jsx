import React from 'react';

function CornerDoubleLeftDown(props) {
	const title = props.title || "corner double left down";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.1 15.1L51.2 3.4c-.6-.7-1.7-.8-2.5-.2-.7.6-.8 1.7-.2 2.5l9.9 11.7c.1.2.3.4.4.6H24.2c-4.3 0-7.8 3.5-7.8 7.8v31.6c-.2-.1-.4-.2-.6-.4L4.1 47c-.7-.6-1.8-.5-2.5.2-.6.8-.5 1.9.3 2.5l11.7 9.9c1.3 1.1 2.9 1.7 4.6 1.7 1.6 0 3.2-.6 4.6-1.7l11.7-9.9c.7-.6.8-1.7.2-2.5s-1.7-.8-2.5-.2l-11.7 9.9c-.2.1-.4.3-.6.4V25.7c0-2.4 1.9-4.3 4.3-4.3h34.6c-.1.2-.2.4-.4.6l-9.9 11.7c-.6.7-.5 1.8.2 2.5.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6L61 24.3c2.3-2.7 2.3-6.5.1-9.2z"/>
	</g>
</svg>
	);
};

export default CornerDoubleLeftDown;