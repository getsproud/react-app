import React from 'react';

function Box9(props) {
	const title = props.title || "box 9";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.7 16.6l-11.6-13c-1.4-1.5-3.3-2.4-5.3-2.4H21.2c-2.1 0-4 .9-5.4 2.4l-11.5 13c-1.2 1.3-1.8 3-1.8 4.8v34.2c0 4 3.2 7.2 7.2 7.2h44.7c4 0 7.2-3.2 7.2-7.2V21.4c-.1-1.8-.7-3.5-1.9-4.8zM6.2 56.8c-.1-.4-.2-.8-.2-1.2V21.4v-.3h46.8L6.2 56.8zM45.5 6l10.3 11.6H33.7V4.8h9c1.1 0 2.1.4 2.8 1.2zm-27 0c.7-.8 1.7-1.2 2.8-1.2h9v12.8H8.1L18.5 6zm35.8 53.2H9.7c-.3 0-.5 0-.8-.1L58 21.4v34.1c0 2.1-1.6 3.7-3.7 3.7z"/>
	</g>
</svg>
	);
};

export default Box9;