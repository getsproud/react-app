import React from 'react';

function Transform(props) {
	const title = props.title || "transform";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 16.6c.8 0 1.5-.7 1.5-1.5V1.5c0-.8-.7-1.5-1.5-1.5H48.4c-.8 0-1.5.7-1.5 1.5v4.9H17.1V1.5c0-.8-.7-1.5-1.5-1.5H1.5C.7 0 0 .7 0 1.5v13.6c0 .8.7 1.5 1.5 1.5h3.8v30.9H1.5c-.8 0-1.5.7-1.5 1.5v13.6c0 .7.7 1.4 1.5 1.4h14.1c.8 0 1.5-.7 1.5-1.5v-4.7h29.8v4.7c0 .8.7 1.5 1.5 1.5h14.1c.8 0 1.5-.7 1.5-1.5V48.9c0-.8-.7-1.5-1.5-1.5h-3.8V16.6h3.8zM49.9 3H61v10.6H49.9V3zM3 3h11.1v10.6H3V3zm0 58V50.4h11.1V61H3zm58 0H49.9V50.5H61V61zm-5.3-13.6h-7.3c-.8 0-1.5.7-1.5 1.5v5.8H17.1v-5.8c0-.8-.7-1.5-1.5-1.5H8.3V16.6h7.3c.8 0 1.5-.7 1.5-1.5V9.4h29.8v5.7c0 .8.7 1.5 1.5 1.5h7.3v30.8z"/>
	</g>
</svg>
	);
};

export default Transform;