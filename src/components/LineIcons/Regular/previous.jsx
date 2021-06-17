import React from 'react';

function Previous(props) {
	const title = props.title || "previous";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60 4.2c-1.5-.8-3.4-.7-4.8.3l-36 24.4V6c0-2.6-2.1-4.8-4.8-4.8H6.3C3.6 1.3 1.5 3.4 1.5 6v52c0 2.6 2.1 4.8 4.8 4.8h8.2c2.6 0 4.8-2.1 4.8-4.8V35.1l36 24.4c.8.5 1.7.8 2.6.8.8 0 1.5-.2 2.2-.5 1.5-.8 2.5-2.4 2.5-4.1V8.4C62.5 6.6 61.5 5 60 4.2zM15.7 58c0 .7-.6 1.3-1.3 1.3H6.3c-.7 0-1.3-.6-1.3-1.3V6c0-.7.6-1.3 1.3-1.3h8.2c.7 0 1.3.6 1.3 1.3v52zM59 55.6c0 .6-.4.9-.6 1-.2.1-.7.3-1.2-.1L20.8 32 57.1 7.4c.5-.4 1-.2 1.2-.1.2.1.6.4.6 1v47.3z"/>
	</g>
</svg>
	);
};

export default Previous;