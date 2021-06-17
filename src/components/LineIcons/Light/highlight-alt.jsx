import React from 'react';

function HighlightAlt(props) {
	const title = props.title || "highlight alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.6 11.8l-9.2-9.2c-.9-.9-2.1-1.4-3.4-1.4s-2.5.5-3.4 1.4l-34 34.1c-.8.8-.8 2 0 2.7l.9.9-5.8 5.8c-1 1-1.4 2.2-1.4 3.5l-6 6c-.5.5-.4 1.4.2 1.7l9.9 5.3c.5.3 1.2.2 1.6-.2l3.5-3.5c1.3 0 2.5-.5 3.4-1.4l5.8-5.8.9.9c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l34.1-34.1c.9-.9 1.4-2.1 1.4-3.4.1-1.3-.4-2.4-1.3-3.3zM16.9 55.4c-.7.7-1.8.7-2.5 0l-4.6-4.6c-.7-.7-.7-1.8 0-2.5l5.8-5.8 7.1 7.1-5.8 5.8zm43.6-39.1L27.1 49.7l-.2-.2-11.3-11.3-.2-.2L48.8 4.7c.7-.7 1.8-.7 2.5 0l9.2 9.2c.3.3.5.8.5 1.2 0 .5-.2.9-.5 1.2z"/>
	</g>
</svg>
	);
};

export default HighlightAlt;