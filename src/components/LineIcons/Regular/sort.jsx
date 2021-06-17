import React from 'react';

function Sort(props) {
	const title = props.title || "sort";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M25 49.8L16.5 58l-.2-55c0-1-.8-1.7-1.8-1.7s-1.7.8-1.7 1.8L13 58l-8.8-8.2c-.7-.7-1.8-.6-2.5.1s-.6 1.8.1 2.5l10 9.3.1.1c.8.6 1.8 1 2.8 1 1 0 2-.3 2.8-1l9.9-9.5c.7-.7.7-1.8.1-2.5-.7-.6-1.8-.7-2.5 0z"/>
		<path d="M62.2 12.1L51.9 2.3l-.1-.1c-1.6-1.3-4-1.3-5.7 0l-9.9 9.4c-.7.7-.7 1.8-.1 2.5.7.7 1.8.7 2.5.1L47.2 6l.2 55c0 1 .8 1.7 1.8 1.7s1.7-.8 1.7-1.8L50.7 6l9.1 8.6c.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.5.6-.7.6-1.8-.1-2.5z"/>
	</g>
</svg>
	);
};

export default Sort;