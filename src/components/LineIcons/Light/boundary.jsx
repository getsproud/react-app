import React from 'react';

function Boundary(props) {
	const title = props.title || "boundary";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.5 9.8L53.2 6c-1.3-.6-2.8-.5-4.1.2l-6.3 3.6c-.4.2-.9.3-1.4.1L33.3 6c-1.3-.6-2.8-.6-4 .1l-6.9 3.7c-.4.2-.9.2-1.4 0L13.5 6c-1.3-.7-2.9-.6-4.2.1l-7.1 4C.8 10.9 0 12.4 0 14v37.3c0 3.9 3.3 7.1 7.3 7.1h49.4c4 0 7.3-3.2 7.3-7.1V13.7c0-1.7-1-3.2-2.5-3.9zm-30.8-1c.4-.2.9-.2 1.3 0l8.1 3.9c.5.2 1 .4 1.5.4v42.4H22.4V13c.5-.1 1-.2 1.4-.5l6.9-3.7zM3 51.3V14c0-.5.3-.9.7-1.2l7.1-4c.2-.1.5-.2.7-.2.2 0 .4.1.7.2l7.2 3.6v43H7.3c-2.4 0-4.3-1.8-4.3-4.1zm58 0c0 2.3-1.9 4.1-4.3 4.1H44.6V12.2l6-3.5c.4-.2.9-.3 1.3-.1l8.3 3.8c.5.2.8.7.8 1.2v37.7z"/>
	</g>
</svg>
	);
};

export default Boundary;