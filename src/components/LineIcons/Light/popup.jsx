import React from 'react';

function Popup(props) {
	const title = props.title || "popup";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 2.7h-61C.7 2.7 0 3.4 0 4.2v44.5c0 .8.7 1.5 1.5 1.5h20.4c.1 0 .3.1.4.1l8.5 10.4c.3.3.7.5 1.2.5s.9-.2 1.2-.5l8.5-10.4c.1-.1.3-.1.4-.1h20.4c.8 0 1.5-.7 1.5-1.5V4.2c0-.8-.7-1.5-1.5-1.5zM61 47.2H42.1c-1 0-1.9.4-2.5 1l-.1.1-7.5 9.1-7.4-9.1-.1-.1c-.7-.7-1.6-1-2.5-1H3V5.7h58v41.5z"/>
		<path d="M9.8 16.8h36c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-36c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M9.8 27.9h27.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H9.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M9.8 39.1h38.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H9.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default Popup;