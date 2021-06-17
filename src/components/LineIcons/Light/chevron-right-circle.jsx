import React from 'react';

function ChevronRightCircle(props) {
	const title = props.title || "chevron right circle";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M27.7 14.5c-.5-.7-1.4-.9-2.1-.4-.7.5-.9 1.4-.4 2.1L35.9 32 25.2 47.8c-.5.7-.3 1.6.4 2.1.3.2.6.3.8.3.5 0 1-.2 1.2-.7l11-16.2c.5-.8.5-1.9 0-2.7L27.7 14.5z"/>
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
	</g>
</svg>
	);
};

export default ChevronRightCircle;