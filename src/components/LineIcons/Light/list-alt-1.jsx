import React from 'react';

function ListAlt1(props) {
	const title = props.title || "list alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M14.9 7.4H1.5C.7 7.4 0 8.1 0 8.9v13.4c0 .8.7 1.5 1.5 1.5h13.4c.8 0 1.5-.7 1.5-1.5V8.9c0-.8-.6-1.5-1.5-1.5zm-1.5 13.5H3V10.4h10.4v10.5z"/>
		<path d="M14.9 40.1H1.5c-.8 0-1.5.7-1.5 1.5V55c0 .8.7 1.5 1.5 1.5h13.4c.8 0 1.5-.7 1.5-1.5V41.6c0-.8-.6-1.5-1.5-1.5zm-1.5 13.5H3V43.1h10.4v10.5z"/>
		<path d="M28.4 12.5h34.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H28.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M62.5 18.8H28.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h34.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M62.5 42.2H28.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h34.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M62.5 51.5H28.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h34.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default ListAlt1;