import React from 'react';

function SortAlphaAsc(props) {
	const title = props.title || "sort alpha asc";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M29.1 50.4l-8.5 8.5V1.5C20.5.7 19.8 0 19 0s-1.5.7-1.5 1.5v57.4L9 50.4c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l11.1 11c.3.3.7.4 1.1.4s.8-.1 1.1-.4l11.1-11.1c.6-.6.6-1.5 0-2.1-.7-.5-1.7-.5-2.2.1z"/>
		<path d="M55.1 61h-6.6l6.7-11.6c.3-.5.3-1 0-1.5s-.8-.7-1.3-.7H44c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h7.3l-6.7 11.6c-.3.5-.3 1 0 1.5s.8.7 1.3.7h9.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M43.5 14c.1 0 .3.1.5.1h8.3c.1 0 .3 0 .4-.1l1 2c.3.5.8.8 1.3.8.2 0 .5-.1.7-.2.7-.4 1-1.3.7-2L49.4.8c-.2-.5-.7-.8-1.3-.8s-1.1.3-1.3.8l-7 13.8c-.4.7-.1 1.6.7 2 .7.4 1.6.1 2-.7l1-1.9zm4.6-9.2l3.1 6.2H45l3.1-6.2z"/>
	</g>
</svg>
	);
};

export default SortAlphaAsc;