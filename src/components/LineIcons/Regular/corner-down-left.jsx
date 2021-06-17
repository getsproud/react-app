import React from 'react';

function CornerDownLeft(props) {
	const title = props.title || "corner down left";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.1 1.3c-1 0-1.8.8-1.8 1.8v32.2c0 3.1-2.5 5.6-5.6 5.6H8c.2-.5.4-.9.8-1.3l12-14.3c.6-.7.5-1.8-.2-2.5-.7-.6-1.8-.5-2.5.2l-12 14.3c-2.6 3.1-2.6 7.5 0 10.6l12 14.3c.3.4.8.6 1.3.6.4 0 .8-.1 1.1-.4.7-.6.8-1.7.2-2.5l-12-14.3c-.3-.4-.6-.8-.8-1.3h42.7c5 0 9.1-4.1 9.1-9.1V3c.1-1-.7-1.7-1.6-1.7z"/>
	</g>
</svg>
	);
};

export default CornerDownLeft;